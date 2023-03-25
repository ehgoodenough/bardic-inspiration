import * as Preact from "preact"
import computeCurrentTime from "../functions/computeCurrentTime.js"
import MusicSelection from "../dm/MusicSelection.view.js"

export default class PlayScreen {
    render() {
        if(window.app == undefined) return
        if(window.app.campaign == undefined) return
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
                "videoId": window.app.campaign.music.youtubeId,
                "playerVars": {
                    // "controls": 0,
                    // "fs": 0,
                    // "disablekb": 1,
                    "modestbranding": 1,
                    "start": computeCurrentTime(window.app.campaign.music) || 1,
                    "autoplay": true,
                },
                "events": {
                    // "onReady": function(event) {
                    //     window.youtubePlayer.playVideo()
                    //     window.youtubePlayer.seekTo(computeCurrentTime(window.app.campaign.music) || 1)
                    //
                    //     // if(window.app.campaign.music.state == "paused") {
                    //     //     window.youtubePlayer.pauseVideo()
                    //     // } else if(window.app.campaign.music.state != "paused") {
                    //     //     window.youtubePlayer.playVideo()
                    //     // }
                    // },
                    "onStateChange": function(event) {
                        if(event.data == YT.PlayerState.PAUSED
                        || event.data == YT.PlayerState.UNSTARTED) {
                            if(window.app.campaign.music.state != "paused") {
                                window.youtubePlayer.seekTo(computeCurrentTime(window.app.campaign.music) || 1)
                                window.youtubePlayer.playVideo()
                            }
                        }
                    },
                    "onError": function(event) {
                        console.log("onError", event)
                    }
                }
            })
        }
    }
}
