import YoutubePlayer from "models/YoutubePlayer.js"

export default new class IO {
    constructor() {
        this["a"] = new YoutubePlayer("a")
        this["b"] = new YoutubePlayer("b")
        // this["c"] = new YoutubePlayer("c")
    }
}
