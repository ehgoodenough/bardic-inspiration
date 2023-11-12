import YoutubePlayer from "models/YoutubePlayer.js"
import Data from "models/Data.js"

const DEFAULT_VOLUME_LEVEL = 0.5

export default new class IO {
    constructor() {
        this.streams = {
            "a": new YoutubePlayer("a"),
            "b": new YoutubePlayer("b"),
        }
        this["a"] = this.streams.a
        this["b"] = this.streams.b
        // this["c"] = new YoutubePlayer("c")

        this.volume = {
            "level": parseInt(window.localStorage.getItem("volume.level")) || DEFAULT_VOLUME_LEVEL,
            "isMuted": window.localStorage.getItem("volume.isMuted") == "true"
        }
    }
    changeVolume(volume) {
        this.volume = volume

        Object.keys(this.streams).forEach((streamId) => {
            this.streams[streamId].setVolume(Data.campaign.streams[streamId].volume)
        })

    }
}
