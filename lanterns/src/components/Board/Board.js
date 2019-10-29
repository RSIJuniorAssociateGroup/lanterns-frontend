import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';

function Board() {
    return (
        <main className="board">
            <BoardTile id="boardTile-1" col="1" row="1" className="boardTile">
            </BoardTile>
            <BoardTile id="boardTile-2" col="2" row="1" className="boardTile">
            </BoardTile>
            <BoardTile id="boardTile-3" col="3" row="1" className="boardTile">
            </BoardTile>
            <BoardTile id="boardTile-4" col="1" row="2" className="boardTile">
            </BoardTile>
            <BoardTile id="boardTile-5" col="2" row="2" className="boardTile">
                <LakeTile id="lakeTile-5" draggable="true" topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </LakeTile>
            </BoardTile>
            <BoardTile id="boardTile-6" col="3" row="2" className="boardTile">
            </BoardTile>
            <BoardTile id="boardTile-7" col="1" row="3" className="boardTile">
            </BoardTile>
            <BoardTile id="boardTile-8" col="2" row="3" className="boardTile">
            </BoardTile>
            <BoardTile id="boardTile-9" col="3" row="3" className="boardTile">
            </BoardTile>
        </main>
    )
}

export default Board
