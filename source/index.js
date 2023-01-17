if(__STAGE__ === "DEVELOPMENT") {
    require("statgrab/do")
}

import * as Preact from "preact"
import Yaafloop from "yaafloop"

import Mount from "views/Mount.view.js"

import Model from "models/Model.js"
const model = new Model()
export default model

let loop = new Yaafloop(function(delta) {
    model.update(delta)
    this.mount = Preact.render(<Mount/>, document.body, this.mount)
})

import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"
import {getFirestore, collection, getDocs} from "firebase/firestore/lite"
const Firebase = {initializeApp, getAnalytics, getFirestore, getDocs, collection}

const app = Firebase.initializeApp({
    "apiKey": "AIzaSyAkNK-ByqyzgufHhELPFh6e4TsoSuHvPYE",
    "authDomain": "truesight-7c04e.firebaseapp.com",
    "projectId": "truesight-7c04e",
    "storageBucket": "truesight-7c04e.appspot.com",
    "messagingSenderId": "123067060171",
    "appId": "1:123067060171:web:abe3ee3e5109c97f97304e",
    "measurementId": "G-91YL89DDY9"
})

const analytics = getAnalytics(app)

const database = Firebase.getFirestore(app)

async function getCampaigns() {
    const campaigns = (await Firebase.getDocs(Firebase.collection(database, "campaigns"))).docs.map((doc) => doc.data())
    console.log(campaigns)
}

getCampaigns()
