import React from 'react';
import './LakeTile.css';

// function LakeTile(props) {
class LakeTile extends React.Component {
    constructor(props) {
        super(props)

        this.getLanternImage = this.props.getLanternImage.bind(this);
        // this.state = {
            // colors: props.colors
        // }
    }

    render() {
        // const top = this.getLanternImage(this.state.colors[0])
        // const right = this.getLanternImage(this.state.colors[1])
        // const bottom = this.getLanternImage(this.state.colors[2])
        // const left = this.getLanternImage(this.state.colors[3])
        return (
            // <div>
            //     {props.children}
            //     <div
            //         id={props.id}
            //         className="parentContainer"
            //         draggable={props.draggable}
            //         onDragStart={props.dragStart}
            //         onDragOver={props.dragOver}
            //         colors={props.colors}
            //         rotate={props.canRotate}
            //     >
            //         <div className="parent"
            //             onClick={props.rotate}>
            //             <div className="topTri" style={{ backgroundImage: "url(" + props.getLanternImage(this.state.colors[0]) + ")" }}>
            //             </div>
            //             <div className="rightTri" style={{ backgroundImage: "url(" + props.getLanternImage(this.state.colors[1]) + ")" }}>
            //             </div>
            //             <div className="leftTri" style={{ backgroundImage: "url(" + props.getLanternImage(this.state.colors[2]) + ")" }}>
            //             </div>
            //             <div className="bottomTri" style={{ backgroundImage: "url(" + props.getLanternImage(this.state.colors[3]) + ")" }}>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div>
                {this.props.children}
                <div
                    id={this.props.id}
                    className="parentContainer"
                    draggable={this.props.draggable}
                    onDragStart={this.props.dragStart}
                    onDragOver={this.props.dragOver}
                    colors={this.props.colors}
                    rotate={this.props.canRotate}
                >
                    <div className="parent"
                        onClick={this.props.rotate}>
                        <div className="topTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[0]) + ")" }}>
                        </div>
                        <div className="rightTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[1]) + ")" }}>
                        </div>
                        <div className="leftTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[2]) + ")" }}>
                        </div>
                        <div className="bottomTri" style={{ backgroundImage: "url(" + this.getLanternImage(this.state.colors[3]) + ")" }}>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default LakeTile;