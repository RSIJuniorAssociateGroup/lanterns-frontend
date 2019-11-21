import React from "react"
import "./LakeTileSupply.css"
import LakeTile from "../LakeTileComponent/LakeTile.js"
import LakeTileSupplyPile from "./lakeTileStack.png"

class LakeTileSupply extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tiles: props.supply
        }

        

    }

    // shuffleLakeTiles() {
    //     let tempTiles = this.state.tiles

    //     let currentIndex = tempTiles.length, temporaryValue, randomIndex

    //     while (0 !== currentIndex) {
    //         randomIndex = Math.floor(Math.random() * currentIndex)
    //         currentIndex -= 1

    //         temporaryValue = tempTiles[currentIndex]
    //         tempTiles[currentIndex] = tempTiles[randomIndex]
    //         tempTiles[randomIndex] = temporaryValue
    //     }

    //     this.setState({
    //         tile: tempTiles
    //     })
    // }

    render() {
        return (
            <div  >
                <div className="supplyContainer">
                    <div className="supplyDetails">
                        <img width={75} src={LakeTileSupplyPile} />

                        <h2 className="pileCounterStyle">
                            {this.state.tiles.length}
                        </h2>

                    </div>
                </div>
            </div>
        )
    }
}

export default LakeTileSupply