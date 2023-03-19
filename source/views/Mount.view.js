import * as Preact from "preact"
import uploadArt from "views/functions/uploadArt.js"

import ArtSelection from "views/dm/ArtSelection.view.js"
import MusicSelection from "views/dm/MusicSelection.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        if(window.app == undefined) return
        if(window.app.campaign == undefined) return
        return (
            <div className="Mount">
                <div class="DungeonMasterScreen">
                    <MusicSelection/>
                </div>
            </div>
        )
    }
}
