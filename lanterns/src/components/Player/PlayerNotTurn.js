import React from 'react';
import "./PlayerLakeTiles.css"

// PLAYER 
const playerSeats = [];

class PlayerNotTurn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: props.playerId,
            playerName: props.playerName,
            lakeTileHand: props.lakeTileHand,
            playerHonorScore: props.playerHonorScore,
            playerActive: false
        }
    }
    render() {

        playerSeats.push(this.state.playerId);
        return (
            <div>
                <p className="playerName">{this.state.playerName}</p>
                <p className="honorScore">Honor Score: {this.state.playerHonorScore}</p>
                <div className="player-hand">
                </div>

            </div>
        );
    }
}

export default PlayerNotTurn; 