import React from 'react';
import './App.css';

<<<<<<< HEAD
function RotateTileRight(props) {
  console.log("Right");
  let item = "";
  let list = props;
  item = list[list.length -1];
  list.pop();
  list.unshift(item);
  console.log(list);
  return list;
}

function RotateTileLeft(props) {
  console.log("Left");
  let item = "";
  let list = props;
  item = list[0];
  list.shift();
  list.push(item);
  console.log(list);
  return list;
}

//Test data to be passed for Rotating the Tile
let tile01 = {
  id: 1,
  colorList: ["yellow ", "gold ", "indigo ", "turqouise "],
}

class App extends React.Component {
  render() 
  {
    return (
      <div className="App">
        <div className="App-body">
          <button onClick = {() => RotateTileRight(tile01.colorList)}>
            Rotate Sample Tile Right
          </button>
          <div>
            {/* {tile01.colorList} */}
          </div>
          <button onClick = {() => RotateTileLeft(tile01.colorList)}>
            Rotate Sample Tile Left
          </button>
        </div>
      </div>
    );
  }
=======
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
    console.log(this.state.playerId);
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
>>>>>>> 9e703075303f364723bf1e7aad97f03bd63da2e1
}

export default App;

