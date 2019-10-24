import React from '../../../node_modules/react';
import "./PlayerLakeTiles.css";
import LakeTile from "../LakeTileComponent/LakeTile";
import BoardTile from "../Board/BoardTile";

class PlayerLakeTiles extends React.Component {
    render() {
        return (
            <div className="player-hand" >
                <div className="lake-tile-holder">
                <BoardTile id="boardTile-1" col="1" row="1" className="boardTile">
                <LakeTile
                    id="lakeTile-1" draggable="true"
                    topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}
                >
                </LakeTile>
            </BoardTile>
                </div>
                <div className="lake-tile-holder">
                <BoardTile id="boardTile-1" col="1" row="1" className="boardTile">
                <LakeTile
                    id="lakeTile-1" draggable="true"
                    topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}
                >
                </LakeTile>
            </BoardTile>
                </div>
                <div className="lake-tile-holder">
                <BoardTile id="boardTile-1" col="1" row="1" className="boardTile">
                <LakeTile
                    id="lakeTile-1" draggable="true"
                    topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}
                >
                </LakeTile>
            </BoardTile>
                </div>
            </div>
        );
    }
}

export default PlayerLakeTiles;