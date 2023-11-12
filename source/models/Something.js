import Firebase from "models/Firebase.js"
import ShortId from "shortid"

export default class Something {
    static updateCurrentRun(streamId, run) {
        run.runId = run.runId || ShortId.generate()

        Firebase.data.collection("campaigns").doc("theros").update({
            "music": run
            // TODO: put this in a stream!!
        })
    }
    static updateQueue(streamId, queue) {
        Firebase.data.collection("campaigns").doc("theros").update({
            "musics": queue
        })
    }
    static clear(streamId) {
        Firebase.data.collection("campaigns").doc("theros").update({
            "music": {"state": "paused"}, "musics": [],
        })
    }
}
