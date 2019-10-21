import React from "react"
import "./LakeTile.css"

const tileImages = [
    "./tile_images/tile01-0.png",
    "./tile_images/tile01-1.png",
    "./tile_images/tile01-2.png",
    "./tile_images/tile01-3.png",
]

class LakeTile extends React.Component {

    render() {
        return (
            <div className="parentContainer">
                <div className="parent">
                    <div className="topTri">

                    </div>
                    <div className="rightTri">
                    </div>
                    <div className="bottomTri">
                    </div>
                    <div className="leftTri">
                    </div>
                </div>
            </div>

        );
    }
}

export default LakeTile