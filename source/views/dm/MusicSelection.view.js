import * as Preact from "preact"
import Poin from "poin"

export default class MusicSelection {
    render() {
        return (
            <div class="MusicSelection">
                <SubmissionForm/>
                <Controls/>
            </div>
        )
    }
}

import parseYoutubeId from "../functions/parseYoutubeId.js"
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
        const youtubeId = parseYoutubeId(event.target.children["youtube"].value)
        if(youtubeId == undefined || youtubeId == "") return

        window.firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "youtubeId": youtubeId,
                "startTime": Date.now(),
            }
        })
    }
}

class Controls {
    render() {
        return (
            <div class="Controls">
                <Timeline/>
                <div class="Panel">
                    <div class="PreviousButton">Previous</div>
                    <div class="PlayButton">Play</div>
                    <div class="NextButton">Next</div>
                    <div class="VolumeButton">Volume</div>
                    <div class="Time">{this.printedCurrentTime} / {this.printedTotalTime}</div>
                </div>
            </div>
        )
    }
    get printedCurrentTime() {
        if(window.youtubePlayer?.getDuration == undefined) return "0:00"
        if(window.app?.campaign?.music == undefined) return "0:00"
        let time = Math.floor((Date.now() - window.app.campaign.music.startTime) / 1000)
        time = Math.max(0, time)
        time = Math.min(time, Math.floor(window.youtubePlayer.getDuration()))
        return time
    }
    get printedTotalTime() {
        if(window.youtubePlayer?.getDuration == undefined) return "0:00"
        return Math.floor(window.youtubePlayer.getDuration())
    }
}

const hovered = {"percent": 0}
class Timeline {
    render() {
        return (
            <div class="Timeline" onClick={this.onClick}>
                <div class="CurrentTime" style={this.getCurrentTimeStyle()}>
                    <div class="Dot"/>
                </div>
                <div class="NextTime" style={this.getNextTimeStyle()}>
                    <div class="Timestamp">
                        <span>5:55</span>
                    </div>
                </div>
                <div class="TotalTime"/>
            </div>
        )
    }
    onClick(event) {
        if(window.youtubePlayer?.getDuration == undefined) return
        window.youtubePlayer.seekTo((Poin.position.x / 720) * window.youtubePlayer.getDuration())
        // TODO: UPDATE THE START TIME ACCORDINGLY!!
    }
    getCurrentTimeStyle() {
        if(window.youtubePlayer?.getDuration == undefined) return
        return {
            "width": (this.getCurrentTime(window.app.campaign.music) / window.youtubePlayer.getDuration()) * 100 + "%"
        }
    }
    getNextTimeStyle() {
        return {
            "width": ((Poin.position.x / 720) * 100) + "%"
        }
    }
    getCurrentTime(music) {
        return Math.max(0, (Date.now() - music.startTime) / 1000)
    }
}
