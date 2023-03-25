import Firebase from "models/Firebase.js"
import Shortid from "shortid"

export default function uploadArt(file) {
    return new Promise(function(resolve, reject) {
        const id = Shortid.generate()
        const fileref = "art/" + id + file.name.match(/\.[0-9a-z]+$/i)
        const uploading = Firebase.files.ref(fileref).put(file)
        uploading.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("uploading... ", progress + "%")
        }, (error) => {
            reject(error)
        }, (done) => {
            Firebase.files.ref(fileref).getDownloadURL().then((url) => {
                const art = {
                    "url": url,
                    "docid": id,
                    "fileref": fileref,
                    "timestamp": Date.now(),
                    "oldfilename": file.name,
                }
                Firebase.data.collection("art").doc(id).set(art)
                resolve(art)
            })
        })
    })
}
