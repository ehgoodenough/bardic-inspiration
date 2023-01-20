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
                <MainSection/>
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
                window.firebase.data.collection("campaigns").doc("theros").set({
                    "arturl": art.url,
                    "artdocid": art.docid,
                    "artfileref": art.fileref,
                })
            })
        })
    }
}

class MainSection {
    render() {
        return (
            <div class="MainSection">
                <div class="Art" style={{
                    "background-image": "url(" + window.app.game.arturl + ")"
                }}/>
                <div class="DungeonMasterScreen">
                    <ArtSelection/>
                </div>
            </div>
        )
    }
}
