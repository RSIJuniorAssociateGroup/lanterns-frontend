import React from 'react';
import './App.css';

const playerSeats = []

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
    console.log("This player's lake tile hand by LakeTile id is " + this.state.lakeTileHand);
    console.log("This Player's honor score total is" + this.state.playerHonorScore);
    console.log("This player's active status is " + this.state.playerActive);

    playerSeats.push(this.state.playerId);
    console.log("Players are seated top to bottom by id as follows: " + playerSeats);
    return (
      <div>
        <h1>Player properties: </h1>
        <p>{this.state.playerId}</p>
        <p>{this.state.playerName}</p>
      </div>
    );
  }

}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {[0, 1, 2, 3].map((i) => {
            return (
              <Player
                playerId={i}
                playerName="Brandon"
                lakeTileHand={[4, 7, 36]}
                playerHonorScore={0}
                playerActive="false"
              />
            );
          }
          )
          }
        </header>
      </div>
    );
  }
}

export default App;

