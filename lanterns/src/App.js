import React from 'react';
import logo from './logo.svg';
import './App.css';

//Mock tiles based on actual GameData lake_tiles_list.csv
let tile07 = {
  TileId: 7,
  colorList: ["yellow", "white", "green", "red"]
}
let tile10 = {
  TileId: 10,
  colorList: ["purple", "blue", "blue", "black"]
}
let tile11 = {
  TileId: 11,
  colorList: ["red", "blue", "white", "yellow"]
}
let tile22 = {
  TileId: 22,
  colorList: ["white", "black", "yellow", "black"]
}
let tile30 = {
  TileId: 30,
  colorList: ["yellow", "green", "white", "green"]
}

class BoardTile extends React.Component {
  constructor(props) {
    super(props);
    this.getAdjacentTiles = this.getAdjacentTiles.bind(this);
  }
  render() {
    return (
      <button className="square" onClick={this.getAdjacentTiles}>
        {this.props.value}
      </button>
    )
  }
  getAdjacentTiles() {
    alert("Grabbing adjacent lake tile orientations. It's index is " + this.props.boardTileId);
    //top
    if (this.props.boardTileId<=2) {
      alert("There are no boardTiles above to compare.")
    } else {
      let topAdjacentTileId = this.props.boardTileId-3;
      console.log("The boardTile index above this one is " + topAdjacentTileId)
      if (lakeTileArray[topAdjacentTileId]) {
        console.log("The lakeTile at board index " + topAdjacentTileId + " is " + lakeTileArray[topAdjacentTileId])
      } else {
        console.log("There is no lake tile at board tile index " + topAdjacentTileId)
      }
    }
    //left
    if (this.props.boardTileId == 0 || this.props.boardTileId == 3 || this.props.boardTileId == 6) {
      alert("There are no boardTiles to the left to compare.")
    } else {
      let leftAdjacentTileId = this.props.boardTileId-1;
      console.log("The boardTile index to the left of this one is " + leftAdjacentTileId)
      if (lakeTileArray[leftAdjacentTileId]) {
        console.log("The lakeTile at board index " + leftAdjacentTileId + " is " + leftAdjacentTileId)
      } else {
        console.log("There is no lake tile at board tile index " + leftAdjacentTileId)
      }


    }
  }
}
// Set -1 so first square gets index of 0.
let j=-1;
let lakeTileArray = [];
class Board extends React.Component {
  renderBoardTile(i) {
    j++;
    lakeTileArray.push(i);
    console.log(lakeTileArray);
    return <BoardTile value={i} boardTileId={j}/>
  }


  render() {
    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderBoardTile()}
          {this.renderBoardTile(tile11.TileId)}
          {this.renderBoardTile()}
        </div>
        <div className="board-row">
          {this.renderBoardTile(tile22.TileId)}
          {this.renderBoardTile(tile30.TileId)}
          {this.renderBoardTile(tile10.TileId)}
        </div>
        <div className="board-row">
          {this.renderBoardTile()}
          {this.renderBoardTile(tile07.TileId)}
          {this.renderBoardTile()}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
          {/* <ForLoopPract /> */}
        </div>
      </div>
    );
  }
}

export default App;
