import express from "express"
const app = express()

app.use(express.static("./source/music"))
app.listen(3000)
console.log("Listening on 3000")
