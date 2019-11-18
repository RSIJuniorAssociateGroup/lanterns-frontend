import React from 'react';
import './LakeTile.css';
import {getLanternImage, rotate} from '../LakeTileComponent/lakeTiles';


function LakeTile(props) {

const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('lakeTile_id', e.target.id);
        // e.dataTransfer.effectAllowed='move';
    }
    
const dragOver = (e) => {
        e.stopPropagation();
        props.canRotate = false;
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

    const rotateTile = () => {
        console.log("rotateTile()")
        let newColors1 = props.rotate([props.topColor, props.rightColor, props.bottomColor, props.leftColor], props.canRotate);
        console.log(newColors1);
        props.topColor = newColors1[0];
    }



    // render() {
        // const top = this.getLanternImage(this.state.colors[0])
        // const right = this.getLanternImage(this.state.colors[1])
        // const bottom = this.getLanternImage(this.state.colors[2])
        // const left = this.getLanternImage(this.state.colors[3])
        console.log(getLanternImage(props.bottomColor));
        return (
            <div>
                {props.children}
                <div
                    id={props.id}
                    className="parentContainer"
                    draggable={props.draggable}
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    topColor={props.topColor}
                    rightColor={props.rightColor}
                    bottomColor={props.bottomColor}
                    leftColor={props.leftColor}
                    canrotate={props.canRotate}
                    // getLanternImage={props.getLanternImage}
                >
                    <div className="parent"
                     onClick={ () => rotateTile()}
                        // onClick={ () => rotate([props.topColor, props.rightColor, props.bottomColor, props.leftColor], props.canRotate)}
                        >
                        <div className="topTri" style={{ backgroundImage: "url(" 
                        + getLanternImage(
                            props.topColor) + ")" }}>
                        </div>
                        <div className="rightTri" style={{ backgroundImage: "url(" + getLanternImage(props.rightColor) + ")" }}>
                        </div>
                        <div className="leftTri" style={{ backgroundImage: "url(" + getLanternImage(props.leftColor) + ")" }}>
                        </div>
                        <div className="bottomTri" style={{ backgroundImage: "url(" + getLanternImage(props.bottomColor) + ")" }}>
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