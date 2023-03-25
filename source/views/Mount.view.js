import * as Preact from "preact"

import Navigation from "models/Navigation.js"

import SplashScreen from "views/screens/SplashScreen.view.js"
import PlayScreen from "views/screens/PlayScreen.view.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        if(window.app == undefined) return
        if(window.app.campaign == undefined) return
        return (
            <div className="Mount">
                {this.title}
                {this.screen}
            </div>
        )
    }
    get title() {
        return <title>Bardic Inspiration</title>
    }
    get screen() {
        if(Navigation.state.screen == "SplashScreen") {
            return <SplashScreen/>
        } else if(Navigation.state.screen = "PlayScreen") {
            return <PlayScreen/>
        }
    }
}
