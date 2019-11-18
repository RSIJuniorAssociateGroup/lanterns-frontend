import React from 'react';
import './LakeTile.css';
import { getLanternImage } from '../LakeTileComponent/lakeTiles';

const LakeTile = (props) => {

    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('lakeTile_id', e.target.id);
        // e.dataTransfer.effectAllowed='move';
    }

    const dragOver = (e) => {
        e.stopPropagation();
        this.canRotate = false;
        // e.dataTransfer.dropEffect='move';
    }
    // class LakeTile extends React.Component {
    //     constructor(props) {
    //         super(props)

    // this.getLanternImage = this.props.getLanternImage.bind(this);
    // this.state = {
    // colors: props.colors
    // }
    //    this.rotate = this.rotate.bind(this)
    //    this.state = {
    //        colors: [props.topColor, props.rightColor, props.bottomColor, props.leftColor],
    //         canRotate: props.CanRotate
    //    }
    // }

    //    rotate() {
    //        if (this.props.canRotate === true) {
    //        let temp = this.state.colors
    //        let tempColor = temp.pop()
    //        temp.unshift(tempColor);
    //        let newColors = temp
    //        this.setState({
    //            colors: newColors
    //        })
    //     } else {
    //         alert("You cannot rotate a placed tile.")
    //     }
    // }

    // render() {
    console.log(props.topColor);
    return (
        <div>
            {props.children}
            <div
                id={props.id}
                className="parentContainer"
                draggable={props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
                colors={props.colors}
                canRotate={props.canRotate}
                rotate={props.rotate}
            >
                <div className="parent"
                    onClick={() => props.rotate(props.canRotate, props.id)}
                >
                    <div className="topTri" style={{backgroundImage: "url(" + getLanternImage(props.topColor) + ")"}}>
                    </div>
                    <div className="rightTri" style={{ backgroundImage: "url(" + getLanternImage(props.rightColor) + ")" }}>
                    </div>
                    <div className="leftTri" style={{ backgroundImage: "url(" + getLanternImage(props.bottomColor) + ")" }}>
                    </div>
                    <div className="bottomTri" style={{ backgroundImage: "url(" + getLanternImage(props.leftColor) + ")" }}>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     {this.props.children}
        //     <div
        //         id={this.props.id}
        //         className="parentContainer"
        //         draggable={this.props.draggable}
        //         onDragStart={this.props.dragStart}
        //         onDragOver={this.props.dragOver}
        //         colors={this.props.colors}
        //         rotate={this.props.canRotate}
        //     >
        //         <div className="parent"
        //             onClick={this.props.rotate}>
        //             <div className="topTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[0]) + ")" }}>
        //             </div>
        //             <div className="rightTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[1]) + ")" }}>
        //             </div>
        //             <div className="leftTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[2]) + ")" }}>
        //             </div>
        //             <div className="bottomTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[3]) + ")" }}>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
// }

export default LakeTile;