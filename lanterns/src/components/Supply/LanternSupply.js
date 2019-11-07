import React from 'react';
import '../../App.css';

class LanternSupply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            white: props.gameSupply[0],
            blue: props.gameSupply[1],
            red: props.gameSupply[2],
            green: props.gameSupply[3],
            black: props.gameSupply[4],
            yellow: props.gameSupply[5],
            purple: props.gameSupply[6],
        }
    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div>
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
                        <div className="circlsText">
                            {this.state.red}
                        </div>
                    </div>
                    <div className="greenCircle">
                        <div className="circleText">
                            {this.state.green}
                        </div>
                    </div>
                    <div className="blackCircle">
                        <div className="circleText">
                            {this.state.black}
                        </div>
                    </div>
                    <div className="yellowCircle">
                        <div className="circleText">
                            {this.state.yellow}
                        </div>
                    </div>
                    <div className="purpleCircle">
                        <div className="circleText">
                            {this.state.purple}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanternSupply;