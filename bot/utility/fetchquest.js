import fetch from "node-fetch"

export default async function fetchquest(request) {
    if(request.body !== undefined) {
        request.body = JSON.stringify(request.body)
        request.headers = request.headers || {}
        request.headers["Content-Type"] = "application/json"
    }
    if(request.form !== undefined) {
        request.body = new URLSearchParams(request.form)
		delete request.form
    }
    const response = await fetch(request.url, request)
    return await response.json()
    // return response.clone().json().catch((error) => {
    //     return response.text()
    // }).then((value) => {
    //     if(response.status.toString().charAt(0) === "4"
    //     || response.status.toString().charAt(0) === "5") {
    //         throw value
    //     } else {
    //         return value
    //     }
    // })
}
