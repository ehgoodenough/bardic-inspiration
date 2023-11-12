import Firebase from "models/Firebase.js"
import Shortid from "shortid"

// type = "image" or "audio"
// file is, y'know, a file
export default function upload(type, file) {
    return new Promise(function(resolve, reject) {
        const id = Shortid.generate()
        const fileref = type + "/" + id + file.name.match(/\.[0-9a-z]+$/i)
        const uploading = Firebase.files.ref(fileref).put(file)
        uploading.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("uploading... ", progress + "%")
        }, (error) => {
            reject(error)
        }, (done) => {
            Firebase.files.ref(fileref).getDownloadURL().then((url) => {
                const doc = {
                    "url": url,
                    "docid": id,
                    "fileref": fileref,
                    "timestamp": Date.now(),
                    "filename": file.name,
                    "type": type,
                }
                Firebase.data.collection("files").doc(id).set(doc)
                resolve(doc)
            })
        })
    })
}
