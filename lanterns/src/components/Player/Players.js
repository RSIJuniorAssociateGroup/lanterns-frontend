import React from 'react';
import "./PlayerLakeTiles.css"

// PLAYER 
const playerSeats = [];

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerId: props.playerId,
            playerName: props.playerName,
            lakeTileHand: props.lakeTileHand,
            playerActive: false,
        }
    }
    
    render() {

        playerSeats.push(this.state.playerId);
        return (
            <div>
                <p className="playerName">{this.state.playerName}</p>
                <p>Honor Score: {this.props.playerHonorScore}</p>
                <div className="player-hand">
                    {this.state.lakeTileHand}
                </div>

            </div>
        );
    }
}

export default Player;