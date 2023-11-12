import * as Preact from "preact"

import "views/widgets/Menu.view.less"
import VolumeControls from "views/widgets/VolumeControls.view.js"

import IO from "models/IO.js"

export default class Menu {
    render() {
        return (
            <div class="Menu">
                <VolumeControls volume={IO.volume}
                    onUpdateVolume={(volume) => IO.updateVolume(volume)}/>
            </div>
        )
    }
}
