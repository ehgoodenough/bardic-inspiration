// Parses a youtube url for the
// embedded start time. A url with
// the query parameters of t=4 is
// to start 4 seconds into the video.
// Returns in milliseconds.
export default function parseEmbeddedStartTime(url) {
    let time = (url.match(/t=([^&]*)/) || [])[1]
    if(time == undefined) return undefined
    time = parseInt(time)
    if(isNaN(time)) return undefined
    time *= 1000
    return time
}
