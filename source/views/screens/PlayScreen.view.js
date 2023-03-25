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
                    // "controls": 0,
                    // "fs": 0,
                    // "disablekb": 1,
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
                    "onError": (event) => {
                        console.log("onError", event)
                    }
                }
            })
        }
    }
}
