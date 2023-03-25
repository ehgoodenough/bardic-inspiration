import * as Preact from "preact"
import FormatDuration from "format-duration"
import ShortId from "shortid"
import Poin from "poin"

import Data from "models/Data.js"
import Firebase from "models/Firebase.js"
import parseYoutubeId from "../functions/parseYoutubeId.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

export default class PlayScreen {
    render() {
        if(Data.campaign == undefined) return
        this.onLoad()
        return (
            <div class="PlayScreen">
                <SubmissionForm/>
                <Screenshot/>
                <Controls/>
            </div>
        )
    }
    onLoad() {
        if(window.youtubePlayer == undefined) {
            window.youtubePlayer = new YT.Player("youtuber", {
                "width": "300",
                "height": "200",
                "videoId": Data.campaign.music.youtubeId,
                "playerVars": {
                    "fs": 0,
                    "rel": 0,
                    "controls": 1,
                    "disablekb": 1,
                    "modestbranding": 1,
                    "start": (computeCurrentTime(Data.campaign.music) / 1000) || 1,
                    "autoplay": true,
                },
                "events": {
                    "onReady": (event) => {
                        window.youtubePlayer.seekTo((computeCurrentTime(Data.campaign.music) / 1000) || 1)
                        if(Data.campaign.music.state == "paused") {
                            window.youtubePlayer.pauseVideo()
                        } else if(Data.campaign.music.state != "paused") {
                            window.youtubePlayer.playVideo()
                        }
                    },
                    "onStateChange": function(event) {
                        if(event.data == YT.PlayerState.PAUSED
                        && Data.campaign.music.state != "paused") {
                            window.youtubePlayer.seekTo((computeCurrentTime(Data.campaign.music) / 1000) || 1)
                            event.target.playVideo()
                        }
                        if(event.data == YT.PlayerState.PLAYING
                        && Data.campaign.music.state != "playing") {
                            window.youtubePlayer.seekTo((computeCurrentTime(Data.campaign.music) / 1000) || 1)
                            event.target.pauseVideo()
                        }
                    },
                    "onError": (event) => {
                        console.log("onError", event)
                    }
                }
            })
        }
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

        Firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "key": ShortId.generate(),
                "youtubeId": youtubeId,
                "startTime": startTime,
                "state": "playing",
            }
        })
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
        pauseplay()
    }
}

class Controls {
    render() {
        return (
            <div class="Controls">
                <Timeline/>
                <div class="Gradient"/>
                <div class="Panel">
                    <div class="PreviousButton"></div>
                    <div class="PlayButton" onClick={this.onClickPlayButton}>
                        <span class="material-icons">{Data.campaign.music.state == "paused" ? "play_arrow" : "pause"}</span>
                    </div>
                    <div class="NextButton"></div>
                    <div class="VolumeButton"></div>
                    <div class="Time">{this.getCurrentTimeText()} / {this.getTotalTimeText()}</div>
                </div>
            </div>
        )
    }
    onClickPlayButton() {
        pauseplay()
    }
    getCurrentTimeText() {
        let time = this.getCurrentTime()
        time = Math.min(time, this.getTotalTime())
        if(isNaN(time)) time = 0
        return FormatDuration(time)
    }
    getTotalTimeText() {
        let time = this.getTotalTime()
        if(isNaN(time)) time = 0
        return FormatDuration(time)
    }
    getCurrentTime() {
        if(Data?.campaign?.music == undefined) return 0
        return computeCurrentTime(Data.campaign.music)
    }
    getTotalTime() {
        if(window.youtubePlayer?.getDuration == undefined) return 0
        return window.youtubePlayer.getDuration() * 1000
    }
}

function pauseplay() {
    if(Data.campaign.music.state != "paused") {
        Firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "key": Data.campaign.music.key,
                "youtubeId": Data.campaign.music.youtubeId,
                "currentTime": Date.now() - Data.campaign.music.startTime,
                "state": "paused"
            }
        })
    } else if(Data.campaign.music.state == "paused") {
        Firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "key": Data.campaign.music.key,
                "youtubeId": Data.campaign.music.youtubeId,
                "startTime": Date.now() - Data.campaign.music.currentTime,
                "state": "playing"
            }
        })
    }
}

class Timeline {
    render() {
        return (
            <div class="Timeline" id="timeline" onClick={this.onClick}>
                <div class="CurrentTime" style={this.getCurrentTimeStyle()}>
                    <div class="Dot"/>
                </div>
                <div class="HoveredTime" style={this.getHoveredTimeStyle()}>
                    <div class="Timestamp">
                        <span>{this.getHoveredTimeText()}</span>
                    </div>
                </div>
                <div class="TotalTime"/>
            </div>
        )
    }
    get onClick() {
        return (event) => {
            let time = this.getHoveredTime()
            Firebase.data.collection("campaigns").doc("theros").update({
                "music": {
                    "key": Data.campaign.music.key,
                    "youtubeId": Data.campaign.music.youtubeId,
                    "startTime": Date.now() - time,
                    "state": "playing",
                }
            })
        }
    }
    getHoveredTimeText() {
        let time = this.getHoveredTime()
        if(isNaN(time)) time = 0
        return FormatDuration(time)
    }
    getCurrentTimeStyle() {
        return {
            "width": (this.getCurrentTime() / this.getTotalTime()) * 100 + "%"
        }
    }
    getHoveredTimeStyle() {
        return {
            "width": (this.getHoveredRelativePosition() * 100) + "%"
        }
    }
    getCurrentTime() {
        let time = computeCurrentTime(Data.campaign.music)
        time = Math.min(time, this.getTotalTime())
        if(isNaN(time)) time = 0
        return time
    }
    getTotalTime() {
        if(window.youtubePlayer?.getDuration == undefined) return 0
        return window.youtubePlayer.getDuration() * 1000
    }
    getHoveredRelativePosition() {
        if(document.getElementById("timeline") == undefined) return 0
        const bounds = document.getElementById("timeline").getBoundingClientRect()
        return (Poin.position.x - bounds.x) / bounds.width
    }
    getHoveredTime() {
        return this.getHoveredRelativePosition() * this.getTotalTime()
    }
}
