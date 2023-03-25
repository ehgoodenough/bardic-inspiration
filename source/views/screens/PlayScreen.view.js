import * as Preact from "preact"

import Data from "models/Data.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"
import MusicSelection from "views/dm/MusicSelection.view.js"

export default class PlayScreen {
    render() {
        if(Data.campaign == undefined) return
        this.onLoad()
        return (
            <div class="PlayScreen">
                <MusicSelection/>
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
