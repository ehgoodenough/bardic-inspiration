import Firebase from "models/Firebase.js"
import Players from "models/Players.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

const Data = {
    "campaign": {
        "streams": {}
    }
}

const streamIds = ["a", "b"] //, "c"]
streamIds.forEach((streamId) => {
    Firebase.data.collection("campaigns").doc("theros/streams/" + streamId).onSnapshot(async (document) => {
        if(document.exists == false) return
        const prevstream = Data.campaign.streams[streamId]
        const stream = document.data()
        Data.campaign.streams[streamId] = stream
        console.log("theros/streams/" + streamId, stream)

        Data.campaign.streams[streamId].queue = Data.campaign.streams[streamId].queue || []


        if(Data.campaign.streams[streamId].run != undefined) {
            if(stream.run.youtubeId != undefined
            && stream.run.runId != undefined
            && stream.run.queueId != undefined) {
                if(stream.run.youtubeId != prevstream?.run?.youtubeId
                || stream.run.runId != prevstream?.run?.runId
                || stream.run.queueId != prevstream?.run?.queueId) {
                    await Players[streamId].load({
                        "youtubeId": stream.run.youtubeId,
                        "currentTime": computeCurrentTime(stream.run),
                    })
                    if(stream.run.state == "paused") {
                        Players[streamId].pause()
                    } else if(stream.run.state != "paused") {
                        Players[streamId].play()
                    }
                }
            }

            if(stream.run.startTime != prevstream?.run?.startTime) {
                Players[streamId].seek({
                    "currentTime": computeCurrentTime(stream.run)
                })
            }

            if(stream.run.state != prevstream?.run?.state) {
                if(stream.run.state == "paused") {
                    Players[streamId].pause(streamId)
                } else if(stream.run.state != "paused") {
                    Players[streamId].play(streamId)
                }
            }
        }

        if(Players[streamId] != undefined
        && stream.volume != undefined) {
            Players[streamId].setVolume(stream.volume)
        }
    })
})

Firebase.data.collection("campaigns").doc("theros").onSnapshot((document) => {
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
