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
import computeCurrentTime from "./views/functions/computeCurrentTime.js"

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

data.collection("art").orderBy("timestamp", "desc").limit(25).onSnapshot((documents) => {
    if(documents.exists == false) return
    window.app.art = []
    documents.forEach((document, index) => {
        window.app.art.push(document.data())
    })
})

data.collection("campaigns").doc("theros").onSnapshot((document) => {
    if(document.exists == false) return
    window.app.prevcampaign = window.app.campaign
    window.app.campaign = document.data()

    if(window.app.campaign.music != undefined) {
        if(window.youtubePlayer != undefined) {
            const campaign = window.app.campaign
            const prevcampaign = window.app.prevcampaign
            console.log(campaign.music)

            if(campaign.music.youtubeId != prevcampaign.music.youtubeId
            || campaign.music.key != prevcampaign.music.key) {
                return window.youtubePlayer.loadVideoById({
                    "videoId": campaign.music.youtubeId,
                    "startSeconds": Math.floor(computeCurrentTime(campaign.music)) || 1,
                })
            }

            if(campaign.music.startTime != prevcampaign.music.startTime) {
                window.youtubePlayer.seekTo(Math.floor(computeCurrentTime(campaign.music)) || 1)
            }

            if(campaign.music.state != prevcampaign.music.state) {
                if(window.app.campaign.music.state == "paused") {
                    window.youtubePlayer.pauseVideo()
                } else if(window.app.campaign.music.state != "paused") {
                    window.youtubePlayer.playVideo()
                }
            }
        }
    }
})
