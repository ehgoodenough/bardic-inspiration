import Firebase from "models/Firebase.js"

import {parseYoutubeId} from "views/functions/parseYoutubeId.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"

Firebase.data.collection("art").orderBy("timestamp", "desc").limit(25).onSnapshot((documents) => {
    if(documents.exists == false) return
    Data.art = []
    documents.forEach((document, index) => {
        Data.art.push(document.data())
    })
})

Firebase.data.collection("campaigns").doc("theros").onSnapshot((document) => {
    if(document.exists == false) return
    Data.prevcampaign = Data.campaign
    Data.campaign = document.data()

    Data.campaign.musics = Data.campaign.musics || []

    if(Data.campaign.music != undefined) {
        if(window.youtubePlayer != undefined) {
            const campaign = Data.campaign
            const prevcampaign = Data.prevcampaign
            console.log(campaign.music)

            if(campaign.music.youtubeId != prevcampaign.music.youtubeId
            || campaign.music.key != prevcampaign.music.key) {
                return window.youtubePlayer.loadVideoById({
                    "videoId": campaign.music.youtubeId,
                    "startSeconds": Math.floor(computeCurrentTime(campaign.music) / 1000) || 1,
                })
            }

            if(campaign.music.startTime != prevcampaign.music.startTime) {
                window.youtubePlayer.seekTo(Math.floor(computeCurrentTime(campaign.music) / 1000) || 1)
            }

            if(campaign.music.state != prevcampaign.music.state) {
                if(Data.campaign.music.state == "paused") {
                    window.youtubePlayer.pauseVideo()
                } else if(Data.campaign.music.state != "paused") {
                    window.youtubePlayer.playVideo()
                }
            }
        }
    }
})

const Data = {}
window.app = {"data": Data}
export default Data
