import IO from "models/IO.js"
import Data from "models/Data.js"

export default class AudioPlayer {
    constructor(streamId) {
        this.streamId = streamId
        this.audio = new Audio()
    }
    load({url, currentTime}) {
        this.audio.pause()
        this.audio = new Audio(url)
        this.setVolume(Data.campaign.streams[this.streamId].volume)
        this.audio.autoplay = true
        // console.log(this.audio)
        // await new Promise((resolve) => {
        //     this.audio.
        // })
        // this.seek({currentTime})
        // this.play()
        // VOLUME?
        // EVENT LISTENERS?
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
