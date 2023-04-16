import Poin from "poin"
import * as Preact from "preact"
import Data from "models/Data.js"

import "views/screens/MapScreen.view.less"

const UNITS = [
    {
        "name": "Cuthos",
        "color": "yellow",
        "position": {
            "x": -16,
            "y": +32,
        }
    }
]

export default class MapScreen {
    render() {
        if(Data.campaign == undefined) return
        return (
            <div class="MapScreen">
                <Screenshot/>
                <div class="Map" style={{
                    "background-image": "url(" + require("images/map.png") + ")"
                }}/>
                <div class="Units">
                    {UNITS.map((unit) => {
                        return <Unit unit={unit}/>
                    })}
                </div>
            </div>
        )
    }
}

let selectedUnit = undefined

class Unit {
    render() {
        return (
            <div class="Unit" style={this.style}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}>
                <div class="Shadow"/>
                <div class="Circle" style={{
                    "background-color": this.props.unit.color,
                }}/>
                <div class="Name">
                    <span>{this.props.unit.name}</span>
                </div>
            </div>
        )
    }
    get style() {
        if(selectedUnit == this.props.unit) {
            return {
                "top": Poin.position.y + "px",
                "left":  Poin.position.x + "px",
                "position": "fixed",
            }
        } else {
            return {
                "top": this.props.unit.position.y + "px",
                "left":  this.props.unit.position.x + "px",
                "position": "absolute",
            }
        }
    }
    get onMouseDown() {
        return (event) => {
            selectedUnit = this.props.unit
        }
    }
}

window.addEventListener("contextmenu", function(event) {
    event.preventDefault()
    selectedUnit = undefined
})

window.addEventListener("mouseup", function(event) {
    event.preventDefault()
    if(selectedUnit != undefined) {
        selectedUnit.position.x = Poin.position.x - (window.innerWidth / 2)
        selectedUnit.position.y = Poin.position.y - (window.innerHeight / 2)
        selectedUnit = undefined
    }
})

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
