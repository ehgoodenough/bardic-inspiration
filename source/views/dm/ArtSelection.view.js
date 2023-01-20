import * as Preact from "preact"

export default class ArtSelection {
    render() {
        if(window.app.art == undefined) return
        return (
            <div class="ArtSelection">
                <SelectedArt art={window.app.game.art}/>
                <ArtSearch/>
                <div class="SelectableArts">
                    {window.app.art.filter((art) => {
                        if(window.app.query == undefined) return true
                        return (art.oldfilename || "").toLowerCase().includes(window.app.query.toLowerCase())
                    }).map((art) => {
                        return <SelectableArt art={art}/>
                    })}
                </div>
            </div>
        )
    }
}

class SelectedArt {
    render() {
        if(this.props.art == undefined) return
        return (
            <div class="SelectedArt">
                <div class="Title">{this.props.art.oldfilename}</div>
                <div class="Image" style={{"background-image": "url(" + this.props.art.url + ")"}}/>
                <DeleteArtButton art={this.props.art}/>
            </div>
        )
    }
}

class DeleteArtButton {
    render() {
        return (
            <div class="DeleteArtButton" onClick={this.onClick}>
                DELETE
            </div>
        )
    }
    get onClick() {
        return async (event) => {
            console.log(this.props.art)
            await window.firebase.data.collection("art").doc(this.props.art.docid).delete()
            window.firebase.files.ref(this.props.art.fileref).delete()
        }
    }
}

class ArtSearch {
    render() {
        return (
            <div class="Search">
                <input type="text" onInput={this.onChange}/>
            </div>
        )
    }
    onChange(event) {
        window.app.query = event.target.value
    }
}

class SelectableArt {
    render() {
        return (
            <div class="SelectableArt" onClick={this.onClick} style={{
                "background-image": "url(" + this.props.art.url + ")",
            }}/>
        )
    }
    get onClick() {
        return (event) => {
            window.firebase.data.collection("campaigns").doc("theros").set({
                "art": this.props.art,
            })
        }
    }
}

class UploadForm {
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="file" accept="image/png, image/jpeg" id="upload"/>
                <input type="submit"/>
            </form>
        )
    }
    onSubmit(event) {
        event.preventDefault()
        const file = event.target.children["upload"].files[0]
        if(file == undefined) return
        uploadArt(file).then((art) => {
            window.firebase.data.collection("campaigns").doc("theros").set({"art": art})
        })
    }
}
