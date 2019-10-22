import React from '../../../node_modules/react';
import "./PlayerHand.css"
import LakeTile from "../LakeTileComponent/LakeTile"

class PlayerHand extends React.Component {
    render() {
        return (
            <div className="player-hand" >
                <div className="lake-tile-holder">
                    <LakeTile
                        topColor={2}
                        rightColor={4}
                        bottomColor={5}
                        leftColor={3} />
                </div>
                <div className="lake-tile-holder">
                    <LakeTile
                        topColor={6}
                        rightColor={7}
                        bottomColor={5}
                        leftColor={1} />
                </div>
                <div className="lake-tile-holder">
                    <LakeTile
                        topColor={2}
                        rightColor={4}
                        bottomColor={1}
                        leftColor={2} />
                </div>
            </div>
        );
    }
}

export default PlayerHand;