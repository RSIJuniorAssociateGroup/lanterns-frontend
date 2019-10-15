import React from 'react';
import './App.css';

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
    console.log(this.state.lakeTileHand);
    console.log(this.state.playerActive);
    return (
      <div>
        <h1>Player properties: </h1>
        <p>{this.state.playerId}</p>
        <p>{this.state.playerName}</p>
        <p>{this.state.lakeTileHand}</p>
        <p>{this.state.playerHonorScore}</p>
        <p>{this.state.playerActive}</p>
      </div>
    );
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {[0, 1, 2, 3].map((i) => {
          return (
            <Player
              playerId={i}
              playerName="Brandon"
              lakeTileHand={[1, 4, 7, 36]}
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

export default App;

