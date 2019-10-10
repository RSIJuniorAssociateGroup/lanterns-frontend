import React from 'react';
import './App.css';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: 0,
      playerName: this.props,
      lakeTileHand: [],
      playerHonorScore: 0,
      playerActive: false
    }
  }
    render() {
      console.log(this.props.playerId);
      return (
      <h1>Player properties: </h1>
      // <h2>{this.props.playerId}</h2>,
      // <h2>{this.props.playerName}</h2>,
      // <h2>{this.props.children}</h2>,
      // <h2>{this.props.playerHonorScore}</h2>,
      // <h2>{this.props.playerActive}</h2>
      );
    }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player 
        playerId={0} 
        playerName="Brandon" 
        lakeTileHand={[1, 4, 7, 36]} 
        // playerHonorScore={0} 
        // playerActive={false}
        />
      </header>
    </div>
  );
}

/*
class App extends React.Component {
  constructor(props){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}
*/
export default App;

