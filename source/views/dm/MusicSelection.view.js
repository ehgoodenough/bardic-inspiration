import * as Preact from "preact"

import parseYoutubeId from "../functions/parseYoutubeId.js"

export default class MusicSelection {
    render() {
        return (
            <div class="MusicSelection">
                <form onSubmit={this.onSubmit}>
                    <input type="submit"/>
                    <input name="youtube" type="text"/>
                </form>
            </div>
        )
    }
    onSubmit(event) {
        event.preventDefault()
        const youtubeId = parseYoutubeId(event.target.children["youtube"].value)
        if(youtubeId == undefined || youtubeId == "") return

        window.firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "youtubeId": youtubeId,
                "startTime": Date.now(),
            }
        })
    }
}
