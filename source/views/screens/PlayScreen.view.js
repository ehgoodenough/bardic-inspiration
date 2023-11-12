import * as Preact from "preact"
import Data from "models/Data.js"

import "views/screens/PlayScreen.view.less"
import Menu from "views/widgets/Menu.view.js"

export default class PlayScreen {
    render() {
        return (
            <div class="PlayScreen">
                <Screenshot/>
                <Menu/>
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
