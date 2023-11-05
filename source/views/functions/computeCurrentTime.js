// accepts a music payload, see below.
// uses Date.now() to get current time as epoch
// returns in milliseconds as relative time duration.
export default function computeCurrentTime(music) {
    if(music == null) {
        return 0
    }
    if(music.currentTime != undefined) {
        let time = music.currentTime
        // time = Math.floor(time)
        return time
    }
    if(music.startTime != undefined) {
        let time = (Date.now() - music.startTime)
        time = Math.max(0, time)
        // time = Math.min(time, music.duration)
        // time = Math.floor(time)
        return time
    }
    return 0
}

// the music payload
// music.youtubeId // string
// music.currentTime // in milliseconds, relative time
// music.startTime // in milliseconds, epoch absolute time
