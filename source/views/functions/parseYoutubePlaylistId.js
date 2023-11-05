export default function parseYoutubePlaylistId(string) {
    if(string == undefined) return
    if(string == "") return

    const matches = string.match(/[&?]list=([a-z0-9_]+)/i)
    if(matches == undefined) return
    if(matches[1] == undefined) return
    return matches[1]
}
