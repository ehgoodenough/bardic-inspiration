import Firebase from "models/Firebase.js"
import ShortId from "shortid"

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
}
