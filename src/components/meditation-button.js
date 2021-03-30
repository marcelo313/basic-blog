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
                <audio controls>
                    <source src="./meditation-bell.wav" type="audio/wav"></source>
                    Your browser does not support the audio tag.
                </audio>

                <audio ref={ref => this.player = ref}> <source src="./meditation-bell.wav"></source> </audio>
                <button onClick={this.handleClick}>Play Bell</button>
            </>
        )
    }
}

export default MeditationButton