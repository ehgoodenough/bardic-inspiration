if(typeof window != "undefined") {
    window.setTimeout(() => {
        Navigation.run(window.location.hash)
    })
    window.addEventListener("hashchange", (event) => {
        Navigation.run(window.location.hash)
    })
}

class UserError extends Error {}

const Navigation = new class {
    constructor() {
        this.routes = []
        this.state = {"screen": "SplashScreen"}
    }
    // Navigation.go
    // Moves to a new path. You can achieve
    // the same functionality by editing the
    // hash yourself in the url bar.
    go(path = "") {
        window.location.hash = path
    }
    run(path) {
        path = decodeURIComponent(path)
        path = path[0] == "#" ? path.substring(1) : path

        // Remove any slashes at the end of the line.
        if(path.charAt(path.length - 1) == "/") {
            path = path.substring(0, path.length - 1)
        }

        // If no path is provided, default to the root.
        path = path || "/"

        const request = {"path": path}

        for(let index in this.routes) {
            const route = this.routes[index]

            const match = request.path.match(route.path)
            if(match != undefined) {
                request.wildcards = match.groups
                try {
                    const response = route.func(request)
                    if(response != undefined) {
                        this.state = response
                        return
                    }
                } catch(error) {
                    request.error = error
                    if(error instanceof UserError) {
                        this.state = this.onUserError(request)
                    } else {
                        this.state = this.onError(request)
                    }

                    throw error
                }
            }
        }
    }
    on(path, func) {
        if(path instanceof Error == true) {
            return this.routes[path] = {path, func}
        }

        this.routes.push({
            "path": this.convertStringToRegex(path),
            "func": func
        })
    }
    convertStringToRegex(string) {
        if(string instanceof RegExp == true) return string
        string = string.replace(/\*/g, "(.*)")

        const wildcards = string.match(/\:[a-zA-Z]+/g)
        if(wildcards != undefined) {
            wildcards.forEach((wildcard) => {
                string = string.replace(wildcard, "(?<" + wildcard.substring(1) + ">.*)")
            })
        }

        return new RegExp("^" + string + "$", "i")
    }
}

Navigation.on("/", function(request) {
    return {"screen": "SplashScreen"}
})

Navigation.on("/edit", function(request) {
    return {"screen": "EditScreen"}
})

Navigation.on("/play", function(request) {
    return {"screen": "PlayScreen"}
})

Navigation.on("/play/debug", function(request) {
    return {"screen": "PlayScreen", "isDebug": true}
})

Navigation.on("/*", function(request) {
    throw new UserError("Could not find " + request.path)
})

Navigation.onUserError = function(request) {
    return {"screen": "ErrorScreen", "message": request.error.message}
}

Navigation.onError = function(request) {
    return {"screen": "ErrorScreen", "message": "Something went wrong!!"}
}

window.truesight = window.truesight || {}
window.truesight.navigation = window.truesight.navigation || Navigation

export default Navigation
