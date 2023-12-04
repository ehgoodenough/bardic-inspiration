import ShortId from "shortid"
import Firebase from "models/Firebase.js"
import Data from "models/Data.js"

const DEFAULT_VOLUME = 0.5

export default class Something {
    static updateCurrentRun(streamId, run) {
        run.runId = run.runId || ShortId.generate()

        Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({run})
    }
    static updateQueue(streamId, queue) {
        Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({queue})
    }
    static updateVolume(streamId, volume) {
        Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({volume})
    }
    static clear(streamId) {
        Firebase.data.collection("campaigns").doc(Data.campaign.key + "/streams/" + streamId).update({
            "run": {"state": "paused"}, "queue": [], "volume": {"level": DEFAULT_VOLUME}
        })
    }
    static stop(streamId) {
        Something.updateCurrentRun(streamId, {
            "state": "paused"
        })
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
