import * as Preact from "preact"
import FormatDuration from "format-duration"
import ShortId from "shortid"
import Poin from "poin"

import Data from "models/Data.js"
import Navigation from "models/Navigation.js"
import Youtube from "models/Youtube.js"
import Firebase from "models/Firebase.js"
import {parseYoutubeId, parseEmbeddedStartTime} from "../functions/parseYoutubeId.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

import Controls from "views/widgets/Controls.view.js"

export default class PlayScreen {
    render() {
        if(Data.campaign == undefined) return
        Youtube.onLoad()
        return (
            <div class="PlayScreen">
                <Screenshot/>
                <Controls/>
            </div>
        )
    }
}

class Screenshot {
    render() {
        if(Data.campaign == undefined) return
        return (
            <div class="Screenshot" onClick={this.onClick} style={{
                "background-image": "url(" + Data.campaign.art.url + ")",
            }}/>
        )
    }
    onClick() {
        Youtube.pauseplay()
    }
}
