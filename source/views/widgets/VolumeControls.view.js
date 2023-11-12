import * as Preact from "preact"
import Poin from "poin"

import "views/widgets/VolumeControls.view.less"

export default class VolumeControls {
    render() {
        return (
            <div class="VolumeControls">
                <div class="VolumeButton" onClick={this.onClickVolumeButton}>
                    <span class="material-icons">{this.icon}</span>
                </div>
                <div class="VolumeBar" id={"volume-" + (this.props.id || "0")} onMouseMove={this.onClickVolumeBar}>
                    <div class="Bar"/>
                    <div class="Dot" style={{
                        "left": this.props.volume.level * 100 + "%",
                    }}/>
                </div>
            </div>
        )
    }
    get icon() {
        if(this.props.volume.isMuted) return "volume_off"
        if(this.props.volume.level <= 0) return "volume_off"
        if(this.props.volume.level >= 0.5) return "volume_up"
        return "volume_down"
    }
    get onClickVolumeButton() {
        return (event) => {
            if(this.props.volume.isMuted) {
                this.props.onUpdateVolume({
                    "level": this.props.volume.level
                })
            } else {
                this.props.onUpdateVolume({
                    "level": this.props.volume.level,
                    "isMuted": true
                })
            }
        }
    }
    get onClickVolumeBar() {
        return (event) => {
            if(Poin.isPressed() == false) return
            const dom = document.getElementById("volume-" + (this.props.id || "0"))
            if(dom == undefined) return
            const bounds = dom.getBoundingClientRect()
            let volumeLevel = ((Poin.position.x - bounds.x) / bounds.width)
            if(volumeLevel < 0.01) volumeLevel = 0
            if(volumeLevel > 0.99) volumeLevel = 1
            this.props.onUpdateVolume({
                "level": volumeLevel
            })
        }
    }
}
