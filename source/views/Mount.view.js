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
                <button onClick={this.onClick}>go</button>
                <input type="text" onChange={this.onChange}/>
                <div id="youtube"/>
            </div>
        )
    }
    onChange(event) {
        const youtubeId = parseYoutubeId(event.target.value)
        if(youtubeId == undefined || youtubeId == "") return
        window.firebase.data.collection("campaigns").doc("theros").update({
            "youtubeId": youtubeId,
        })
    }
    onClick(event) {
        window.youtube = new YT.Player("youtube", {
            // width: "300",
            // height: "200",
            "width": "0",
            "height": "0",
            "videoId": window.app.game.youtubeId,
            "playerVars": {
                "autoplay": true,
                "loop": true,
            },
            "events": {
                "onReady": function(event) {
                    // event.target.playVideo()
                },
                "onStateChange": function(event) {
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
    }
}

class Youtube {
    render() {
        if(this.props.youtubeId == undefined) return
        return (
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.youtubeId + "?autoplay=1&rel=0"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
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

// window.onYouTubeIframeAPIReady = function() {
//     console.log("does this only work if i leave this here?")
// }
