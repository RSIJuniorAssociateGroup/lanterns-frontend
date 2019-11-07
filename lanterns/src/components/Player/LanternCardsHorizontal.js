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
                            {this.props.lanternCards[0]}
                        </div>
                    </div>
                    <div className="blueCircle">
                        <div className="circleText">
                            {this.props.lanternCards[1]}
                        </div>
                    </div>
                    <div className="redCircle">
                        <div className="circleText">
                            {this.props.lanternCards[2]}
                        </div>
                    </div>
                    <div className="greenCircle">
                        <div className="circleText">
                            {this.props.lanternCards[3]}
                        </div>
                    </div>
                    <div className="blackCircle">
                        <div className="circleText">
                            {this.props.lanternCards[4]}
                        </div>
                    </div>
                    <div className="yellowCircle">
                        <div className="circleText">
                            {this.props.lanternCards[5]}
                        </div>
                    </div>
                    <div className="purpleCircle">
                        <div className="circleText">
                            {this.props.lanternCards[6]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanternCardsHorizontal;