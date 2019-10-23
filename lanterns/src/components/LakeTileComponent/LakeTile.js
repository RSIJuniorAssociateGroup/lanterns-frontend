import React from "react"
import "./LakeTile.css"
import blackTile from "./blackTile.jpg"
import blueTile from "./blueTile.jpg"
import greenTile from "./greenTile.jpg"
import orangeTile from "./orangeTile.jpg"
import purpleTile from "./purpleTile.jpg"
import redTile from "./redTile.jpg"
import whiteTile from "./whiteTile.jpg"

class LakeTile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rotation: 45,
            colors: [props.topColor, props.rightColor, props.bottomColor, props.leftColor]
        }

        this.rotate = this.rotate.bind(this)
    }

    rotate() {
        let temp = this.state.colors
        let tempColor = temp.pop()
        temp.unshift(tempColor);

        let newColors = temp
        this.setState({
            colors: newColors
        })
    }

    getLanternImage(num) {
        let image = null;
        switch (num) {
            case 1:
                image = blackTile
                break
            case 2:
                image = blueTile
                break
            case 3:
                image = greenTile
                break
            case 4:
                image = orangeTile
                break
            case 5:
                image = purpleTile
                break
            case 6:
                image = redTile
                break
            case 7:
                image = whiteTile
                break;
        }

        return image
    }

    render() {
        const top = this.getLanternImage(this.state.colors[0])
        const right = this.getLanternImage(this.state.colors[1])
        const bottom = this.getLanternImage(this.state.colors[2])
        const left = this.getLanternImage(this.state.colors[3])

        return (
            <div className="parentContainer" >
                <div className="parent"
                    onClick={this.rotate}>
                    <div className="topTri">
                        <img src={top} alt="top lanterns"/>
                    </div>
                    <div className="rightTri">
                        <img src={right} alt="right lanterns"/>
                    </div>
                    <div className="leftTri">
                        <img src={left} alt="left lanterns"/>
                    </div>
                    <div className="bottomTri">
                        <img src={bottom} alt="bottom lanterns"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default LakeTile