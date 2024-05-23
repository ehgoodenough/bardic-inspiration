// SOMETHING - THIS COULD LIKELY BE MERGED WITH DATA

import ShortId from "shortid"
import Firebase from "models/Firebase.js"
import Data from "models/Data.js"
import IO from "models/io/IO.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

const DEFAULT_VOLUME = 0.5
const deepcopy = (json) => JSON.parse(JSON.stringify(json))

export default class Something {
    static updateCurrentRun(streamId, run) {
        Data.campaign.streams[streamId + "-previous"] = deepcopy(Data.campaign.streams[streamId])
        run.runId = run.runId || ShortId.generate()
        Data.campaign.streams[streamId].run = run
        // Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({run})
        Something.syncIO(streamId)
    }
    static updateQueue(streamId, queue) {
        Data.campaign.streams[streamId + "-previous"] = deepcopy(Data.campaign.streams[streamId])
        Data.campaign.streams[streamId].queue = queue
        // Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({queue})
        Something.syncIO(streamId)
    }
    static updateVolume(streamId, volume) {
        Data.campaign.streams[streamId + "-previous"] = deepcopy(Data.campaign.streams[streamId])
        Data.campaign.streams[streamId].volume = volume
        // Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({volume})
        Something.syncIO(streamId)
    }
    static clear(streamId) {
        Data.campaign.streams[streamId + "-previous"] = deepcopy(Data.campaign.streams[streamId])
        Data.campaign.streams[streamId] = {
            "queue": [],
            "run": {"state": "paused"},
            "volume": {"level": DEFAULT_VOLUME}
        }
        // Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({
        //     "run": {"state": "paused"}, "queue": [], "volume": {"level": DEFAULT_VOLUME}
        // })
        Something.syncIO(streamId)
    }
    static async syncIO(streamId) {
        const stream = Data.campaign.streams[streamId]
        const prevstream = Data.campaign.streams[streamId + "-previous"]
        if(Data.campaign.streams[streamId].run != undefined) {
            if((stream.run.youtubeId != prevstream?.run?.youtubeId && stream.run.youtubeId != undefined)
            || (stream.run.runId != prevstream?.run?.runId && stream.run.runId != undefined)
            || (stream.run.queueId != prevstream?.run?.queueId && stream.run.queueId != undefined)
            || (stream.run.url != prevstream?.run?.url && stream.run.url != undefined)) {
                // console.log(stream)
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
    }
    static stop(streamId) {
        Something.updateCurrentRun(streamId, {"state": "paused"})
    }
    static pauseplay(streamId) {
        if(Data.campaign.streams[streamId].run.youtubeId == undefined) {
            return
        }
        if(Data.campaign.streams[streamId]?.run?.state != "paused") {
            Something.updateCurrentRun(streamId, {
                "runId": Data.campaign.streams[streamId].run.runId,
                "queueId": Data.campaign.streams[streamId].run.queueId,
                "youtubeId": Data.campaign.streams[streamId].run.youtubeId,
                "currentTime": Date.now() - Data.campaign.streams[streamId].run.startTime,
                "state": "paused"
            })
        } else if(Data.campaign.streams[streamId]?.run?.state == "paused") {
            Something.updateCurrentRun(streamId, {
                "runId": Data.campaign.streams[streamId].run.runId,
                "queueId": Data.campaign.streams[streamId].run.queueId,
                "youtubeId": Data.campaign.streams[streamId].run.youtubeId,
                "startTime": Date.now() - Data.campaign.streams[streamId].run.currentTime,
                "state": "playing"
            })
        }
    }
}
