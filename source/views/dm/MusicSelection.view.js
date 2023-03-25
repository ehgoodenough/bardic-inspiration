import * as Preact from "preact"
import Poin from "poin"
import ShortId from "shortid"
// import QueryString from "query-string"
import FormatDuration from "format-duration"

import parseYoutubeId from "../functions/parseYoutubeId.js"
import computeCurrentTime from "../functions/computeCurrentTime.js"

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
        const submittedValue = event.target.children["youtube"].value
        const youtubeId = parseYoutubeId(submittedValue)
        if(youtubeId == undefined || youtubeId == "") return

        let startTime = Date.now()

        let submittedTime = (submittedValue.match(/t=([^&]*)/) || [])[1]
        if(submittedTime != undefined) {
            submittedTime = parseInt(submittedTime)
            submittedTime *= 1000
            startTime -= submittedTime
        }

        window.firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "key": ShortId.generate(),
                "youtubeId": youtubeId,
                "startTime": startTime,
                "state": "playing",
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
                    <div class="PreviousButton"></div>
                    <div class="PlayButton" onClick={this.onClickPlayButton}>
                        <span class="material-icons">{window.app.campaign.music.state == "paused" ? "pause" : "play_arrow"}</span>
                    </div>
                    <div class="NextButton"></div>
                    <div class="VolumeButton"></div>
                    <div class="Time">{this.getPrintedCurrentTime()} / {this.getPrintedTotalTime()}</div>
                </div>
            </div>
        )
    }
    onClickPlayButton() {
        if(window.app.campaign.music.state != "paused") {
            window.firebase.data.collection("campaigns").doc("theros").update({
                "music": {
                    "key": window.app.campaign.music.key,
                    "youtubeId": window.app.campaign.music.youtubeId,
                    "currentTime": Date.now() - window.app.campaign.music.startTime,
                    "state": "paused"
                }
            })
        } else if(window.app.campaign.music.state == "paused") {
            window.firebase.data.collection("campaigns").doc("theros").update({
                "music": {
                    "key": window.app.campaign.music.key,
                    "youtubeId": window.app.campaign.music.youtubeId,
                    "startTime": Date.now() - window.app.campaign.music.currentTime,
                    "state": "playing"
                }
            })
        }
    }
    getPrintedCurrentTime() {
        if(window.youtubePlayer?.getDuration == undefined) return "0:00"
        if(window.app?.campaign?.music == undefined) return "0:00"
        let time = window.app.campaign.music.currentTime || (Date.now() - window.app.campaign.music.startTime)
        time = Math.max(0, time)
        time = Math.min(time, window.youtubePlayer.getDuration() * 1000)
        if(isNaN(time)) time = 0
        return FormatDuration(time)
    }
    getPrintedTotalTime() {
        if(window.youtubePlayer?.getDuration == undefined) return "0:00"
        let time = window.youtubePlayer.getDuration() * 1000
        if(isNaN(time)) time = 0
        return FormatDuration(time)
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
                        <span>{this.getPrintedNextTimestamp()}</span>
                    </div>
                </div>
                <div class="TotalTime"/>
            </div>
        )
    }
    onClick(event) {
        if(window.youtubePlayer?.getDuration == undefined) return
        const time = (Poin.position.x / 720) * (window.youtubePlayer.getDuration() * 1000)

        window.firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "key": window.app.campaign.music.key,
                "youtubeId": window.app.campaign.music.youtubeId,
                "startTime": Date.now() - time,
                "state": "playing",
            }
        })
    }
    getPrintedNextTimestamp() {
        if(window.youtubePlayer?.getDuration == undefined) return
        let time = (Poin.position.x / 720) * (window.youtubePlayer.getDuration() * 1000)
        if(isNaN(time)) time = 0
        return FormatDuration(time)
    }
    getCurrentTimeStyle() {
        if(window.youtubePlayer?.getDuration == undefined) return
        return {
            "width": (computeCurrentTime(window.app.campaign.music) / (window.youtubePlayer.getDuration()/* * 1000*/)) * 100 + "%"
        }
    }
    getNextTimeStyle() {
        return {
            "width": ((Poin.position.x / 720) * 100) + "%"
        }
    }
}
