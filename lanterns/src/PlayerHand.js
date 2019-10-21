import React from "react"
import "./PlayerHand.css"
import tile from "./tile_images/tile02.png"

class PlayerHand extends React.Component {
    render() {
        return (
            <div className="player-hand" >
                <div className="lake-tile-holder">
                    <img src={tile} alt="Something" />
                </div>
                <div className="lake-tile-holder">
                    <img src={tile} alt="Something" />
                </div>
                <div className="lake-tile-holder">
                    <img src={tile} alt="Something" />
                </div>
            </div>
        );
    }
}

export default PlayerHand