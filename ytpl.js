import ytpl from "ytpl"
import ytdl from "ytdl-core"
import fs from "fs"
import path from "path"

let playlistUrls = [
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJq5EMcfJFUYfx7oEVDdRPV", // optimistic overworld
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLr6cZxuSMIXWnUG9ZufxCJ", // light forest
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKUyv6nH6e6-8ki3aj_CUzD", // dark forest
    "https://www.youtube.com/playlist?list=PLV8C9t518pCK5neTfe-vosWJtfvC_nZ6M", // happy town
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIQI83Emr6gLntePk57OYH1", // peaceful town
    "https://www.youtube.com/playlist?list=PLV8C9t518pCI_mz0XOh1abdKy1hb-zS2t", // characters
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKAKuh-e4jUrbMNLh8Lcpfz", // let's fucking go
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLyWc9EN0uhUT5SCo4iCC-M", // somber quiet
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKBC3Bdw8Z2TjfghORHvCyS", // final stand
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJ7Ymh3qHv5iqha9F-3n2J7", // victory
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJXjNed2p60cLVcWXDQCeQ6", // ominous
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKZorxgoRyg-bKOnMOrvuVw", // low-level battle
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJ1pywyJTOiKnSYveduHruI", // moderate battle
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJVX2o3tmvpYJhWADDl2DnG", // dangerous battle
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKLk4N3v9p0_CZgfmC5EPN9", // horror battle
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLtVFvndmg8ZRUunVJhTLo3", // magic school
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKdZpR2SJMFndeA1DxcgaWP", // wild west trails
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIZrVv8dtEm1RXdO-9f2p8p", // cool urban
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLhTTHl8BKgS4p6gTbHOnRN", // space victory
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLE68djTZXEcFUCAM8iAAvn", // space chill
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJJYaBrAM0e9y5qWTS9Ic7i", // space stealth
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJW0z3qtum98ySN7hxc33Kc", // space western
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIrwBr4OYIjitXdm5C5q_bD", // space planning
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJYLKmjGEfXtx8LSAhEg87u", // edm ominous
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIMtFs25DMY2h3GN6I2OKV2", // edm quiet
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJaelQO8Vl1HqnrDy-xvvRX", // edm combat
]

let musics = {}
let playlists = await Promise.all(playlistUrls.map((playlistUrl) => {
    return ytpl(playlistUrl)
}))

playlists = playlists.map((playlist) => {
    return {
        "playlistId": playlist.id,
        "title": playlist.title,
        "musics": playlist.items.map((music) => {
            musics[music.id] = {"id": music.id}
            return {
                "youtubeId": music.id,
                "title": music.title,
                "thumbnailUrl": music.bestThumbnail.url,
                "duration": music.durationSec * 1000,
            }
        })
    }
})

// console.log(JSON.stringify(playlists, null, 4))

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
