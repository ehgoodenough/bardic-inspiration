import * as Preact from "preact"

export default class ArtSelection {
    render() {
        if(window.app.art == undefined) return
        return (
            <div class="ArtSelection">
                <div class="SelectedArt">
                    <img src={window.app.game.arturl}/>
                    <DeleteArtButton artfileref={window.app.game.artfileref}
                        artdocid={window.app.game.artdocid}/>
                </div>
                <div class="SelectableArts">
                    {window.app.art.map((art) => {
                        return <SelectableArt art={art}/>
                    })}
                </div>
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
            console.log(this.props.artfileref, this.props.artdocid)
            await window.firebase.data.collection("art").doc(this.props.artdocid).delete()
            window.firebase.files.ref(this.props.artfileref).delete()
            window.firebase.data.collection("campaigns").doc("theros").set({
                "arturl": undefined,
                "artdocid": undefined,
                "artfileref": undefined,
            })
        }
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
                "arturl": this.props.art.url,
                "artdocid": this.props.art.docid,
                "artfileref": this.props.art.fileref,
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
            window.firebase.data.collection("campaigns").doc("theros").set({
                "arturl": art.url,
                "artdocid": art.docid,
                "artfileref": art.fileref,
            })
        })
    }
}
