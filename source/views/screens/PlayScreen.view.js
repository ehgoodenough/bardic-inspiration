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
        if(Data.campaign.art == undefined) return
        return (
            <div class="Screenshot" style={{
                "background-image": "url(" + Data.campaign.art.url + ")",
            }}/>
        )
    }
}

class RollerWidget {
    render() {
        return (
            <div class="RollerWidget">
                <Players/>
                <div class="RollOptions">
                    <label class="Disadvantage">
                        <input type="radio" name="rollType" value="Disadvantage"/>
                        Disadvantage
                    </label>
                    <label class="Advantage">
                        <input type="radio" name="rollType" value="Advantage"/>
                        Advantage
                    </label>
                    <label class="Flat">
                        <input id="flat" type="radio" name="rollType" value="Flat" defaultChecked={true}/>
                        Flat
                    </label>
                </div>
            </div>
        )
    }
}

class Players {
    render() {
        if(window.players == undefined) return
        return (
            <div class="Players">
                <Player name="Alex" playerId="0"/>
                <Player name="Andrew" playerId="1"/>
                <Player name="Justin" playerId="2"/>
            </div>
        )
    }
}

class Player {
    render() {
        const player = window.players[this.props.playerId]

        return (
            <div class="Player">
                <div class="Name">{this.props.name}</div>
                <button onClick={this.onClick} rollType={player?.rollType || "Flat"} key={player?.rollKey}>
                    Rolled a
                    <span> </span>
                    <span class="Tens Number"
                        key={player?.rollKey}
                        speed={player?.rollSpeed || "fast"}
                        value={"value" + Math.floor((player?.rollValue ?? 0) / 10)}/>
                    <span class="Ones Number"
                        key={player?.rollKey}
                        speed={player?.rollSpeed || "fast"}
                        value={"value" + Math.floor((player?.rollValue ?? 0) % 10)}/>
                    {this.exclamation}
                </button>
            </div>
        )
    }
    get exclamation() {
        const player = window.players[this.props.playerId]
        if(player?.rollValue == 1) return <span class="Exclamation">!!!</span>
        if(player?.rollValue <= 10) return <span class="Exclamation">!</span>
        if(player?.rollValue == 100) return <span class="Exclamation">💀</span>
        if(player?.rollValue >= 90) return <span class="Exclamation">...</span>
    }
    get onClick() {
        return (event) => {
            let tens = this.rollD10()
            let ones = this.rollD10()

            const rollType = document.querySelector("input[name='rollType']:checked").value

            if(rollType == "Advantage") {
                tens = Math.min(tens, this.rollD10())
            }
            if(rollType == "Disadvantage") {
                tens = Math.max(tens, this.rollD10())
            }

            let rollValue = (tens * 10) + ones
            if(rollValue == 0) rollValue = 100
            console.log(rollValue)

            Firebase.data.collection("players").doc(Data.campaign.key).update({
                [this.props.playerId]: {
                    "rollValue": rollValue,
                    "rollType": rollType,
                    "rollId": ShortId.generate(),
                    "rollSpeed": Math.random() < 0.5 ? "fast" : (Math.random() < 0.5 ? "medium" : "slow")
                }
            })

            // Always reset back to rolling flat.
            document.getElementById("flat").checked = true
        }
    }
    rollD10() {
        return Math.floor(Math.random() * 10)
    }
}

window.resetAll = function() {
    if(Data.campaign.key == undefined) return
    Firebase.data.collection("players").doc(Data.campaign.key).update({
        0: {},
        1: {},
        2: {},
        3: {},
    })
}
