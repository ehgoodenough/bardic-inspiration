import Firebase from "models/Firebase.js"

import parseYoutubeId from "views/functions/parseYoutubeId.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

const SILENCE_VIDEO_ID = "g4mHPeMGTJM"

Firebase.data.collection("art").orderBy("timestamp", "desc").limit(25).onSnapshot((documents) => {
    if(documents.exists == false) return
    Data.art = []
    documents.forEach((document, index) => {
        Data.art.push(document.data())
    })
})

const Data = {
    "campaign": {
        "streams": {}
    }
}

const streamId = "a"
Firebase.data.collection("campaigns").doc("theros/streams/" + streamId).onSnapshot((document) => {
    if(document.exists == false) return
    const prevstream = Data.campaign.streams[streamId]
    const stream = document.data()
    Data.campaign.streams[streamId] = stream
    console.log("theros/streams/" + streamId, stream)

    Data.campaign.streams[streamId].queue = Data.campaign.streams[streamId].queue || []

    if(Data.campaign.streams[streamId].run != undefined) {
        if(window.youtubePlayer != undefined) {
            if(stream.run.youtubeId != undefined
            && stream.run.runId != undefined
            && stream.run.queueId != undefined) {
                if(stream.run.youtubeId != prevstream?.run?.youtubeId
                || stream.run.runId != prevstream?.run?.runId
                || stream.run.queueId != prevstream?.run?.queueId) {
                    return window.youtubePlayer.loadVideoById({
                        "videoId": stream?.run?.youtubeId,
                        "startSeconds": Math.floor(computeCurrentTime(stream.run) / 1000) || 1,
                    })
                }
            }

            if(stream?.run?.startTime != prevstream?.run?.startTime) {
                window.youtubePlayer.seekTo(Math.floor(computeCurrentTime(stream.run) / 1000) || 1)
            }

            if(stream?.run?.state != prevstream?.run?.state) {
                if(stream?.run?.state == "paused") {
                    window.youtubePlayer.pauseVideo()
                } else if(stream?.run?.state != "paused") {
                    window.youtubePlayer.playVideo()
                }
            }
        }
    }
})

Firebase.data.collection("campaigns").doc("theros").onSnapshot((document) => {
    if(document.exists == false) return
    Data.campaign.art = document.data().art
})

window.truesight = window.truesight || {}
window.truesight.data = Data

export default Data
