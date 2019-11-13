import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';

class Board extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props);
    this.setCurrentPlayer = this.props.setCurrentPlayer.bind(this);
    
  }
  
  render() {
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
          <LakeTile id="lakeTile-5" draggable="true" topColor={2}
            rightColor={4}
            bottomColor={5}
            leftColor={3}
            canRotate={false}>
              
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
