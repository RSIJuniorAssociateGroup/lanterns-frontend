import React from 'react';
import './LakeTile.css';
import blackTile from "../../pictures/blackTile.jpg";
import blueTile from "../../pictures/blueTile.jpg";
import greenTile from "../../pictures/greenTile.jpg";
import orangeTile from "../../pictures/orangeTile.jpg";
import purpleTile from "../../pictures/purpleTile.jpg";
import redTile from "../../pictures/redTile.jpg";
import whiteTile from "../../pictures/whiteTile.jpg";

class LakeTile extends React.Component {
    constructor(props) {
        super(props)

        this.rotate = this.rotate.bind(this)

        this.state = {
            colors: [props.topColor, props.rightColor, props.bottomColor, props.leftColor],
            canRotate: props.canRotate
        }
    }

    rotate() {
        if (this.state.canRotate === true) {
            let temp = this.state.colors
            let tempColor = temp.pop()
            temp.unshift(tempColor);
            let newColors = temp
            this.setState({
                colors: newColors
            })
        } else {
            alert("You cannot rotate a placed lake tile.");
        }
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

    dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('lakeTile_id', e.target.id);
        // e.dataTransfer.effectAllowed='move';
    }

    dragOver = e => {
        e.stopPropagation();
        this.setState ({
            canRotate: false
        })
        // e.dataTransfer.dropEffect='move';
    }

    render() {
        const top = this.getLanternImage(this.state.colors[0])
        const right = this.getLanternImage(this.state.colors[1])
        const bottom = this.getLanternImage(this.state.colors[2])
        const left = this.getLanternImage(this.state.colors[3])
        return (
            <div
            > {this.props.children}
                <div
                    id={this.props.id}
                    className="parentContainer"
                    draggable={this.props.draggable}
                    onDragStart={this.dragStart}
                    onDragOver={this.dragOver}
                    colors={this.state.colors}
                    rotate={this.state.canRotate}
                >
                    <div className="parent"
                        onClick={this.rotate}>
                        <div className="topTri" style={{ backgroundImage: "url(" + top + ")" }}>
                        </div>
                        <div className="rightTri" style={{ backgroundImage: "url(" + right + ")" }}>
                        </div>
                        <div className="leftTri" style={{ backgroundImage: "url(" + left + ")" }}>
                        </div>
                        <div className="bottomTri" style={{ backgroundImage: "url(" + bottom + ")" }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LakeTile