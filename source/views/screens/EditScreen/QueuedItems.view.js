import * as Preact from "preact"

import Data from "models/Data.js"
import Something from "models/Something.js"

import "views/screens/EditScreen/QueuedItems.view.less"

export default class QueuedItems {
    render() {
        if(Data.campaign == undefined) return
        if(Data.campaign.streams[this.props.streamId].queue == undefined) return
        return (
            <div class="QueuedItems">
                {Data.campaign.streams[this.props.streamId].queue.map((item) => {
                    return (
                        <QueuedItem streamId={this.props.streamId} item={item}/>
                    )
                })}
            </div>
        )
    }
}

class QueuedItem {
    render() {
        return (
            <div class="QueuedItem" onClick={this.onClick} isOnDeck={this.isOnDeck}>
                <div class="YoutubeScreenshot" style={{
                    "background-image": "url(https://img.youtube.com/vi/" + this.props.item.youtubeId + "/default.jpg)",
                }}/>
                <div class="Text">{this.props.item.title || this.props.item.youtubeId}</div>
                <div class="DeleteButton" onClick={this.onClickDeleteButton}>
                    <span class="material-icons">close</span>
                </div>
            </div>
        )
    }
    get isOnDeck() {
        return Data.campaign.streams[this.props.streamId]?.run?.queueId == this.props.item.queueId
    }
    get onClick() {
        return (event) => {
            Something.updateCurrentRun(this.props.streamId, {
                ...this.props.item,
                // "queueId": this.props.item.queueId,
                // "sourceValue": this.props.item.sourceValue,
                // "sourceType": this.props.item.sourceType,
                "startTime": Date.now(),
                "state": "playing",
            })
        }
    }
    get onClickDeleteButton() {
        return (event) => {
            event.stopPropagation()
            Something.updateQueue(this.props.streamId, removeElement(Data.campaign.streams[this.props.streamId].queue, this.props.item))
            if(this.isOnDeck == true) {
                Something.stop(this.props.streamId)
            }
        }
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
