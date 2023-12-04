import * as Preact from "preact"
import Navigation from "models/Navigation.js"
import Data from "models/Data.js"

const random = Math.ceil(Math.random() * 3)

import "views/screens/SplashScreen.view.less"

export default class SplashScreen {
    render() {
        return (
            <div class="SplashScreen">
                <div class="Background" random={random}/>
                <div class="Prompt">
                    <div class="Text">
                        Bardic<br/>Inspiration
                    </div>
                    {this.content}
                </div>
            </div>
        )
    }
    get content() {
        if(Data.campaign.key == undefined) {
            return (
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" placeholder="Name of Campaign"/>
                </form>
            )
        }
        return (
            <div class="Icon" onClick={this.onClickButton}>
                <div class="fill"/>
                <div class="shape material-icons">smart_display</div>
            </div>
        )
    }
    get onSubmitForm() {
        return (event) => {
            event.preventDefault()
            const value = event.target.children[0].value
            console.log(value.toLowerCase())
            if(value.toLowerCase() != "theros"
            && value.toLowerCase() != "cthulu") {
                window.alert("Could not find campaign " + value)
                return
            }
            Navigation.go("/campaigns/" + value.toLowerCase())
        }
    }
    get onClickButton() {
        return (event) => {
            // Navigation.run("/campaigns/" + Data.campaign.key)
        }
    }
}
