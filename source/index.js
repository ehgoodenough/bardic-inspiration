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
                // "width": "0",
                // "height": "0",
                "videoId": window.app.campaign.music.youtubeId,
                // "playerVars": {
                //     "autoplay": true,
                //     "loop": true,
                // },
                "events": {
                    "onReady": function(event) {
                        console.log("onReady", event)
                        event.target.seekTo(getCurrentTime(window.app.campaign.music.startTime))
                        event.target.playVideo()
                    },
                    "onStateChange": function(event) {
                        console.log("onStateChange", event)
                        // if(event.data == YT.PlayerState.PLAYING && window.done != true) {
                        //     console.log("Setting timer...")
                        //     setTimeout(function() {
                        //         window.youtube.stopVideo()
                        //     }, 6000)
                        //     window.done = true
                        // }
                    }
                }
            })
        } else if(window.youtubePlayer != undefined) {
            const youtubeId = window.youtubePlayer.getVideoUrl()
            const youtubeId1 = youtubeId.substr(youtubeId.length - 11) // parseYoutubeId(youtubeId)
            const youtubeId2 = window.app.campaign.music.youtubeId

            if(youtubeId1 != youtubeId2) {
                window.youtubePlayer.loadVideoById({
                    "videoId": youtubeId2,
                    "startSeconds": getCurrentTime(window.app.campaign.music.startTime),
                })
            }

            // player.getCurrentTime() // Returns the elapsed time in seconds since the video started playing.
            // player.getDuration()
        }
    }
})

// accepts milliseconds for start time as epoch
// uses Date.now() to get current time as epoch
// returns in seconds as relative time.
function getCurrentTime(startTime) {
    return Math.max(0, Math.floor((Date.now() - startTime) / 1000))
}

data.collection("art").orderBy("timestamp", "desc").limit(25).onSnapshot((documents) => {
    if(documents.exists == false) return
    window.app.art = []
    documents.forEach((document, index) => {
        window.app.art.push(document.data())
    })
})
