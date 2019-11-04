import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';
import LegalBoard from './legalTilePlacement';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        legalBoardPlacement: new LegalBoard(),
        legalBoard: this.legalBoardPlacement.createBoard(3)
    }
}

render() {
  console.log("Working");
  let legalBoardPlacement = new LegalBoard();
  let legalBoard = this.setState({legalBoardPlacement}) 
  console.log(legalBoard);


  // console.log(boardy);
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

// export const boardy = legalBoardPlacement.placeFirstTile(this.legalBoard, 1, 1);

export default Board
