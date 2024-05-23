import IO from "models/io/IO.js"
import Data from "models/Data.js"
import Something from "models/Something.js"

import YoutubePlayer from "models/io/YoutubePlayer.js"

export default class AudioPlayer {
    constructor(streamId) {
        this.streamId = streamId
        this.backupYoutubePlayer = new YoutubePlayer(streamId)
    }
    load(run) {
        if(run.url == undefined) {
            if(run.youtubeId != undefined) {
                run.url = "http://localhost:3000/" + run.youtubeId + ".mp3"
            } else {
                return
            }
        }

        console.log("LOADING!!")

        this.backupYoutubePlayer.pause()
        if(this.audio != undefined) this.audio.pause()
        this.audio = new Audio(run.url)

        this.audio.addEventListener("error", (event) => {
            if(this.audio.error.code == 4) {
                delete this.audio
                this.backupYoutubePlayer.load(run)
            }
        })

        this.audio.addEventListener("canPlay", (event) => {
            if(event.canPlayed) return
            event.canPlayed = true

            this.audio.autoplay = true
            this.audio.currentTime = Math.floor(run.currentTime / 1000) || 0.1

            const volume = Data.campaign.streams[this.streamId].volume
            let volumeLevel = volume.level * IO.volume.level
            if(volumeLevel < 0.01) volumeLevel = 0
            if(volumeLevel > 0.99) volumeLevel = 1
            this.audio.volume = volumeLevel
            if((volume.isMuted == true || IO.volume.isMuted == true)
            && this.audio.muted != true) {
                this.audio.muted = true
            }
            if((volume.isMuted != true && IO.volume.isMuted != true)
            && this.audio.muted == true) {
                this.audio.muted = false
            }

            this.audio.addEventListener("ended", (event) => {
                if(Data.campaign.streams[this.streamId].queue == undefined) return
                if(Data.campaign.streams[this.streamId].queue.length == 0) return
                const currentMusic = Data.campaign.streams[this.streamId].queue.find((music) => {
                    return Data.campaign.streams[this.streamId].run.queueId == music.queueId
                })

                // if(this.streamdId != "a") return
                const currentIndex = Data.campaign.streams[this.streamId].queue.indexOf(currentMusic)
                const nextIndex = currentIndex + 1
                const nextMusic = Data.campaign.streams[this.streamId].queue[nextIndex]
                if(nextMusic == undefined) return
                const TIME_BETWEEN_SONGS = 500
                Something.updateCurrentRun(this.streamId, {
                    "queueId": nextMusic.queueId,
                    "youtubeId": nextMusic.youtubeId,
                    "startTime": Date.now() + TIME_BETWEEN_SONGS,
                    "state": "playing",
                })
            })
        })
    }
    seek({currentTime}) {
        if(this.audio == undefined) return this.backupYoutubePlayer.seek({currentTime})
        this.audio.currentTime = Math.floor(currentTime / 1000) || 0.1
    }
    pause() {
        this.backupYoutubePlayer.pause()
        this.audio.pause()
    }
    play() {
        if(this.audio == undefined) return this.backupYoutubePlayer.play()
        this.audio.play()
    }
    // returns in milliseconds
    get duration() {
        if(this.audio == undefined) return this.backupYoutubePlayer.duration
        return this.audio.duration * 1000
    }
    // volume is 0 to 100
    setVolume(volume = {"level": 0}) {
        if(this.audio == undefined) return this.backupYoutubePlayer.setVolume(volume)
        let volumeLevel = volume.level * IO.volume.level
        if(volumeLevel < 0.01) volumeLevel = 0
        if(volumeLevel > 0.99) volumeLevel = 1
        this.audio.volume = volumeLevel

        if((volume.isMuted == true || IO.volume.isMuted == true)
        && this.audio.muted != true) {
            this.audio.muted = true
        }
        if((volume.isMuted != true && IO.volume.isMuted != true)
        && this.audio.muted == true) {
            this.audio.muted = false
        }
    }
}
