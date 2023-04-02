export function parseYoutubeId(string) {
    if(string == undefined) return undefined
    if(string == "") return undefined

    if(string.length == 11) return string

    const matches = string.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
    if(matches == undefined) return

    const url = matches[0]
    if(url == undefined) return

    const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)
    const id = (match && match[7].length == 11) ? match[7] : undefined
    return id
}

// Parses a youtube url for the
// embedded start time. A url with
// the query parameters of t=4 is
// to start 4 seconds into the video.
// Returns in milliseconds.
export function parseEmbeddedStartTime(url) {
    let time = (url.match(/t=([^&]*)/) || [])[1]
    if(time == undefined) return undefined
    time = parseInt(time)
    if(isNaN(time)) return undefined
    time *= 1000
    return time
}
