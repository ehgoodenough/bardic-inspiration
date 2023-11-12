import IO from "models/IO.js"

export default class AudioPlayer {
    constructor(streamId) {
        this.streamId = streamId
        this.audio = new Audio()
    }
    async load({url, currentTime}) {
        this.audio.pause()
        this.audio = new Audio(url)
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
    async seek({currentTime}) {
        this.audio.currentTime = Math.floor(currentTime / 1000) || 1
    }
    async pause() {
        this.audio.pause()
    }
    async play() {
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
