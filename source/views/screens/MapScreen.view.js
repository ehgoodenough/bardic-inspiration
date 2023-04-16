import * as Preact from "preact"
import Data from "models/Data.js"

import "views/screens/MapScreen.view.less"

export default class MapScreen {
    render() {
        if(Data.campaign == undefined) return
        return (
            <div class="MapScreen">
                <Screenshot/>
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
}
