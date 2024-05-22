import fs from "fs"
import path from "path"
import ytdl from "ytdl-core"

import playlists from "./source/playlists.json"

let music = {}
playlists.forEach((playlist) => {
    playlist.musics.forEach((music) => {
        music[music.id] = music
    })
})

musics = Object.values(musics)
for(const music of musics) {
    process.stdout.write(music.id)
    const filepath = path.resolve("./source/music/" + music.id + ".mp3")
    if(fs.existsSync(filepath)) {
        process.stdout.write(" - already downloaded\n")
        continue
    }
    try {
        const stream = ytdl("http://www.youtube.com/watch?v=" + music.id, {"filter": "audio"})
        stream.on("error", (error) => console.error(error))
        // stream.on("info", (info) => console.log(info))
        stream.on("progress", (chunkLength, currentBytes, totalBytes) => {
            process.stdout.clearLine()
            process.stdout.cursorTo(0)
            process.stdout.write(music.id)
            process.stdout.write(" - " + Math.floor((currentBytes / totalBytes) * 100) + "%")
        })
        await toFinish(stream.pipe(fs.createWriteStream(filepath)))
    } catch(error) {
        console.error(error)
    }
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(music.id)
    process.stdout.write(" - downloaded\n")
}

function toFinish(stream) {
    return new Promise((resolve, reject) => {
        stream.on("finish", resolve)
        stream.on("error", reject)
    })
}
