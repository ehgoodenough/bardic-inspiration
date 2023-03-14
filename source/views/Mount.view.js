import * as Preact from "preact"
import uploadArt from "views/functions/uploadArt.js"

import ArtSelection from "views/dm/ArtSelection.view.js"
import MusicSelection from "views/dm/MusicSelection.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        if(window.app == undefined) return
        if(window.app.campaign == undefined) return
        return (
            <div className="Mount" onDrop={this.onDrop} onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave}>
                <div class="UploadZone" isDragAndDropping={window.isDragAndDropping > 0}/>
                <MainScreen/>
                <div class="DungeonMasterScreen">
                    {false && <ArtSelection/>}
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
                <Music/>
            </div>
        )
    }
}

class Art {
    render() {
        if(window.app.campaign.art == undefined) return
        return (
            <div class="Art" style={{
                "background-image": "url(" + window.app.campaign.art.url + ")"
            }}/>
        )
    }
}

class Music {
    render() {
        // if(window.app.campaign.music == undefined) return
        // return (
        //     <div class="Music">
        //         <iframe key="123" width="560" height="315" src={"https://www.youtube.com/embed/" + window.app.campaign.music.youtubeId + "?autoplay=1&rel=0&start=" + this.startTime} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //     </div>
        // )
    }
}
