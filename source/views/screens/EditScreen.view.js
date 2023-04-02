import * as Preact from "preact"
import FormatDuration from "format-duration"
import ShortId from "shortid"
import Poin from "poin"

import Data from "models/Data.js"
import Navigation from "models/Navigation.js"
import Youtube from "models/Youtube.js"
import Firebase from "models/Firebase.js"
import {parseYoutubeId, parseEmbeddedStartTime} from "../functions/parseYoutubeId.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

import Controls from "views/widgets/Controls.view.js"

export default class EditScreen {
    render() {
        if(Data.campaign == undefined) return
        Youtube.onLoad()
        return (
            <div class="EditScreen">
                <div class="Preview">
                    <Screenshot/>
                    <Controls/>
                </div>
                <SubmissionForm/>
                <MusicQueue/>
            </div>
        )
    }
}

class Screenshot {
    render() {
        if(Data.campaign == undefined) return
        return (
            <div class="Screenshot" onClick={this.onClick} style={{
                "background-image": "url(https://img.youtube.com/vi/" + Data.campaign.music.youtubeId + "/maxresdefault.jpg)",
            }}/>
        )
    }
    onClick() {
        Youtube.pauseplay()
    }
}

class SubmissionForm {
    render() {
        return (
            <form class="SubmissionForm" onSubmit={this.onSubmit}>
                <input name="youtube" type="text" placeholder="put your youtube url here"/>
                <input type="submit"/>
            </form>
        )
    }
    onSubmit(event) {
        event.preventDefault()
        let submittedValues = event.target.children["youtube"].value
        submittedValues = submittedValues.split(",")
        submittedValues = submittedValues.map((value) => value.trim())

        let musics = submittedValues.map((value) => {
            return {
                "key": ShortId.generate(),
                "youtubeId": parseYoutubeId(value),
                "embeddedStartTime": parseEmbeddedStartTime(value)
            }
        })

        musics = musics.filter((value) => {
            return value.youtubeId != undefined
        })

        musics.forEach((music) => {
            Object.keys(music).forEach((key) => {
                if(music[key] == undefined) {
                    delete music[key]
                }
            })
        })

        if(musics.length <= 0) return

        if(Data.campaign.musics != undefined) {
            musics = Data.campaign.musics.concat(musics)
        }

        Firebase.data.collection("campaigns").doc("theros").update({
            "musics": musics,
            // "music": {
            //     "key": musics[0].key,
            //     "youtubeId": musics[0].youtubeId,
            //     "startTime": Date.now() - (musics[0].embeddedStartTime || 0),
            //     "state": "playing",
            // },
        })
    }
}

class MusicQueue {
    render() {
        if(Data.campaign == undefined) return
        if(Data.campaign.musics == undefined) return
        return (
            <div class="MusicQueue">
                {Data.campaign.musics.map((music) => {
                    return (
                        <QueuedMusic music={music}/>
                    )
                })}
            </div>
        )
    }
}

class QueuedMusic {
    render() {
        return (
            <div class="QueuedMusic" onClick={this.onClick} isOnDeck={this.isOnDeck}>
                {this.props.music.youtubeId}
            </div>
        )
    }
    get isOnDeck() {
        return Data.campaign.music.key == this.props.music.key
    }
    get onClick() {
        return (event) => {
            Firebase.data.collection("campaigns").doc("theros").update({
                "music": {
                    "key": this.props.music.key,
                    "iteration": Shortid.generate(),
                    "youtubeId": this.props.music.youtubeId,
                    "startTime": Date.now(),
                    "state": "playing",
                }
            })
        }
    }
}

window.clearMusics = function() {
    Firebase.data.collection("campaigns").doc("theros").update({
        "musics": [],
    })
}
