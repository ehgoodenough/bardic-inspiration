import Data from "models/Data.js"
import Something from "models/Something.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"
import IO from "models/IO.js"

const SILENCE_VIDEO_ID = "g4mHPeMGTJM"

export default class YoutubePlayer {
    constructor(streamId) {
        this.streamId = streamId
    }
    async instantiate() {
        await YoutubeIframeApiReady()
        return new Promise((resolve, reject) => {
            const player = new YT.Player("youtube-" + this.streamId, {
                "width": "300",
                "height": "200",
                "videoId": SILENCE_VIDEO_ID,
                "playerVars": {
                    "fs": 0,
                    "rel": 0,
                    "controls": 1,
                    "disablekb": 1,
                    "modestbranding": 1,
                    "start": (computeCurrentTime(Data.campaign.streams[this.streamId]?.run) / 1000) || 1,
                    "autoplay": false,
                },
                "events": {
                    "onReady": (event) => {
                        this.player = player
                        this.setVolume(Data.campaign.streams["a"]?.volume)
                        resolve()
                    },
                    "onError": (event) => {
                        console.log("onError", event)
                        reject(event)
                    },
                    "onStateChange": (event) => {
                        if(event.data == YT.PlayerState.PAUSED
                        && Data.campaign.streams[this.streamId]?.run?.state != "paused") {
                            this.seek(computeCurrentTime(Data.campaign.streams["a"].run))
                            this.play()
                            return
                        }
                        if(event.data == YT.PlayerState.PLAYING
                        && Data.campaign.streams[this.streamId]?.run?.state != "playing") {
                            this.seek(computeCurrentTime(Data.campaign.streams["a"].run))
                            this.pause()
                            return
                        }

                        if(event.data == YT.PlayerState.ENDED) {
                            // if(this.streamdId != "a") return
                            if(Data.campaign.streams[this.streamId].queue == undefined) return
                            if(Data.campaign.streams[this.streamId].queue.length == 0) return
                            const currentMusic = Data.campaign.streams[this.streamId].queue.find((music) => {
                                return Data.campaign.streams[this.streamId].run.queueId == music.queueId
                            })
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
                        }
                    }
                }
            })
        })
    }
    // youtubeId is just the id not the full url.
    // currentTime is milliseconds.
    async load({youtubeId, currentTime}) {
        if(this.player == undefined) await this.instantiate()
        this.player.loadVideoById({
            "videoId": youtubeId,
            "startSeconds": Math.floor(currentTime / 1000) || 1,
        })
    }
    async seek({currentTime}) {
        if(this.player == undefined) await this.instantiate()
        this.player.seekTo(Math.floor(currentTime / 1000) || 1)
    }
    async pause() {
        if(this.player == undefined) await this.instantiate()
        this.player.pauseVideo()
    }
    async play() {
        if(this.player == undefined) await this.instantiate()
        this.player.playVideo()
    }
    // returns in milliseconds
    get duration() {
        if(this.player == undefined) return
        return this.player.getDuration() * 1000
    }
    // volume is 0 to 100
    setVolume(volume) {
        if(this.player == undefined) return
        volume = volume || {"level": 0}
        let volumeLevel = volume.level * IO.volume.level
        if(volumeLevel < 0.01) volumeLevel = 0
        if(volumeLevel > 0.99) volumeLevel = 1
        this.player.setVolume(volumeLevel * 100)

        if((volume.isMuted == true || IO.volume.isMuted == true)
        && this.player.isMuted() != true) {
            this.player.mute()
        }
        if((volume.isMuted != true && IO.volume.isMuted != true)
        && this.player.isMuted() == true) {
            this.player.unMute()
        }
    }
}

async function YoutubeIframeApiReady() {
    return new Promise((callback) => {
        if(window.isYouTubeIframeAPIReady == true) {
            return callback()
        } else {
            YoutubeIframeApiReady.callbacks = YoutubeIframeApiReady.callbacks || []
            YoutubeIframeApiReady.callbacks.push(callback)
        }
    })
}

window.isYouTubeIframeAPIReady = false
window.onYouTubeIframeAPIReady = function() {
    window.isYouTubeIframeAPIReady = true
    if(YoutubeIframeApiReady.callbacks instanceof Array) {
        YoutubeIframeApiReady.callbacks.forEach((callback) => callback())
    }
}
