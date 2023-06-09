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

import "views/widgets/Controls.view.less"

export default class Controls {
    render() {
        return (
            <div class="Controls">
                <Timeline/>
                <div class="Gradient"/>
                <div class="Panel">
                    <div class="PlayButton" onClick={this.onClickPlayButton}>
                        <span class="material-icons">{Data.campaign.music.state == "paused" ? "play_arrow" : "pause"}</span>
                    </div>
                    <div class="VolumeButton" onClick={this.onClickVolumeButton}>
                        <span class="material-icons">{this.getVolumeIcon()}</span>
                    </div>
                    <div class="VolumeBar" id="volume" onMouseMove={this.onClickVolumeBar}>
                        <div class="Bar"/>
                        <div class="Dot" style={{
                            "left": this.getVolumeRelativePosition() * 100 + "%"
                        }}/>
                    </div>
                    <div class="Time">{this.getCurrentTimeText()} / {this.getTotalTimeText()}</div>
                </div>
            </div>
        )
    }
    onClickVolumeBar() {
        if(Poin.isPressed() == false) return
        if(document.getElementById("volume") == undefined) return
        const bounds = document.getElementById("volume").getBoundingClientRect()
        let volume = ((Poin.position.x - bounds.x) / bounds.width) * 100
        if(volume < 1) volume = 0
        if(volume > 99) volume = 100
        window.youtubePlayer.setVolume(volume)
    }
    onClickVolumeButton() {
        if(window.youtubePlayer == undefined) return
        if(window.youtubePlayer.isMuted instanceof Function == false) return
        if(window.youtubePlayer.unMute instanceof Function == false) return
        if(window.youtubePlayer.mute instanceof Function == false) return
        if(window.youtubePlayer.isMuted()) {
            window.youtubePlayer.unMute()
        } else {
            window.youtubePlayer.mute()
        }
    }
    getVolumeRelativePosition() {
        if(window.youtubePlayer == undefined) return
        if(window.youtubePlayer.getVolume == undefined) return
        return window.youtubePlayer.getVolume() / 100
    }
    getVolumeIcon() {
        if(window.youtubePlayer == undefined) return
        if(window.youtubePlayer.isMuted instanceof Function == false) return
        if(window.youtubePlayer.getVolume instanceof Function == false) return
        if(window.youtubePlayer.isMuted()) {
            return "volume_off"
        }

        const volume = window.youtubePlayer.getVolume()
        if(volume <= 0) return "volume_off"
        if(volume >= 50) return "volume_up"
        return "volume_down"
    }
    onClickPlayButton() {
        Youtube.pauseplay()
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
                    "runkey": Data.campaign.music.runkey,
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
