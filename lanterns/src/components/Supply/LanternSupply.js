import React from '../../../node_modules/react';
import '../../App.css';

class LanternSupply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            white: 0,
            blue: 0,
            red: 0,
            green: 0,
            black: 0,
            yellow: 0,
            purple: 0
        }
    }

    whiteLantern() {
        this.setState((prevState) => ({
            white: prevState.white + 1
        }));
    }

    blueLantern() {
        this.setState((prevState) => ({
            blue: prevState.blue + 1
        }));
    }

    redLantern() {
        this.setState((prevState) => ({
            red: prevState.red + 1
        }));
    }

    greenLantern() {
        this.setState((prevState) => ({
            green: prevState.green + 1
        }));
    }

    blackLantern() {
        this.setState((prevState) => ({
            black: prevState.black + 1
        }));
    }

    yellowLantern() {
        this.setState((prevState) => ({
            yellow: prevState.yellow + 1
        }));
    }

    purpleLantern() {
        this.setState((prevState) => ({
            purple: prevState.purple + 1
        }));
    }
    render() {
        return (
            <div>
                {/* <div className="lanternCircles">
                    <button onClick={this.whiteLantern.bind(this)}>Add Lantern</button>
                    <button onClick={this.blueLantern.bind(this)}>Add Lantern</button>
                    <button onClick={this.redLantern.bind(this)}>Add Lantern</button>
                    <button onClick={this.greenLantern.bind(this)}>Add Lantern</button>
                    <button onClick={this.blackLantern.bind(this)}>Add Lantern</button>
                    <button onClick={this.yellowLantern.bind(this)}>Add Lantern</button>
                    <button onClick={this.purpleLantern.bind(this)}>Add Lantern</button>
                </div> */}
                <div className="lanternCircles">
                <div className="whiteCircle">
                        <div className="circleText">
                            {this.state.white}
                        </div>
                    </div>
                    <div className="blueCircle">
                        <div className="circleText">
                            {this.state.blue}
                        </div>
                    </div>
                    <div className="redCircle">
                        <div className="circleText">
                            {this.state.blue}
                        </div>
                    </div>
                    <div className="greenCircle">
                        <div className="circleText">
                            {this.state.blue}
                        </div>
                    </div>
                    <div className="blackCircle">
                        <div className="circleText">
                            {this.state.blue}
                        </div>
                    </div>
                    <div className="yellowCircle">
                        <div className="circleText">
                            {this.state.blue}
                        </div>
                    </div>
                    <div className="purpleCircle">
                        <div className="circleText">
                            {this.state.blue}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanternSupply;