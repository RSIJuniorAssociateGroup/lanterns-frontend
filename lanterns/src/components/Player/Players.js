import React from '../../../node_modules/react';
import PlayerLakeTiles from "./PlayerLakeTiles"

// PLAYER 
const playerSeats = [];

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: this.props.playerId,
            playerName: this.props.playerName,
            lakeTileHand: this.props.lakeTileHand,
            playerHonorScore: this.props.playerHonorScore,
            playerActive: false
        }
    }
    render() {

        playerSeats.push(this.state.playerId);
        console.log("Players are seated top to bottom by id as follows: " + playerSeats);
        return (
            <div>
                <p className="playerName">{this.state.playerName}</p>
                <p className="honorScore">Honor Score: {this.state.playerHonorScore}</p>
                {this.state.lakeTileHand}
            </div>
        );
    }
}

export default Player; 