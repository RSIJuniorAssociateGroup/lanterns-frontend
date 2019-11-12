import React from '../../../node_modules/react';
import "./PlayerLakeTiles.css"

// Player seats to be used during resource distribution
const playerSeats = [];

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: props.playerId,
            playerName: props.playerName,
            lakeTileHand: props.lakeTileHand,
            playerHonorScore: props.playerHonorScore,
            playerActive: false,
        }
    }
    render() {

        playerSeats.push(this.state.playerId);
        return (
            <div >
                <p className="playerName">{this.state.playerName}</p>
                <p className="honorScore">Honor Score: {this.state.playerHonorScore}</p>
                <div className="player-hand">
                    {this.state.lakeTileHand}
                </div>

            </div>
        );
    }
}

export default Player; 