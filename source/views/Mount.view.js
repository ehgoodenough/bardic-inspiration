import * as Preact from "preact"

import index from "index"

import Frame from "views/Frame.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <Frame size="16x9">
                    <img src={require("images/spacebar.png")}/>
                    <div>{index.time.toFixed(3)}s</div>
                </Frame>
            </div>
        )
    }
}
