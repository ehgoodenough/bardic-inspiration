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
                <div class="MainScreen">
                    <Art/>
                </div>
                <div class="DungeonMasterScreen">
                    <ArtSelection/>
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