import * as Preact from "preact"
import FormatDuration from "format-duration"
import ShortId from "shortid"
import Poin from "poin"

import Data from "models/Data.js"
import Navigation from "models/Navigation.js"
import Something from "models/Something.js"
import Youtube from "models/Youtube.js"
import Firebase from "models/Firebase.js"
import parseYoutubeId from "../functions/parseYoutubeId.js"
import parseYoutubePlaylistId from "../functions/parseYoutubePlaylistId.js"
import parseEmbeddedStartTime from "../functions/parseEmbeddedStartTime.js"
import computeCurrentTime from "views/functions/computeCurrentTime.js"
import playlists from "playlists.json"

import Controls from "views/widgets/Controls.view.js"
import DragAndDrop from "views/widgets/DragAndDrop.view.js"

import "views/screens/EditScreen.view.less"

export default class EditScreen {
    render() {
        if(Data.campaign == undefined) return
        Youtube.onLoad()
        return (
            <DragAndDrop>
                <div class="EditScreen">
                    <AudioStreamSection streamKey={"audio0"}/>
                    <LibrarySection/>
                </div>
            </DragAndDrop>
        )
    }
}

class AudioStreamSection {
    render() {
        return (
            <section class="AudioStreamSection">
                <div class="PlayBox">
                    <div class="YoutubeScreenshot" onClick={() => Youtube.pauseplay()} style={{
                        "background-image": "url(https://img.youtube.com/vi/" + Data.campaign.music.youtubeId + "/default.jpg)",
                    }}/>
                    <Controls/>
                </div>
                <SubmissionForm/>
                <Queue/>
                <div class="ClearButton" onClick={this.onClickClearButton}>
                    Clear All?
                </div>
            </section>
        )
    }
    onClickClearButton() {
        Something.clear("audio0")
    }
}

class SubmissionForm {
    render() {
        return (
            <form class="SubmissionForm" onSubmit={this.onSubmit}>
                <input name="youtube" type="text" placeholder="put your youtube url here"/>
                <input type="submit"/>
            </form>
        )
    }
    onSubmit(event) {
        event.preventDefault()
        let submittedValue = event.target.children["youtube"].value.trim()

        const playlistId = parseYoutubePlaylistId(submittedValue)
        if(playlistId != undefined) {
            // Navigation.go("/playlists/" + playlistId)
            Youtube.retrievePlaylistVideos(playlistId).then((videos) => {
                videos.forEach((video) => video.queueId = ShortId.generate())
                videos = videos.filter((video) => video.thumbnailUrl != undefined)

                Data.campaign.musics = Data.campaign.musics || []
                Something.updateQueue("audio0", Data.campaign.musics.concat(videos))
            })
            return
        }

        const videoId = parseYoutubeId(submittedValue)
        if(videoId != undefined) {
            // Navigation.go("/video/" + videoId)
            Youtube.retrieveVideos(videoId).then((videos) => {
                const video = videos[0]
                if(video == undefined) return
                video.queueId = ShortId.generate()

                Data.campaign.musics = Data.campaign.musics || []
                Something.updateQueue("audio0", Data.campaign.musics.concat(video))
            })
        }
    }
}

class Queue {
    render() {
        if(Data.campaign == undefined) return
        if(Data.campaign.musics == undefined) return
        return (
            <div class="Queue">
                {Data.campaign.musics.map((music) => {
                    return (
                        <QueuedItem music={music}/>
                    )
                })}
            </div>
        )
    }
}

class QueuedItem {
    render() {
        return (
            <div class="QueuedItem" onClick={this.onClickContent} isOnDeck={this.isOnDeck}>
                <div class="YoutubeScreenshot" style={{
                    "background-image": "url(https://img.youtube.com/vi/" + this.props.music.youtubeId + "/default.jpg)",
                }}/>
                <div class="Text">{this.props.music.title || this.props.music.youtubeId}</div>
                <div class="DeleteButton" onClick={this.onClickDeleteButton}>
                    <span class="material-icons">close</span>
                </div>
            </div>
        )
    }
    get isOnDeck() {
        return Data.campaign.music.queueId == this.props.music.queueId
    }
    get onClickContent() {
        return (event) => {
            Something.updateCurrentRun("audio0", {
                "queueId": this.props.music.queueId,
                "youtubeId": this.props.music.youtubeId,
                "startTime": Date.now(),
                "state": "playing",
            })
        }
    }
    get onClickDeleteButton() {
        return (event) => {
            event.stopPropagation()
            Something.updateQueue("audio0", removeElement(Data.campaign.musics, this.props.music))
            if(this.isOnDeck) {
                Youtube.stop()
            }
        }
    }
}

function LibrarySection() {
    if(Navigation.state.isExtra != true) return
    return (
        <section class="LibrarySection">
            <div class="Library">
                {playlists.map((playlist) => {
                    return (
                        <div class="Playlist">
                            <a class="PlaylistName" href={"https://www.youtube.com/playlist?list=" + playlist.id} target="_blank" >
                                {playlist.title}
                            </a>
                            <div class="Musics">
                                {playlist.musics.map((music) => {
                                    return (
                                        <div class="Music" onClick={() => {
                                            Something.updateQueue("audio0", Data.campaign.musics.concat({
                                                "queueId": ShortId.generate(),
                                                "youtubeId": music.youtubeId,
                                                "title": music.title,
                                            }))
                                        }}>
                                            <div class="YoutubeScreenshot" style={{
                                                "background-image": "url(https://img.youtube.com/vi/" + music.youtubeId + "/default.jpg)",
                                            }}/>
                                            <div class="Text">{music.title || music.youtubeId}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

function removeElement(array, element) {
    const index = array.indexOf(element)
    if(index == -1) return array
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ]
}
