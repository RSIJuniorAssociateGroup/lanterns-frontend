import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';

function Board(props) {
  //Note row and column are indeed flipped due to them flipping in logic.
  return (
    <main className="board">
      <BoardTile row={0} col={0} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}>
      </BoardTile>

      <BoardTile row={1} col={0} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}
      >
      </BoardTile>
      <BoardTile row={2} col={0} className="boardTile" boardTileLakeTileId="null" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}
      >
      </BoardTile>


      <BoardTile row={0} col={1} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}>
      </BoardTile>
      <BoardTile row={1} col={1} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}>
        <LakeTile id="lakeTile-5"
          draggable="false"
          topColor={props.firstTileColors[1]}
          rightColor={props.firstTileColors[2]}
          bottomColor={props.firstTileColors[3]}
          leftColor={props.firstTileColors[0]}
          canRotate={false}
        >
        </LakeTile>
      </BoardTile>
      <BoardTile row={2} col={1} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}
      >
      </BoardTile>

      <BoardTile row={0} col={2} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}
      >
      </BoardTile>
      <BoardTile row={1} col={2} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}
      >
      </BoardTile>
      <BoardTile row={2} col={2} className="boardTile" setCurrentPlayer={props.setCurrentPlayer} updatePlayerHand={props.updatePlayerHand} drawLakeTileForActivePlayer={props.drawLakeTileForActivePlayer}
      >
      </BoardTile>

    </main>
  )
}

export default Board
