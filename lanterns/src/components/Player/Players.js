import React from 'react';
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
                <p>Honor Score: {this.props.playerHonorScore}</p>
                <div className="player-hand">
                    {this.props.lakeTileHand[0]}
                    {this.props.lakeTileHand[1]}
                    {this.props.lakeTileHand[2]}
                </div>

            </div>
        );
    }
}

export default Player;