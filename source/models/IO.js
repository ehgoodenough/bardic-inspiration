import Data from "models/Data.js"
import AudioPlayer from "models/AudioPlayer.js"
import YoutubePlayer from "models/YoutubePlayer.js"

const DEFAULT_VOLUME_LEVEL = 0.5

export default new class IO {
    constructor() {
        this.streams = {
            "a": new YoutubePlayer("a"),
            "b": new YoutubePlayer("b"),
            "c": new AudioPlayer("c"),
        }

        this.volume = {
            "level": parseFloat(window.localStorage.getItem("volume.level")) ?? DEFAULT_VOLUME_LEVEL,
            "isMuted": window.localStorage.getItem("volume.isMuted") == "true"
        }
    }
    updateVolume(volume) {
        this.volume = volume

        window.localStorage.setItem("volume.level", this.volume.level)
        window.localStorage.setItem("volume.isMuted", this.volume.isMuted)

        Object.keys(this.streams).forEach((streamId) => {
            this.streams[streamId].setVolume(Data.campaign.streams[streamId].volume)
        })
    }
}
