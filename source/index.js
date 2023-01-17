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

const app = Firebase.initializeApp({
    "apiKey": "AIzaSyAkNK-ByqyzgufHhELPFh6e4TsoSuHvPYE",
    "authDomain": "truesight-7c04e.firebaseapp.com",
    "projectId": "truesight-7c04e",
    "storageBucket": "truesight-7c04e.appspot.com",
    "messagingSenderId": "123067060171",
    "appId": "1:123067060171:web:abe3ee3e5109c97f97304e",
    "measurementId": "G-91YL89DDY9"
})

const database = Firebase.firestore()

database.collection("campaigns").doc("theros").onSnapshot((doc) => {
    if(doc.exists == false) return
    doc = doc.data()
    window.doc = doc
})

// const database = Firebase.getFirestore(app)
//
// async function getCampaigns() {
//     const campaigns = (await Firebase.getDocs(Firebase.collection(database, "campaigns"))).docs.map((doc) => doc.data())
//     console.log(campaigns)
// }
//
// getCampaigns()
