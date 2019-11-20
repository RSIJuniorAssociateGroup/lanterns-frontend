import React from 'react';
import '../../App.css';

class LanternSupply extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="lanternCircles">
                <div className="blackCircle">

                        <div className="circleText">
                            {this.props.gameSupply[0]}
                        </div>
                    </div>
                    <div className="blueCircle">
                        <div className="circleText">
                            {this.props.gameSupply[1]}
                        </div>
                    </div>
                    <div className="greenCircle">

                        <div className="circleText">
                            {this.props.gameSupply[2]}
                        </div>
                    </div>
                    <div className="yellowCircle">

                        <div className="circleText">
                            {this.props.gameSupply[3]}
                        </div>
                    </div>
                    <div className="purpleCircle">

                        <div className="circleText">
                            {this.props.gameSupply[4]}
                        </div>
                    </div>
                    <div className="redCircle">

                        <div className="circleText">
                            {this.props.gameSupply[5]}
                        </div>
                    </div>
                    <div className="whiteCircle">

                        <div className="circleText">
                            {this.props.gameSupply[6]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanternSupply;