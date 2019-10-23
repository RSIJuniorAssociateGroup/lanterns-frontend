import React from "react"
import "./LakeTileSupply.css"
import LakeTile from "../LakeTileComponent/LakeTile.js"

class LakeTileSupply extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tiles: [
                <LakeTile
                    topColor={1}
                    rightColor={2}
                    bottomColor={3}
                    leftColor={4} />,

                <LakeTile
                    topColor={2}
                    rightColor={2}
                    bottomColor={2}
                    leftColor={2} />,

                <LakeTile
                    topColor={3}
                    rightColor={3}
                    bottomColor={3}
                    leftColor={3} />,

                <LakeTile
                    topColor={4}
                    rightColor={4}
                    bottomColor={4}
                    leftColor={4} />,

                <LakeTile
                    topColor={5}
                    rightColor={5}
                    bottomColor={5}
                    leftColor={5} />,

                <LakeTile
                    topColor={6}
                    rightColor={6}
                    bottomColor={6}
                    leftColor={6} />,

                <LakeTile
                    topColor={7}
                    rightColor={7}
                    bottomColor={7}
                    leftColor={7} />,
            ]
        }

        this.shuffleLakeTiles()

    }

    shuffleLakeTiles() {
        let tempTiles = this.state.tiles

        let currentIndex = tempTiles.length, temporaryValue, randomIndex

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            temporaryValue = tempTiles[currentIndex]
            tempTiles[currentIndex] = tempTiles[randomIndex]
            tempTiles[randomIndex] = temporaryValue
        }

        this.state.tiles = tempTiles
    }

    render() {
        return (
            <div>
                {this.state.tiles[0]}
            </div>
        )
    }
}

export default LakeTileSupply