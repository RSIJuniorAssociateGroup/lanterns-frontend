import React from 'react';
import './App.css';

// ROTATING TILE
function RotateTileRight(props) {
  console.log("Right");
  let item = "";
  let list = props;
  item = list[3];
  list.pop();
  list.unshift(item);
  console.log(list);
  return (
    <div>
      {tile01.colorList}
    </div>
  );
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

// BOARD
// Mock tiles based on actual GameData lake_tiles_list.csv
let tile07 = {
  TileId: 7,
  colorList: [" yellow", " white", " green", " red"]
}
let tile10 = {
  TileId: 10,
  colorList: [" purple", " blue", " blue", " black"]
}
let tile11 = {
  TileId: 11,
  colorList: [" red", " blue", " white", " yellow"]
}
let tile22 = {
  TileId: 22,
  colorList: [" white", " black", " yellow", " black"]
}
let tile30 = {
  TileId: 30,
  colorList: [" yellow", " green", " white", " green"]
}

class BoardTile extends React.Component {
  constructor(props) {
    super(props);
    this.getAdjacentTiles = this.getAdjacentTiles.bind(this);
  }
  render() {
    return (
      <button className="square" onClick={this.getAdjacentTiles}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    )
  }
  getAdjacentTiles() {
    // console.log(this.props.value.TileId);
    alert("Grabbing adjacent lake tile orientations. It's index is " + this.props.boardTileId);
    //top
    if (this.props.boardTileId <= 2) {
      console.log("TOP: No boardTiles above to compare.");
    } else {
      let topAdjacentTileId = this.props.boardTileId - 3;
      console.log("TOP: The boardTile index above this one is " + topAdjacentTileId);
      if (lakeTileArray[topAdjacentTileId]) {
        console.log("TOP: At this board index the lakeTile color list from top, right, bottom, to left is " + lakeTileArray[topAdjacentTileId] + ".");
      } else {
        console.log("TOP: There is no lake tile at board tile index " + topAdjacentTileId);
      }
    }
    //right
    if (this.props.boardTileId == 2 || this.props.boardTileId == 5 || this.props.boardTileId == 8) {
      console.log("RIGHT: No boardTiles to the right to compare.");
    } else {
      let rightAdjacentTileId = this.props.boardTileId + 1;
      console.log("RIGHT: The boardTile index to the right of this one is " + rightAdjacentTileId);
      if (lakeTileArray[rightAdjacentTileId]) {
        console.log("RIGHT: At this board index the lakeTile color list from top, right, bottom, to left is" + lakeTileArray[rightAdjacentTileId] + ".");
      } else {
        console.log("RIGHT: There is no lake tile at board tile index " + rightAdjacentTileId);
      }
    }
    //bottom
    if (this.props.boardTileId == 6 || this.props.boardTileId == 7 || this.props.boardTileId == 8) {
      console.log("BOTTOM: No boardTiles to the bottom to compare.");
    } else {
      let bottomAdjacentTileId = this.props.boardTileId + 3;
      console.log("BOTTOM: The boardTile index under this one is " + bottomAdjacentTileId);
      if (lakeTileArray[bottomAdjacentTileId]) {
        console.log("BOTTOM: At this board index the lakeTile color list from top, right, bottom, to left is" + lakeTileArray[bottomAdjacentTileId] + ".");
      } else {
        console.log("BOTTOM: There is no lake tile at board tile index " + bottomAdjacentTileId);
      }
    }
    //left
    if (this.props.boardTileId == 0 || this.props.boardTileId == 3 || this.props.boardTileId == 6) {
      console.log("LEFT: No boardTiles to the left to compare.");
    } else {
      let leftAdjacentTileId = this.props.boardTileId - 1;
      console.log("LEFT: The boardTile index to the left of this one is " + leftAdjacentTileId);
      if (lakeTileArray[leftAdjacentTileId]) {
        console.log("LEFT: At this board index the lakeTile color list from top, right, bottom, to left is" + lakeTileArray[leftAdjacentTileId] + ".");
      } else {
        console.log("LEFT: There is no lake tile at board tile index " + leftAdjacentTileId);
      }
    }
    //to clear space
    console.log("");
    console.log("");
    console.log("");
  }
}
// Set -1 so first square gets index of 0.
let j = -1;
let lakeTileArray = [];

class Board extends React.Component {
  renderBoardTile(i) {
    j++;
    lakeTileArray.push(i);
    console.log(lakeTileArray);
    return <BoardTile value={i} boardTileId={j} />
  }

  render() {
    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderBoardTile()}
          {this.renderBoardTile(tile11.colorList)}
          {this.renderBoardTile()}
        </div>
        <div className="board-row">
          {this.renderBoardTile(tile22.colorList)}
          {this.renderBoardTile(tile30.colorList)}
          {this.renderBoardTile(tile10.colorList)}
        </div>
        <div className="board-row">
          {this.renderBoardTile()}
          {this.renderBoardTile(tile07.colorList)}
          {this.renderBoardTile()}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* PLAYER INFO */}
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
        {/* Game board */}
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
          </div>
        </div>
        {/* Rotate Lake Tile */}
        <button onClick={() => RotateTileRight(tile01.colorList)}>
          Rotate Sample Tile Right
          </button>
        <div>
          {/* {tile01.colorList} */}
        </div>
        <button onClick={() => RotateTileLeft(tile01.colorList)}>
          Rotate Sample Tile Left
          </button>
      </div>
    );
  }
}

export default App;

