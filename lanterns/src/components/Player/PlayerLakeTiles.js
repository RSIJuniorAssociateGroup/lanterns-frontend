import React from '../../../node_modules/react';
import "./PlayerLakeTiles.css";
import LakeTile from "../LakeTileComponent/LakeTile";
import BoardTile from "../Board/BoardTile";

class PlayerLakeTiles extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            playerHand: this.makeHand()
        }

    }

    makeHand() {
        let tempPlayerHand = [
            <LakeTile
                id="lakeTile-10"
                draggable="true"
                topColor={2}
                rightColor={4}
                bottomColor={5}
                leftColor={3}
            />,
            <LakeTile
                id="lakeTile-11"
                draggable="true"
                topColor={3}
                rightColor={4}
                bottomColor={1}
                leftColor={2}
            />,
            <LakeTile
                id="lakeTile-12"
                draggable="true"
                topColor={1}
                rightColor={6}
                bottomColor={7}
                leftColor={5}
            />
        ]

        return tempPlayerHand
    }

    render() {
        return (
            <div className="player-hand" >
                {this.state.playerHand.map(tile => <div className="lake-tile-holder">{tile}</div>)}
            </div>
        );
    }
}

export default PlayerLakeTiles;