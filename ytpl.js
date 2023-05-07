import ytpl from "ytpl"

let playlistUrls = [
    "https://www.youtube.com/playlist?list=PLV8C9t518pCL4Qe7ONLcMahStyQlUnF65",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJ971z_P8AftPnswfjTp4pC",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLk5FQ49Zxkd3zO-mwkISLg",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCK5neTfe-vosWJtfvC_nZ6M",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLyWc9EN0uhUT5SCo4iCC-M",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIQI83Emr6gLntePk57OYH1",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJq5EMcfJFUYfx7oEVDdRPV",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLJVekMt-g8kIx4-4mibhDm",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJXjNed2p60cLVcWXDQCeQ6",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKAKuh-e4jUrbMNLh8Lcpfz",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJVX2o3tmvpYJhWADDl2DnG",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCInIaeVhXxFiHdcVctaDDqB",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJ7Ymh3qHv5iqha9F-3n2J7",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCKUyv6nH6e6-8ki3aj_CUzD",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIXlZj1-Hqn4LMK_JjPVutV",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCK8wM8cEV3RAmk-BJae0PEQ",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIMtFs25DMY2h3GN6I2OKV2",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJYLKmjGEfXtx8LSAhEg87u",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJaelQO8Vl1HqnrDy-xvvRX",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIUE8Wd6xSMEj1sE85H9-Tn",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCJ9DBoCAPteRcVfdzkx7Gx8",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIs5rMxc0zGFZV-0-hvP0c_",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCL-9zXA5pjfZGlXAo90qSou",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCL2BTTDpXnQvRufDK8dcZTw",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCLk03um_zlF6VHTXnnCgNXu",
    "https://www.youtube.com/playlist?list=PLV8C9t518pCIZrVv8dtEm1RXdO-9f2p8p",
]

let playlists = await Promise.all(playlistUrls.map((playlistUrl) => {
    return ytpl(playlistUrl)
}))

playlists = playlists.map((playlist) => {
    return {
        "playlistId": playlist.id,
        "title": playlist.title,
        "musics": playlist.items.map((music) => {
            return {
                "youtubeId": music.id,
                "title": music.title,
                "thumbnailUrl": music.bestThumbnail.url,
                "duration": music.durationSec * 1000,
            }
        })
    }
})

console.log(JSON.stringify(playlists, null, 4))
