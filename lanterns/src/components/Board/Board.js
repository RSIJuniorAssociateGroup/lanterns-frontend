import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';
import { createBoard, placeFirstTile } from './LegalTilePlaced';

function Board(props) {

  console.log(typeof this.props.firstTileColors[0][0]);

  return (
    <main className="board">
      <BoardTile col="0" row="0" className="boardTile" boardTileLakeTileId="null" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
      >
      </BoardTile>
      <BoardTile col="1" row="0" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
      >
      </BoardTile>
      <BoardTile col="2" row="0" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}>
      </BoardTile>

      <BoardTile col="0" row="1" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}>
      </BoardTile>
      <BoardTile col="1" row="1" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}>
        <LakeTile id="lakeTile-5"
          draggable="false"
          topColor={this.props.firstTileColors[0]}
          rightColor={this.props.firstTileColors[1]}
          bottomColor={this.props.firstTileColors[2]}
          leftColor={this.props.firstTileColors[3]}
          canRotate={false}>
        </LakeTile>
      </BoardTile>
      <BoardTile col="2" row="1" className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand}
      >
      </BoardTile>

      <BoardTile col="0" row="2" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
      >
      </BoardTile>
      <BoardTile col="1" row="2" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
      >
      </BoardTile>
      <BoardTile col="2" row="2" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
      >
      </BoardTile>
    </main>
  )
}

export default Board
