import React from '../../../node_modules/react';
import '../../App.css';

class LanternCardsHorizontal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            white: props.lanternCards[0],
            blue: props.lanternCards[1],
            red: props.lanternCards[2],
            green: props.lanternCards[3],
            black: props.lanternCards[4],
            orange: props.lanternCards[5],
            purple: props.lanternCards[6]
        }
    }

    render() {
        return (
            <div>
                <div className="lanternCirclesHorizontal">
                    <div className="whiteCircleHorizontal">
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
                            {this.state.orange}
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

export default LanternCardsHorizontal;