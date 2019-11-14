import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';
import { createBoard, placeFirstTile } from './LegalTilePlaced';

export let LegalBoard = placeFirstTile(createBoard(3), 1, 1);

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.setCurrentPlayer = this.props.setCurrentPlayer.bind(this);
  }

  render() {
    console.log(typeof this.props.firstTileColors[0][0]);
    return (
      <main className="board">
        <BoardTile col="0" row="0" className="boardTile" boardTileLakeTileId="null" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>
        <BoardTile col="1" row="0" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>
        <BoardTile col="2" row="0" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>

        <BoardTile col="0" row="1" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>
        <BoardTile col="1" row="1" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
<<<<<<< HEAD
          <LakeTile id="lakeTile-5" draggable="true" topColor={2}
            rightColor={4}
            bottomColor={5}
            leftColor={3}
            canRotate={false}>
              
=======
          <LakeTile id="laketile-5" draggable="false"
            topColor={this.props.firstTileColors[0]}
            rightColor={this.props.firstTileColors[1]}
            bottomColor={this.props.firstTileColors[2]}
            leftColor={this.props.firstTileColors[3]}>
>>>>>>> e55c6476d07e9cd0034ccda82e3f457b01eebc06
          </LakeTile>
        </BoardTile>
        <BoardTile col="2" row="1" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>

        <BoardTile col="0" row="2" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>
        <BoardTile col="1" row="2" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>
        <BoardTile col="2" row="2" className="boardTile" setCurrentPlayer={this.setCurrentPlayer.bind(this)}>
        </BoardTile>
      </main>
    )
  }
}

export default Board
