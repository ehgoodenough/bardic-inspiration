import * as Preact from "preact"
import Data from "models/Data.js"

import "views/screens/PlayScreen.view.less"
import Menu from "views/widgets/Menu.view.js"

export default class PlayScreen {
    render() {
        return (
            <div class="PlayScreen">
                <Screenshot/>
                <Players/>
                <Menu/>
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

import ShortId from "shortid"
import Firebase from "models/Firebase.js"
Firebase.data.collection("players").doc("theros").onSnapshot((document) => {
    if(document.exists == false) return
    window.players = document.data()
})

class Players {
    render() {
        if(window.players == undefined) return
        return (
            <div class="Players">
                <Player name="Alex" playerId="0"/>
                <Player name="Andrew" playerId="1"/>
                <Player name="Becker" playerId="2"/>
                <Player name="Nico" playerId="3"/>
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
                <button onClick={this.onClick} rollType={player?.rollType || "Flat"}>
                    Rolled a {player?.rollValue || 0}
                    {player?.rollValue <= 10 ? "!" : ""}
                    {player?.rollValue == 1 ? "!!" : ""}
                    {player?.rollValue >= 90 ? "..." : ""}
                </button>
            </div>
        )
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

            Firebase.data.collection("players").doc("theros").update({
                [this.props.playerId]: {
                    "rollValue": rollValue,
                    "rollType": rollType,
                    "rollId": ShortId.generate()
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
    Firebase.data.collection("players").doc("theros").update({
        0: {},
        1: {},
        2: {},
        3: {},
    })
}
