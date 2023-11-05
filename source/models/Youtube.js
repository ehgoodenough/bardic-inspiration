import Data from "models/Data.js"
import Firebase from "models/Firebase.js"
import parseYoutubeId from "views/functions/parseYoutubeId.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

const SILENCE_VIDEO_ID = "g4mHPeMGTJM"
const DEFAULT_VOLUME = 50

export default new class {
    onLoad() {
        if(window.youtubePlayer == undefined) {
            window.youtubePlayer = new YT.Player("youtuber", {
                "width": "300",
                "height": "200",
                "videoId": Data.campaign.music.youtubeId || SILENCE_VIDEO_ID,
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
                        if(Data.campaign.music.youtubeId != undefined) {
                            if(Data.campaign.music.state == "paused") {
                                window.youtubePlayer.pauseVideo()
                            } else if(Data.campaign.music.state != "paused") {
                                window.youtubePlayer.playVideo()
                            }
                        }

                        const volume = parseInt(window.localStorage.getItem("audio-volume")) || DEFAULT_VOLUME
                        window.youtubePlayer.setVolume(volume)
                    },
                    "onStateChange": function(event) {
                        if(event.data == YT.PlayerState.PAUSED
                        && Data.campaign.music.state != "paused") {
                            window.youtubePlayer.seekTo((computeCurrentTime(Data.campaign.music) / 1000) || 1)
                            event.target.playVideo()
                            return
                        }
                        if(event.data == YT.PlayerState.PLAYING
                        && Data.campaign.music.state != "playing") {
                            window.youtubePlayer.seekTo((computeCurrentTime(Data.campaign.music) / 1000) || 1)
                            event.target.pauseVideo()
                            return
                        }

                        if(event.data == YT.PlayerState.ENDED) {
                            if(Data.campaign.musics == undefined) return
                            if(Data.campaign.musics.length == 0) return
                            const currentMusic = Data.campaign.musics.find((music) => {
                                return Data.campaign.music.key == music.key
                            })
                            const currentIndex = Data.campaign.musics.indexOf(currentMusic)
                            const nextIndex = currentIndex + 1
                            const nextMusic = Data.campaign.musics[nextIndex]
                            if(nextMusic == undefined) return
                            const TIME_BETWEEN_SONGS = 500
                            Firebase.data.collection("campaigns").doc("theros").update({
                                "music": {
                                    "key": nextMusic.key,
                                    "runkey": nextMusic.key,
                                    "youtubeId": nextMusic.youtubeId,
                                    "startTime": Date.now() + TIME_BETWEEN_SONGS - (nextMusic.embeddedStartTime || 0),
                                    "state": "playing",
                                }
                            })
                        }
                    },
                    "onError": (event) => {
                        console.log("onError", event)
                    }
                }
            })
        }
    }
    stop() {
        Firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "state": "paused"
            }
        })
    }
    pauseplay() {
        if(Data.campaign.music.youtubeId == undefined) {
            return
        }
        if(Data.campaign.music.state != "paused") {
            Firebase.data.collection("campaigns").doc("theros").update({
                "music": {
                    "key": Data.campaign.music.key,
                    "runkey": Data.campaign.music.runkey,
                    "youtubeId": Data.campaign.music.youtubeId,
                    "currentTime": Date.now() - Data.campaign.music.startTime,
                    "state": "paused"
                }
            })
        } else if(Data.campaign.music.state == "paused") {
            Firebase.data.collection("campaigns").doc("theros").update({
                "music": {
                    "key": Data.campaign.music.key,
                    "runkey": Data.campaign.music.runkey,
                    "youtubeId": Data.campaign.music.youtubeId,
                    "startTime": Date.now() - Data.campaign.music.currentTime,
                    "state": "playing"
                }
            })
        }
    }
}
