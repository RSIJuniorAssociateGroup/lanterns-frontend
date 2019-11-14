import React from 'react';
import './LakeTile.css';

function LakeTile(props) {
    // class LakeTile extends React.Component {
    // constructor(props) {
    //     super(props)

    //     // this.getLanternImage = this.props.getLanternImage.bind(this);
    //     this.state = {
    //         // colors: props.colors
    //     }
    // }

    // render() {
    // const top = this.getLanternImage(this.state.colors[0])
    // const right = this.getLanternImage(this.state.colors[1])
    // const bottom = this.getLanternImage(this.state.colors[2])
    // const left = this.getLanternImage(this.state.colors[3])
    return (
        <div>
            {props.children}
            <div
                id={props.id}
                className="parentContainer"
                draggable={props.draggable}
                onDragStart={props.dragStart}
                onDragOver={props.dragOver}
                colors={props.colors}
                rotate={props.canRotate}
            >
                <div className="parent"
                    onClick={props.rotate}>
                    <div className="topTri" style={{ backgroundImage: "url(" + props.top + ")" }}>
                    </div>
                    <div className="rightTri" style={{ backgroundImage: "url(" + props.right + ")" }}>
                    </div>
                    <div className="leftTri" style={{ backgroundImage: "url(" + props.left + ")" }}>
                    </div>
                    <div className="bottomTri" style={{ backgroundImage: "url(" + props.bottom + ")" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
// }

export default LakeTile