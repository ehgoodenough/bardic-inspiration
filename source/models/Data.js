import Firebase from "models/Firebase.js"
import IO from "models/IO.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

const Data = {
    "campaign": {
        "key": "theros",
        "streams": {}
    }
}

Firebase.data.collection("players").doc(Data.campaign.key).onSnapshot((document) => {
    if(document.exists == false) return
    window.players = document.data()
})

const streamIds = ["a", "b", "c"]
streamIds.forEach((streamId) => {
    Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).onSnapshot(async (document) => {
        if(document.exists == false) return
        const prevstream = Data.campaign.streams[streamId]
        const stream = document.data()
        Data.campaign.streams[streamId] = stream
        console.log(Data.campaign.key + "/streams/" + streamId, stream)

        Data.campaign.streams[streamId].queue = Data.campaign.streams[streamId].queue || []

        if(Data.campaign.streams[streamId].run != undefined) {
            if((stream.run.youtubeId != prevstream?.run?.youtubeId && stream.run.youtubeId != undefined)
            || (stream.run.runId != prevstream?.run?.runId && stream.run.runId != undefined)
            || (stream.run.queueId != prevstream?.run?.queueId && stream.run.queueId != undefined)
            || (stream.run.url != prevstream?.run?.url && stream.run.url != undefined)) {
                console.log(stream)
                await IO.streams[streamId].load({
                    ...stream.run,
                    // "youtubeId": stream.run.youtubeId,
                    "currentTime": computeCurrentTime(stream.run),
                })
                if(stream.run.state == "paused") {
                    IO.streams[streamId].pause()
                } else if(stream.run.state != "paused") {
                    IO.streams[streamId].play()
                }
            }

            if(stream.run.startTime != prevstream?.run?.startTime) {
                IO.streams[streamId].seek({
                    "currentTime": computeCurrentTime(stream.run)
                })
            }

            if(stream.run.state != prevstream?.run?.state) {
                if(stream.run.state == "paused") {
                    IO.streams[streamId].pause(streamId)
                } else if(stream.run.state != "paused") {
                    IO.streams[streamId].play(streamId)
                }
            }
        }

        if(IO.streams[streamId] != undefined
        && stream.volume != undefined) {
            IO.streams[streamId].setVolume(stream.volume)
        }
    })
})

Firebase.data.collection("campaigns").doc(Data.campaign.key).onSnapshot((document) => {
    if(document.exists == false) return
    Data.campaign.art = document.data().art
})

Firebase.data.collection("art").orderBy("timestamp", "desc").limit(25).onSnapshot((documents) => {
    if(documents.exists == false) return
    Data.art = []
    documents.forEach((document, index) => {
        Data.art.push(document.data())
    })
})

window.truesight = window.truesight || {}
window.truesight.data = Data

export default Data
