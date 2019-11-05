import React from '../../../node_modules/react';

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
        return (
            <div>
                <p className="playerName">{this.state.playerName}</p>
                <p className="honorScore">Honor Score: {this.state.playerHonorScore}</p>
            </div>
        );
    }
}

export default Player; 