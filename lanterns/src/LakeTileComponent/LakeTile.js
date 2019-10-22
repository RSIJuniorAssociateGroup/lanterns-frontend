import React from "react"
import "./LakeTile.css"
import blackTile from "./blackTile.jpg"
import blueTile from "./blueTile.jpg"
import greenTile from "./greenTile.jpg"
import orangeTile from "./orangeTile.jpg"
import purpleTile from "./purpleTile.jpg"
import redTile from "./redTile.jpg"
import whiteTile from "./whiteTile.jpg"

const tileImages = [
    "./blackTile.jpg",
    "./blueTile.jpg",
    "./greenTile.jpg",
    "./orangeTile.jpg",
    "./purpleTile.jpg",
    "./redTile.jpg",
    "./whiteTile.jpg",
]

class LakeTile extends React.Component {

    render() {
        return (
            <div className="parentContainer">
                <div className="parent">
                    <div className="topTri">
                        <img src={blackTile} />
                    </div>
                    <div className="rightTri">
                        <img src={blueTile} />
                    </div>
                    <div className="bottomTri">
                        <img src={redTile} />
                    </div>
                    <div className="leftTri">
                        <img src={purpleTile} />
                    </div>
                </div>
            </div>

        );
    }
}

export default LakeTile