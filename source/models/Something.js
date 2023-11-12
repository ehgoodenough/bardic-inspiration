import ShortId from "shortid"
import Firebase from "models/Firebase.js"
import Data from "models/Data.js"

export default class Something {
    static updateCurrentRun(streamId, run) {
        run.runId = run.runId || ShortId.generate()

        Firebase.data.collection("campaigns").doc("theros/streams/" + streamId).update({run})
    }
    static updateQueue(streamId, queue) {
        Firebase.data.collection("campaigns").doc("theros/streams/" + streamId).update({queue})
    }
    static clear(streamId) {
        Firebase.data.collection("campaigns").doc("theros/streams/" + streamId).update({
            "run": {"state": "paused"}, "queue": [],
        })
    }
    static stop() {
        Something.updateCurrentRun("a", {
            "state": "paused"
        })
    }
    static pauseplay() {
        if(Data.campaign.streams["a"].run.youtubeId == undefined) {
            return
        }
        if(Data.campaign.streams["a"]?.run?.state != "paused") {
            Something.updateCurrentRun("a", {
                "runId": Data.campaign.streams["a"].run.runId,
                "queueId": Data.campaign.streams["a"].run.queueId,
                "youtubeId": Data.campaign.streams["a"].run.youtubeId,
                "currentTime": Date.now() - Data.campaign.streams["a"].run.startTime,
                "state": "paused"
            })
        } else if(Data.campaign.streams["a"]?.run?.state == "paused") {
            Something.updateCurrentRun("a", {
                "runId": Data.campaign.streams["a"].run.runId,
                "queueId": Data.campaign.streams["a"].run.queueId,
                "youtubeId": Data.campaign.streams["a"].run.youtubeId,
                "startTime": Date.now() - Data.campaign.streams["a"].run.currentTime,
                "state": "playing"
            })
        }
    }
}
