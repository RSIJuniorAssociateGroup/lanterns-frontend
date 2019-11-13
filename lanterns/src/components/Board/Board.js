import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';

function Board (props){
    // this.props.updatePlayerHand();
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
        updatePlayerHand={props.updatePlayerHand}
        >

        </BoardTile>

        <BoardTile col="0" row="1" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
        >
        </BoardTile>
        <BoardTile col="1" row="1" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
        >
          <LakeTile id="lakeTile-5" draggable="true" canRotate={false}
            topColor={2}
            rightColor={4}
            bottomColor={5}
            leftColor={3}
            canRotate={false}>
              
          </LakeTile>
        </BoardTile>
        <BoardTile col="2" row="1" className="boardTile" setCurrentPlayer={props.setCurrentPlayer}
        updatePlayerHand={props.updatePlayerHand}
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
