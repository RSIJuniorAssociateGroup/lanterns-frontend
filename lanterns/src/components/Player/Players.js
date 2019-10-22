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
        console.log("This player's id is " + this.state.playerId);
        console.log("This player's name is " + this.state.playerName);
        console.log("This player's lake tile hand by LakeTile id is " + this.state.lakeTileHand);
        console.log("This Player's honor score total is" + this.state.playerHonorScore);
        console.log("This player's active status is " + this.state.playerActive);

        playerSeats.push(this.state.playerId);
        console.log("Players are seated top to bottom by id as follows: " + playerSeats);
        return (
            <div>
                <p>{this.state.playerName}</p>
            </div>
        );
    }
}

export default Player; 