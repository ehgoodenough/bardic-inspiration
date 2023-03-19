if(__STAGE__ === "DEVELOPMENT") {
    require("statgrab/do")
}

import * as Preact from "preact"
import Yaafloop from "yaafloop"

import Mount from "views/Mount.view.js"

let loop = new Yaafloop(function(delta) {
    this.mount = Preact.render(<Mount/>, document.body, this.mount)
})

// FIREBASE //

import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import parseYoutubeId from "./views/functions/parseYoutubeId.js"

const app = Firebase.initializeApp({
    "apiKey": "AIzaSyAkNK-ByqyzgufHhELPFh6e4TsoSuHvPYE",
    "authDomain": "truesight-7c04e.firebaseapp.com",
    "projectId": "truesight-7c04e",
    "storageBucket": "truesight-7c04e.appspot.com",
    "messagingSenderId": "123067060171",
    "appId": "1:123067060171:web:abe3ee3e5109c97f97304e",
    "measurementId": "G-91YL89DDY9",
})

const data = Firebase.firestore()

window.app = {}
window.firebase = {"data": data, "files": Firebase.storage()}

data.collection("campaigns").doc("theros").onSnapshot((document) => {
    if(document.exists == false) return
    window.app.campaign = document.data()

    if(window.app.campaign.music != undefined) {
        if(window.youtubePlayer == undefined) {
            window.youtubePlayer = new YT.Player("youtuber", {
                width: "300",
                height: "200",
                "videoId": window.app.campaign.music.youtubeId,
                "playerVars": {
                    "start": getCurrentTime(window.app.campaign.music.startTime),
                    "autoplay": window.app.campaign.music == YT.PlayerState.PLAYING,
                },
                "events": {
                    // "onReady": function(event) {
                    //     console.log("onReady", event)
                    //
                    //     // if(window.app.campaign.music.isPaused === true) {
                    //     //     event.target.seekTo(window.app.campaign.music.currentTime / 1000)
                    //     //     event.target.pauseVideo()
                    //     // } else if(window.app.campaign.music.isPaused !== true) {
                    //     //     event.target.seekTo(getCurrentTime(window.app.campaign.music.startTime))
                    //     //     event.target.playVideo()
                    //     // }
                    // },
                    "onStateChange": function(event) {
                        // console.log("onStateChange", event)
                        // if(event.data == YT.PlayerState.PLAYING) {
                        //     if(window.app.campaign.music.isPaused === true) {
                        //         window.firebase.data.collection("campaigns").doc("theros").update({
                        //             "music": {
                        //                 "youtubeId": window.app.campaign.music.youtubeId,
                        //                 "isPaused": false,
                        //                 "startTime": Date.now() - window.app.campaign.music.currentTime,
                        //             }
                        //         })
                        //     }
                        // }
                        // if(event.data == YT.PlayerState.PAUSED) {
                        //     if(window.app.campaign.music.isPaused !== true) {
                        //         window.firebase.data.collection("campaigns").doc("theros").update({
                        //             "music": {
                        //                 "youtubeId": window.app.campaign.music.youtubeId,
                        //                 "isPaused": true,
                        //                 "currentTime": window.youtubePlayer.getCurrentTime() * 1000,
                        //             }
                        //         })
                        //     }
                        // }
                    },
                    "onError": function(event) {
                        console.log("onError", event)
                    }
                }
            })
        } else if(window.youtubePlayer != undefined) {
            console.log(window.app.campaign.music)

            const currentYoutubeUrl = window.youtubePlayer.getVideoUrl()
            const currentYoutubeId = currentYoutubeUrl.substr(currentYoutubeUrl.length - 11) // parseYoutubeId(youtubeId)
            const nextYoutubeId = window.app.campaign.music.youtubeId
            if(currentYoutubeId != nextYoutubeId) {
                return window.youtubePlayer.loadVideoById({
                    "videoId": nextYoutubeId,
                    "startSeconds": getCurrentTime(window.app.campaign.music.startTime),
                })
            }

            const currentYoutubeState = window.youtubePlayer.getPlayerState()
            if(currentYoutubeState != window.app.campaign.music.state) {
                if(window.app.campaign.music.state == YT.PlayerState.PLAYING) {
                    window.youtubePlayer.seekTo(getCurrentTime(window.app.campaign.music.startTime))
                    window.youtubePlayer.playVideo()
                } else if(window.app.campaign.music.state == YT.PlayerState.PAUSED) {
                    window.youtubePlayer.seekTo(window.app.campaign.music.currentTime / 1000)
                    window.youtubePlayer.pauseVideo()
                }
            }
        }
    }
})

let ytloop = new Yaafloop(function(delta) {
    if(window.youtubePlayer != undefined) {
        if(window.youtubePlayer.getPlayerState instanceof Function) {
            const state = window.youtubePlayer.getPlayerState()
            if(window.app.campaign.music.state != state) {
                window.app.campaign.music.state = state
                window.firebase.data.collection("campaigns").doc("theros").update({
                    "music": {
                        "youtubeId": window.app.campaign.music.youtubeId,
                        "startTime": window.app.campaign.music.startTime,
                        "currentTime": window.youtubePlayer.getCurrentTime() * 1000,
                        "state": state,
                    }
                })
                console.log(state)
            }
        }
    }
})

// accepts milliseconds for start time as epoch
// uses Date.now() to get current time as epoch
// returns in seconds as relative time.
function getCurrentTime(startTime) {
    return Math.max(0, Math.floor((Date.now() - startTime) / 1000))
}

// music.youtubeId // string
// music.currentTime // in milliseconds, relative time
// music.startTime // in millisconeds, epoch absolute time
// music.isPaused // boolean

data.collection("art").orderBy("timestamp", "desc").limit(25).onSnapshot((documents) => {
    if(documents.exists == false) return
    window.app.art = []
    documents.forEach((document, index) => {
        window.app.art.push(document.data())
    })
})
