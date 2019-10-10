import React from 'react';
import logo from './logo.svg';
import './App.css';

//Mock tiles based on actual GameData lake_tiles_list.csv
let tile07 = {
  TileId: 7,
  colorList: ["yellow","white","green","red"]
}
let tile10 = {
  TileId: 10,
  colorList: ["purple","blue","blue","black"]
}
let tile11 = {
  TileId: 11,
  colorList: ["red","blue","white","yellow"]
}
let tile22 = {
  TileId: 22,
  colorList: ["white","black","yellow","black"]
}
let tile30 = {
  TileId: 30,
  colorList: ["yellow","green","white","green"]
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
    );
  }
  getAdjacentTiles () {
    alert("Grabbing adjacent lake tile orientations.");
  }
}

class Board extends React.Component {
  renderBoardTile(i) {
    return <BoardTile value={i} />;
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
        </div>
      </div>
    );
  }
}

export default App;
