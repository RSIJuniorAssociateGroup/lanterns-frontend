import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';
import {createBoard, placeFirstTile} from './LegalTilePlaced';

export let LegalBoard = placeFirstTile(createBoard(3), 1, 1);

class Board extends React.Component {
  render() {
    return (
      <main className="board">
        <BoardTile col="0" row="0" className="boardTile" boardTileLakeTileId="null">
        </BoardTile>
        <BoardTile col="1" row="0" className="boardTile">
        </BoardTile>
        <BoardTile col="2" row="0" className="boardTile">

        </BoardTile>

        <BoardTile col="0" row="1" className="boardTile">
        </BoardTile>
        <BoardTile col="1" row="1" className="boardTile">
          <LakeTile id="lakeTile-5" draggable="true" topColor={2}
            rightColor={4}
            bottomColor={5}
            leftColor={3}>
          </LakeTile>
        </BoardTile>
        <BoardTile col="2" row="1" className="boardTile">
        </BoardTile>

        <BoardTile col="0" row="2" className="boardTile">
        </BoardTile>
        <BoardTile col="1" row="2" className="boardTile">
        </BoardTile>
        <BoardTile col="2" row="2" className="boardTile">
        </BoardTile>
      </main>
    )
  }
}

export default Board
