import fs from "fs"
import ytdl from "ytdl-core"

const music = {"id": "brO4I2O6Ths"}

ytdl("http://www.youtube.com/watch?v=" + music.id, {"filter": "audio"}).pipe(fs.createWriteStream("video.mp3"))

function wait(stream) {
    return new Promise((resolve, reject) => {
        stream.on("finish", resolve)
    })
}
