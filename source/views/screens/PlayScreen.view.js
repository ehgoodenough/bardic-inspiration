import * as Preact from "preact"
import Data from "models/Data.js"
import Youtube from "models/Youtube.js"
import Controls from "views/widgets/Controls.view.js"

import "views/screens/PlayScreen.view.less"

export default class PlayScreen {
    render() {
        if(Data.campaign.streams["a"] == undefined) return
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
        if(Data.campaign.art == undefined) return
        return (
            <div class="Screenshot" style={{
                "background-image": "url(" + Data.campaign.art.url + ")",
            }}/>
        )
    }
}
