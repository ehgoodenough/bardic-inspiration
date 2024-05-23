import * as Preact from "preact"
import ShortId from "shortid"

import Data from "models/Data.js"
import Navigation from "models/Navigation.js"

import Menu from "views/widgets/Menu.view.js"
import SplashScreen from "views/screens/SplashScreen.view.js"
import "views/screens/PlayScreen.view.less"


export default class PlayScreen {
    render() {
        if(window.hasClicked != true) {
            return (
                <SplashScreen/>
            )
        }
        return (
            <div class="PlayScreen">
                <Screenshot/>
                {Navigation.state.hasRollerWidget ? <RollerWidget/> : undefined}
                <Menu/>
            </div>
        )
    }
}

class Screenshot {
    render() {
        return (
            <div class="Screenshot" style={{
                "background-image": "url(" + require("images/nyx.jpg") + ")",
            }}/>
        )
    }
}
