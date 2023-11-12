import * as Preact from "preact"

import Data from "models/Data.js"
import Something from "models/Something.js"
import Firebase from "models/Firebase.js"
import uploadArt from "views/functions/uploadArt.js"

import "views/screens/EditScreen/Queue.view.less"

export default class Queue {
    render() {
        if(Data.campaign == undefined) return
        if(Data.campaign.streams[this.props.streamId].queue == undefined) return
        return (
            <div class="Queue">
                {Data.campaign.streams[this.props.streamId].queue.map((music) => {
                    return (
                        <QueuedItem streamId={this.props.streamId} music={music}/>
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
        return Data.campaign.streams[this.props.streamId]?.run?.queueId == this.props.music.queueId
    }
    get onClickContent() {
        return (event) => {
            Something.updateCurrentRun(this.props.streamId, {
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
            Something.updateQueue(this.props.streamId, removeElement(Data.campaign.streams[this.props.streamId].queue, this.props.music))
            if(this.isOnDeck == true) {
                Something.stop(this.props.streamId)
            }
        }
    }
}

class DragAndDrop {
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
            uploadArt(file).then((art) => {
                if(index != 0) return
                Firebase.data.collection("campaigns").doc("theros").update({"art": art})
            })
        })
    }
}

function removeElement(array, element) {
    const index = array.indexOf(element)
    if(index == -1) return array
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ]
}
