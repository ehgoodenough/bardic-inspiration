import * as Preact from "preact"
import uploadArt from "views/functions/uploadArt.js"

import ArtSelection from "views/dm/ArtSelection.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        if(window.app == undefined) return
        if(window.app.game == undefined) return
        return (
            <div className="Mount" onDrop={this.onDrop} onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave}>
                <div class="UploadZone" isDragAndDropping={window.isDragAndDropping > 0}/>
                <MainScreen/>
                <div class="DungeonMasterScreen">
                    <MusicSelection/>
                </div>
            </div>
        )
    }
    onDragEnter(event) {
        window.isDragAndDropping = window.isDragAndDropping || 0
        window.isDragAndDropping += 1
    }
    onDragLeave(event) {
        window.isDragAndDropping = window.isDragAndDropping || 0
        window.isDragAndDropping -= 1
    }
    onDragOver(event) {
        event.preventDefault()
    }
    onDrop(event) {
        event.preventDefault()
        window.isDragAndDropping = false

        let files = [...event.dataTransfer.files]
        if(event.dataTransfer.items) {
            files = [...event.dataTransfer.items].map((item) => {
                if(item.kind != "file") return
                return item.getAsFile()
            })
        }

        files.forEach((file, index) => {
            if(file == undefined) return
            uploadArt(file).then((art) => {
                if(index != 0) return
                window.firebase.data.collection("campaigns").doc("theros").set({"art": art})
            })
        })
    }
}

class MainScreen {
    render() {
        return (
            <div class="MainScreen">
                <Art/>
            </div>
        )
    }
}

class Art {
    render() {
        if(window.app.game.art == undefined) return
        return (
            <div class="Art" style={{
                "background-image": "url(" + window.app.game.art.url + ")"
            }}/>
        )
    }
}

class MusicSelection {
    render() {
        return (
            <div class="MusicSelection">
                <audio id="youtube" controls/>
                <input type="text" onChange={this.onChange}/>
            </div>
        )
    }
    async onChange(event) {
        const youtubeLink = "https://www.youtube.com/watch?v=GyS6HGpCt3o"

        const videoId = parseYoutubeId(youtubeLink)
        if(videoId == undefined || videoId == "") return console.log("nope")

        const cors = "https://images" + ~~(Math.random() * 33) + "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url="
        const response = await fetch(cors + encodeURIComponent("https://www.youtube.com/watch?v=" + videoId))
        if(response.ok != true) return
        let data = await response.text()

        var regex = /(?:ytplayer\.config\s*=\s*|ytInitialPlayerResponse\s?=\s?)(.+?)(?:;var|;\(function|\)?;\s*if|;\s*if|;\s*ytplayer\.|;\s*<\/script)/gmsu

        data = data.split("window.getPageData")[0]
        data = data.replace("ytInitialPlayerResponse = null", "")
        data = data.replace("ytInitialPlayerResponse=window.ytInitialPlayerResponse", "")
        data = data.replace("ytplayer.config={args:{raw_player_response:ytInitialPlayerResponse}};", "")

        var matches = regex.exec(data)
        data = matches && matches.length > 1 ? JSON.parse(matches[1]) : false

        let streams = []
        let result = {}

        if(data.streamingData) {
            if(data.streamingData.adaptiveFormats) {
                streams = streams.concat(data.streamingData.adaptiveFormats)
            }
            if(data.streamingData.formats) {
                streams = streams.concat(data.streamingData.formats)
            }
        } else {
            return false
        }

        const itags = {
            139: "48kbps",
            140: "128kbps",
            141: "256kbps",
            249: "webm_l",
            250: "webm_m",
            251: "webm_h",
        }

        const audioStreams = {}
        streams.forEach(function(stream, n) {
            // console.log(stream)
            if(itags[stream.itag] != undefined) {
                audioStreams[itags[stream.itag]] = stream.url
            }
        })
        // console.log(audioStreams)
        const audioStream = audioStreams["256kbps"]
            || audioStreams["128kbps"]
            || audioStreams["48kbps"]
            || audioStreams["webm_l"]
            || audioStreams["webm_m"]
            || audioStreams["webm_h"]
        if(audioStream == undefined) return console.log("couldn't find a single url")
        document.getElementById("youtube").src = audioStream
        document.getElementById("youtube").play()
    }
}
function parseYoutubeId(string) {
    if(string == undefined) return undefined
    if(string == "") return undefined

    const matches = string.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
    if(matches == undefined) return

    const url = matches[0]
    if(url == undefined) return

    const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)
    const id = (match && match[7].length == 11) ? match[7] : undefined
    return id
}
