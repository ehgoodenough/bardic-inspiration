import * as Preact from "preact"
import Shortid from "shortid"

import Frame from "views/Frame.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        if(window.app == undefined) return
        if(window.app.game == undefined) return
        return (
            <div className="Mount">
                <DungeonMasterScreen/>
                <BackgroundImage/>
            </div>
        )
    }
}

function BackgroundImage() {
    return (
        <div class="BackgroundImage" style={{
            "background-image": "url(" + window.app.game.art + ")"
        }}/>
    )
}

class DungeonMasterScreen {
    render() {
        return (
            <div class="DungeonMasterScreen">
                <form onSubmit={this.onSubmit}>
                    <input type="file" accept="image/png, image/jpeg" id="upload"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
    onSubmit(event) {
        event.preventDefault()
        const file = event.target.children["upload"].files[0]
        if(file == undefined) return
        const filepath = "art/" + Shortid.generate() + file.name.match(/\.[0-9a-z]+$/i)
        const uploading = window.firebase.files.ref(filepath).put(file)
        uploading.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("uploading... ", progress + "%")
        }, (error) => {
            console.error(error)
        }, (done) => {
            window.firebase.files.ref(filepath).getDownloadURL().then((url) => {
                window.firebase.data.collection("art").add({"url": url})
                window.firebase.data.collection("campaigns").doc("theros").set({"art": url})
            })
        })
    }
}
