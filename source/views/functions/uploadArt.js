import Shortid from "shortid"

export default function uploadArt(file) {
    return new Promise(function(resolve, reject) {
        const id = Shortid.generate()
        const fileref = "art/" + id + file.name.match(/\.[0-9a-z]+$/i)
        const uploading = window.firebase.files.ref(fileref).put(file)
        uploading.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("uploading... ", progress + "%")
        }, (error) => {
            reject(error)
        }, (done) => {
            window.firebase.files.ref(fileref).getDownloadURL().then((url) => {
                const art = {
                    "url": url,
                    "docid": id,
                    "fileref": fileref,
                    "name": file.name,
                }
                window.firebase.data.collection("art").doc(id).set(art)
                resolve(art)
            })
        })
    })
}
