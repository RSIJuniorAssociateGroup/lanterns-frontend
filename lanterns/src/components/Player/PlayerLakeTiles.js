import React from '../../../node_modules/react';
import "./PlayerLakeTiles.css";
import LakeTile from "../LakeTileComponent/LakeTile";
import BoardTile from "../Board/BoardTile";

class PlayerLakeTiles extends React.Component {
    render() {
        return (
            <div className="player-hand" >
                <div className="lake-tile-holder">
                    <LakeTile
                        id="lakeTile-10"
                        draggable="true"
                        topColor={2}
                        rightColor={4}
                        bottomColor={5}
                        leftColor={3}
                    >
                    </LakeTile>
                </div>
                <div className="lake-tile-holder">
                    <LakeTile
                        id="lakeTile-11" 
                        draggable="true"
                        topColor={2}
                        rightColor={4}
                        bottomColor={5}
                        leftColor={3}
                    >
                    </LakeTile>
                </div>
                <div className="lake-tile-holder">
                    <LakeTile
                        id="lakeTile-12" 
                        draggable="true"
                        topColor={2}
                        rightColor={4}
                        bottomColor={5}
                        leftColor={3}
                    >
                    </LakeTile>
                </div>
            </div>
        );
    }
}

export default PlayerLakeTiles;