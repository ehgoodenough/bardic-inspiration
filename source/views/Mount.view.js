import * as Preact from "preact"
import Shortid from "shortid"

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
            uploadFile("art/", file).then((url) => {
                if(index == 0) {
                    window.firebase.data.collection("campaigns").doc("theros").set({"art": url})
                }
            })
        })
    }
}

class MainSection {
    render() {
        return (
            <div class="MainSection">
                <div class="Art" style={{
                    "background-image": "url(" + window.app.game.art + ")"
                }}/>
                <div class="DungeonMasterScreen">
                    <form onSubmit={this.onSubmit}>
                        <input type="file" accept="image/png, image/jpeg" id="upload"/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
    onSubmit(event) {
        event.preventDefault()
        const file = event.target.children["upload"].files[0]
        if(file == undefined) return
        uploadFile("art/", file)
    }
}

function uploadFile(uploadpath, file) {
    return new Promise(function(resolve, reject) {
        uploadpath += Shortid.generate() + file.name.match(/\.[0-9a-z]+$/i)
        const uploading = window.firebase.files.ref(uploadpath).put(file)
        uploading.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("uploading... ", progress + "%")
        }, (error) => {
            reject(error)
        }, (done) => {
            window.firebase.files.ref(uploadpath).getDownloadURL().then((url) => {
                window.firebase.data.collection("art").add({"url": url})
                resolve(url)
            })
        })
    })
}
