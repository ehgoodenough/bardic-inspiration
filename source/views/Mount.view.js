import * as Preact from "preact"

import Frame from "views/Frame.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        if(window.doc == undefined) return
        return (
            <div className="Mount">
                <Frame size="16x9">
                    <div class="Image" style={{
                        "background-image": "url(" + window.doc.image + ")"
                    }}/>
                </Frame>
            </div>
        )
    }
}
