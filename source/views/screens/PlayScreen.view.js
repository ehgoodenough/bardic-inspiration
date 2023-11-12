import * as Preact from "preact"
import Poin from "poin"
import Data from "models/Data.js"
import IO from "models/IO.js"

import "views/screens/PlayScreen.view.less"
import VolumeControls from "views/widgets/VolumeControls.view.js"

export default class PlayScreen {
    render() {
        return (
            <div class="PlayScreen">
                <Screenshot/>
                <div class="Menu">
                    <VolumeControls volume={IO.volume} onUpdateVolume={(volume) => IO.updateVolume(volume)}/>
                </div>
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
