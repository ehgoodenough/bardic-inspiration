import * as Preact from "preact"

export default class MusicSelection {
    render() {
        return (
            <div class="MusicSelection">
                <form onSubmit={this.onSubmit}>
                    <input type="submit"/>
                    <input name="youtube" type="text"/>
                </form>
            </div>
        )
    }
    onSubmit(event) {
        event.preventDefault()
        const youtubeId = parseYoutubeId(event.target.children["youtube"].value)
        if(youtubeId == undefined || youtubeId == "") return

        window.firebase.data.collection("campaigns").doc("theros").update({
            "music": {
                "youtubeId": youtubeId,
                "startTime": Date.now(),
            }
        })
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
