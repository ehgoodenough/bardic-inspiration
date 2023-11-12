import * as Preact from "preact"
import ShortId from "shortid"
import Data from "models/Data.js"
import Something from "models/Something.js"
import Firebase from "models/Firebase.js"
import upload from "views/functions/upload.js"

import "views/screens/EditScreen/DragAndDrop.view.less"

export default class DragAndDrop {
    render() {
        if(this.props.streamId != "c") return
        return (
            <div className="DragAndDrop" onDrop={this.onDrop} onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave}>
                <div class="UploadZone" isDragAndDropping={window.isDragAndDropping > 0}/>
                {this.props.children}
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
    get onDrop() {
        return async (event) => {
            event.preventDefault()
            window.isDragAndDropping = false

            let files = [...event.dataTransfer.files]
            if(event.dataTransfer.items != undefined) {
                files = [...event.dataTransfer.items].map((item) => {
                    if(item.kind != "file") return
                    return item.getAsFile()
                })
            }

            files = files.filter((file) => !!file)
            files = await Promise.all(files.map((file, index) => upload("audio", file)))
            files = files.map((file) => {
                return {
                    "title": file.filename,
                    "queueId": ShortId.generate(),
                    "url": file.url,
                    "sourceValue": file.url,
                    "sourceType": "url",
                    // "fileref": file.fileref,
                    // "thumbnailUrl": "???"
                }
            })
            Data.campaign.streams[this.props.streamId].queue = Data.campaign.streams[this.props.streamId].queue || []
            Something.updateQueue(this.props.streamId, [
                ...Data.campaign.streams[this.props.streamId].queue,
                ...files
            ])
        }
    }
}

// upload("image", file).then((image) => {
//     if(index != 0) return
//     Firebase.data.collection("campaigns").doc("theros").update({"art": image})
// })
