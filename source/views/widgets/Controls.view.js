import * as Preact from "preact"
import FormatDuration from "format-duration"
import ShortId from "shortid"
import Poin from "poin"

import Data from "models/Data.js"
import Navigation from "models/Navigation.js"
import Something from "models/Something.js"
import Firebase from "models/Firebase.js"
import {parseYoutubeId, parseEmbeddedStartTime} from "../functions/parseYoutubeId.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

import "views/widgets/Controls.view.less"

import YoutubePlayer from "models/YoutubePlayer.js"
import IO from "models/IO.js"

export default class Controls {
    render() {
        this.props.streamId = this.props.streamId || "a"
        if(IO[this.props.streamId] == undefined) return
        return (
            <div class="Controls">
                <Timeline streamId={this.props.streamId}/>
                <div class="Gradient"/>
                <div class="Panel">
                    <div class="PlayButton" onClick={this.onClickPlayButton}>
                        <span class="material-icons">{this.isPaused ? "play_arrow" : "pause"}</span>
                    </div>
                    <div class="VolumeButton" onClick={this.onClickVolumeButton}>
                        <span class="material-icons">{this.getVolumeIcon()}</span>
                    </div>
                    <div class="VolumeBar" id={"volume-" + this.props.streamId} onMouseMove={this.onClickVolumeBar}>
                        <div class="Bar"/>
                        <div class="Dot" style={{
                            "left": Data.campaign.streams[this.props.streamId]?.volume?.level * 100 + "%",
                            "opacity": Data.campaign.streams[this.props.streamId]?.volume?.level == undefined ? 0 : 1,
                        }}/>
                    </div>
                    <div class="Time">{this.getCurrentTimeText()} / {this.getTotalTimeText()}</div>
                </div>
            </div>
        )
    }
    get isPaused() {
        return Data.campaign.streams[this.props.streamId]?.run?.state == "paused"
    }
    get onClickVolumeBar() {
        return (event) => {
            if(Poin.isPressed() == false) return
            const dom = document.getElementById("volume-" + this.props.streamId)
            if(dom == undefined) return
            const bounds = dom.getBoundingClientRect()
            let volumeLevel = ((Poin.position.x - bounds.x) / bounds.width)
            if(volumeLevel < 0.01) volumeLevel = 0
            if(volumeLevel > 0.99) volumeLevel = 1
            // IO[this.props.streamId].setVolume(volume) // TODO: do this, debounce the other
            Something.updateVolume(this.props.streamId, {
                "level": volumeLevel
            })
        }
    }
    get onClickVolumeButton() {
        return (event) => {
            if(Data.campaign.streams[this.props.streamId]?.volume?.isMuted) {
                Something.updateVolume(this.props.streamId, {
                    "level": Data.campaign.streams[this.props.streamId].volume.level
                })
            } else {
                Something.updateVolume(this.props.streamId, {
                    "level": Data.campaign.streams[this.props.streamId].volume.level,
                    "isMuted": true
                })
            }
        }
    }
    getVolumeIcon() {
        if(Data.campaign.streams[this.props.streamId]?.volume?.isMuted) return "volume_off"
        if(Data.campaign.streams[this.props.streamId]?.volume?.level <= 0) return "volume_off"
        if(Data.campaign.streams[this.props.streamId]?.volume?.level >= 50) return "volume_up"
        return "volume_down"
    }
    get onClickPlayButton() {
        return (event) => {
            Something.pauseplay(this.props.streamId)
        }
    }
    getCurrentTimeText() {
        let time = this.getCurrentTime()
        time = Math.min(time, IO[this.props.streamId].duration)
        if(isNaN(time)) time = 0
        return FormatDuration(time)
    }
    getTotalTimeText() {
        let time = IO[this.props.streamId].duration
        if(isNaN(time)) time = 0
        return FormatDuration(time)
    }
    getCurrentTime() {
        if(Data.campaign.streams[this.props.streamId]?.run == undefined) return 0
        return computeCurrentTime(Data.campaign.streams[this.props.streamId]?.run)
    }
}

class Timeline {
    render() {
        return (
            <div class="Timeline" id={"timeline-" + this.props.streamId} onClick={this.onClick}>
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
            Something.updateCurrentRun(this.props.streamId, {
                "runId": Data.campaign.streams[this.props.streamId].run.runId,
                "queueId": Data.campaign.streams[this.props.streamId].run.queueId,
                "youtubeId": Data.campaign.streams[this.props.streamId].run.youtubeId,
                "startTime": Date.now() - time,
                "state": "playing",
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
            "width": (this.getCurrentTime() / IO[this.props.streamId].duration) * 100 + "%"
        }
    }
    getHoveredTimeStyle() {
        return {
            "width": (this.getHoveredRelativePosition() * 100) + "%"
        }
    }
    getCurrentTime() {
        let time = computeCurrentTime(Data.campaign.streams[this.props.streamId]?.run)
        time = Math.min(time, IO[this.props.streamId].duration)
        if(isNaN(time)) time = 0
        return time
    }
    getHoveredRelativePosition() {
        const dom = document.getElementById("timeline-" + this.props.streamId)
        if(dom == undefined) return 0
        const bounds = dom.getBoundingClientRect()
        return (Poin.position.x - bounds.x) / bounds.width
    }
    getHoveredTime() {
        return this.getHoveredRelativePosition() * IO[this.props.streamId].duration
    }
}
