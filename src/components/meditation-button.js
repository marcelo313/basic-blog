import * as React from "react"

class MeditationButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked button!");
        this.player.play();
        console.log("updated");
        // sound.play("../sounds/meditation-bell.wav")
    }

    render() {
        return (
            <>
            <button onClick={this.handleClick}>Play Bell</button>
            </>
        )
    }
}

export default MeditationButton