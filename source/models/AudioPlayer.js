import IO from "models/IO.js"
import Data from "models/Data.js"

export default class AudioPlayer {
    constructor(streamId) {
        this.streamId = streamId
        this.audio = new Audio()
    }
    load(run) {
        if(run.url == undefined) {
            if(run.youtubeId != undefined) {
                run.url = "http://localhost:3000/" + run.youtubeId + ".mp3"
            } else {
                return
            }
        }
        console.log(">", run)
        this.audio.pause()
        this.audio = new Audio(run.url)
        this.setVolume(Data.campaign.streams[this.streamId].volume)
        this.audio.autoplay = true
        this.audio.currentTime = Math.floor(run.currentTime / 1000) || 0.1
        // await new Promise((resolve) => {
        //     this.audio.
        // })
        // this.play()
        // EVENT LISTENERS?

        // if(event.data == YT.PlayerState.PAUSED
        // && Data.campaign.streams[this.streamId]?.run?.state != "paused") {
        //     this.seek(computeCurrentTime(Data.campaign.streams["a"].run))
        //     this.play()
        //     return
        // }
        // if(event.data == YT.PlayerState.PLAYING
        // && Data.campaign.streams[this.streamId]?.run?.state != "playing") {
        //     this.seek(computeCurrentTime(Data.campaign.streams["a"].run))
        //     this.pause()
        //     return
        // }
        //
        // if(event.data == YT.PlayerState.ENDED) {
        //     // if(this.streamdId != "a") return
        //     if(Data.campaign.streams[this.streamId].queue == undefined) return
        //     if(Data.campaign.streams[this.streamId].queue.length == 0) return
        //     const currentMusic = Data.campaign.streams[this.streamId].queue.find((music) => {
        //         return Data.campaign.streams[this.streamId].run.queueId == music.queueId
        //     })
        //     const currentIndex = Data.campaign.streams[this.streamId].queue.indexOf(currentMusic)
        //     const nextIndex = currentIndex + 1
        //     const nextMusic = Data.campaign.streams[this.streamId].queue[nextIndex]
        //     if(nextMusic == undefined) return
        //     const TIME_BETWEEN_SONGS = 500
        //     Something.updateCurrentRun(this.streamId, {
        //         "queueId": nextMusic.queueId,
        //         "youtubeId": nextMusic.youtubeId,
        //         "startTime": Date.now() + TIME_BETWEEN_SONGS,
        //         "state": "playing",
        //     })
        // }
    }
    seek({currentTime}) {
        this.audio.currentTime = Math.floor(currentTime / 1000) || 0.1
    }
    pause() {
        this.audio.pause()
    }
    play() {
        this.audio.play()
    }
    // returns in milliseconds
    get duration() {
        return this.audio.duration * 1000
    }
    // volume is 0 to 100
    setVolume(volume = {"level": 0}) {
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
