import * as Preact from "preact"
import Data from "models/Data.js"
import Firebase from "models/Firebase.js"

export default class ArtSelection {
    render() {
        if(Data.art == undefined) return
        return (
            <div class="ArtSelection">
                <SelectedArt art={Data.campaign.art}/>
                <ArtSearch/>
                <div class="SelectableArts">
                    {Data.art.filter((art) => {
                        if(Data.query == undefined) return true
                        return (art.oldfilename || "").toLowerCase().includes(Data.query.toLowerCase())
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
                <input class="Title" key={this.props.art.docid} type="text" defaultValue={this.props.art.oldfilename} onChange={this.onChange}/>
                <div class="Image" style={{"background-image": "url(" + this.props.art.url + ")"}}/>
                <DeleteArtButton art={this.props.art}/>
            </div>
        )
    }
    get onChange() {
        return (event) => {
            console.log()
            Firebase.data.collection("art").doc(this.props.art.docid).update({
                "oldfilename": event.target.value,
            })
        }
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
            await Firebase.data.collection("art").doc(this.props.art.docid).delete()
            Firebase.files.ref(this.props.art.fileref).delete()
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
        Data.query = event.target.value
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
            Firebase.data.collection("campaigns").doc("theros").update({
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
            Firebase.data.collection("campaigns").doc("theros").set({"art": art})
        })
    }
}


.ArtSelectionScreen {
    max-width: 320px;
    height: 100%;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.5);

    .SelectedArt {
        margin-bottom: 1em;

        .Title {
            height: 1.5em;
            padding: 0em 1em;
            line-height: 1.5em;
            display: block;
            width: 100%;
            border: none;

            font: inherit;
            font-weight: 600;
            font-stretch: condensed;
            background-color: white;
        }
        .Image {
            width: 100%;
            height: 10em;
            border-radius: 4px;
            background-size: cover;
            background-position: center;
        }
        .DeleteArtButton {
            background-color: white;
            border-radius: 2px;
            padding: 0.1em;
        }
    }

    .Search {
        padding: 0em 1em;

        input {
            width: 100%;
            font: inherit;
            font-size: 1.5em;
        }
    }

    .SelectableArts {
        width: 100%;
        height: 100%;
        padding: 1em;
        display: grid;
        row-gap: 1em / @golden-ratio;
        column-gap: 1em / @golden-ratio;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 3em;

        .SelectableArt {
            width: 1fr;
            height: 3em;

            border-radius: 4px;
            background-size: cover;
            background-position: center;
            background-color: black;
        }
    }
}
