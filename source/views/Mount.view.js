import * as Preact from "preact"

import Data from "models/Data.js"
import Navigation from "models/Navigation.js"

import SplashScreen from "views/screens/SplashScreen.view.js"
import PlayScreen from "views/screens/PlayScreen.view.js"
import EditScreen from "views/screens/EditScreen.view.js"
// import SimpleEditScreen from "views/screens/SimpleEditScreen.view.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        if(Data.campaign == undefined) return
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
        } else if(Navigation.state.screen == "PlayScreen") {
            return <PlayScreen/>
        } else if(Navigation.state.screen == "EditScreen") {
            return <EditScreen/>
        } else if(Navigation.state.screen == "SimpleEditScreen") {
            // return <SimpleEditScreen/>
        }
    }
}
