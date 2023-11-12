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
import VolumeControls from "views/widgets/VolumeControls.view.js"

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
                    <PlayButton streamId={this.props.streamId}/>
                    <VolumeControls volume={Data.campaign.streams[this.props.streamId]?.volume}
                        onUpdateVolume={(volume) => Something.updateVolume(this.props.streamId, volume)}/>
                    <TimeText streamId={this.props.streamId}/>
                </div>
            </div>
        )
    }
}

class PlayButton {
    render() {
        return (
            <div class="PlayButton" onClick={this.onClick}>
                <span class="material-icons">{this.icon}</span>
            </div>
        )
    }
    get icon() {
        return Data.campaign.streams[this.props.streamId]?.run?.state == "paused" ? "play_arrow" : "pause"
    }
    get onClick() {
        return (event) => {
            Something.pauseplay(this.props.streamId)
        }
    }
}

class TimeText {
    render() {
        return (
            <div class="Time">{this.getCurrentTimeText()} / {this.getTotalTimeText()}</div>
        )
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
