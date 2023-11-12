import * as Preact from "preact"
import Data from "models/Data.js"
import Firebase from "models/Firebase.js"
import upload from "views/functions/upload.js"

import "views/screens/EditScreen/DragAndDrop.view.less"

export default class DragAndDrop {
    render() {
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
            upload("audio", file).then((image) => {
                console.log("done", image)
            })
        })
    }
}

// upload("image", file).then((image) => {
//     if(index != 0) return
//     Firebase.data.collection("campaigns").doc("theros").update({"art": image})
// })
