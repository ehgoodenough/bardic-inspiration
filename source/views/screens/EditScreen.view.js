import * as Preact from "preact"
import FormatDuration from "format-duration"
import ShortId from "shortid"

import Data from "models/Data.js"
import Something from "models/Something.js"
import YoutubeData from "models/YoutubeData.js"
import Navigation from "models/Navigation.js"
import parseYoutubeId from "../functions/parseYoutubeId.js"
import parseYoutubePlaylistId from "../functions/parseYoutubePlaylistId.js"
import playlists from "playlists.json"

import Menu from "views/widgets/Menu.view.js"
import QueuedItems from "views/screens/EditScreen/QueuedItems.view.js"
import DragAndDrop from "views/screens/EditScreen/DragAndDrop.view.js"
import Controls from "views/screens/EditScreen/Controls.view.js"
import "views/screens/EditScreen.view.less"

export default class EditScreen {
    render() {
        return (
            <div class="EditScreen">
                <div class="EditableSections">
                    <AudioStreamSection streamId={"a"}/>
                    <AudioStreamSection streamId={"b"}/>
                    <AudioStreamSection streamId={"c"}/>
                    <LibrarySection/>
                </div>
                <Menu/>
            </div>
        )
    }
}

class AudioStreamSection {
    render() {
        if(Data.campaign.streams[this.props.streamId] == undefined) return
        return (
            <section class="AudioStreamSection">
                <PlayBox streamId={this.props.streamId}/>
                <SubmissionForm streamId={this.props.streamId}/>
                <div class="Queue">
                    <DragAndDrop streamId={this.props.streamId}/>
                    <QueuedItems streamId={this.props.streamId}/>
                    <ClearButton streamId={this.props.streamId}/>
                </div>
            </section>
        )
    }
}

class ClearButton {
    render() {
        if(Data.campaign.streams[this.props.streamId] == undefined) return
        if(Data.campaign.streams[this.props.streamId].queue == undefined) return
        if(Data.campaign.streams[this.props.streamId].queue.length == 0) return
        return (
            <div class="ClearButton" onClick={this.onClick}>
                Clear All?
            </div>
        )
    }
    get onClick() {
        return (event) => {
            Something.clear(this.props.streamId)
        }
    }
}

class PlayBox {
    render() {
        return (
            <div class="PlayBox">
                <div class="YoutubeScreenshot" onClick={() => Something.pauseplay(this.props.streamId)} style={{
                    "background-image": this.youtubeId ? "url(https://img.youtube.com/vi/" + this.youtubeId + "/default.jpg)" : undefined,
                }}/>
                <Controls streamId={this.props.streamId}/>
            </div>
        )
    }
    get youtubeId() {
        return Data.campaign.streams[this.props.streamId].run?.youtubeId
    }
}

class SubmissionForm {
    render() {
        return (
            <form class="SubmissionForm" onSubmit={this.onSubmit}>
                <input name="youtube" type="text" placeholder="youtube video or youtube playlist url"/>
                <input type="submit"/>
            </form>
        )
    }
    get onSubmit() {
        return (event) => {
            event.preventDefault()
            let submittedValue = event.target.children["youtube"].value.trim()

            const playlistId = parseYoutubePlaylistId(submittedValue)
            if(playlistId != undefined) {
                // Navigation.go("/playlists/" + playlistId)
                YoutubeData.retrievePlaylistVideos(playlistId).then((videos) => {
                    videos = videos.filter((video) => video.thumbnailUrl != undefined)
                    videos.forEach((video) => {
                        video.sourceType = "youtube"
                        video.sourceValue = video.youtubeId
                        video.queueId = ShortId.generate()
                    })

                    Data.campaign.streams[this.props.streamId].queue = Data.campaign.streams[this.props.streamId].queue || []
                    Something.updateQueue(this.props.streamId, [
                        ...Data.campaign.streams[this.props.streamId].queue,
                        ...videos
                    ])
                })
                return
            }

            const videoId = parseYoutubeId(submittedValue)
            if(videoId != undefined) {
                // Navigation.go("/video/" + videoId)
                YoutubeData.retrieveVideos(videoId).then((videos) => {
                    const video = videos[0]
                    if(video == undefined) return
                    video.queueId = ShortId.generate()
                    video.sourceType = "youtube"
                    video.sourceValue = video.youtubeId

                    Data.campaign.streams[this.props.streamId].queue = Data.campaign.streams[this.props.streamId].queue || []
                    Something.updateQueue(this.props.streamId, [
                        ...Data.campaign.streams[this.props.streamId].queue,
                        ...videos
                    ])
                })
            }
        }
    }
}

class LibrarySection {
    render() {
        if(Navigation.state.isExtra != true) return
        return (
            <section class="LibrarySection">
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
                                            Something.updateQueue("a", (Data.campaign.streams["a"]?.queue || []).concat({
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
            </section>
        )
    }
}
