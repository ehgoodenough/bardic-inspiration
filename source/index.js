if(__STAGE__ === "DEVELOPMENT") {
    require("statgrab/do")
}

import * as Preact from "preact"
import Yaafloop from "yaafloop"

import Mount from "views/Mount.view.js"

let loop = new Yaafloop(function(delta) {
    this.mount = Preact.render(<Mount/>, document.body, this.mount)
})

// FIREBASE //

import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = Firebase.initializeApp({
    "apiKey": "AIzaSyAkNK-ByqyzgufHhELPFh6e4TsoSuHvPYE",
    "authDomain": "truesight-7c04e.firebaseapp.com",
    "projectId": "truesight-7c04e",
    "storageBucket": "truesight-7c04e.appspot.com",
    "messagingSenderId": "123067060171",
    "appId": "1:123067060171:web:abe3ee3e5109c97f97304e",
    "measurementId": "G-91YL89DDY9",
})

const data = Firebase.firestore()

window.app = {}
window.firebase = {"data": data, "files": Firebase.storage()}

data.collection("campaigns").doc("theros").onSnapshot((document) => {
    if(document.exists == false) return
    window.app.game = document.data()
})

data.collection("art").limit(25).onSnapshot((documents) => {
    if(documents.exists == false) return
    window.app.art = []
    documents.forEach((document, index) => {
        window.app.art.push(document.data())
    })
})
