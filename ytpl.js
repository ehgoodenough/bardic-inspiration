import ytpl from "ytpl"

let playlistUrls = [
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
