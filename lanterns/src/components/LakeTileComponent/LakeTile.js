import React from 'react';
import './LakeTile.css';
import { getLanternImage } from '../LakeTileComponent/lakeTiles';

const LakeTile = (props) => {

    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('lakeTile_id', e.target.id);
    }

    const dragOver = (e) => {
        e.stopPropagation();
    }
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
                canrotate={props.canRotate}
                // rotate={props.rotate}
                parenthand={props.location}

            >
                <div className="parent"
                    onClick={() => props.canRotate ? props.rotate(props.canRotate, props.id, props.location) : alert("You cannot rotate this tile")}
                >
                    <div className="topTri" style={{backgroundImage: "url(" + getLanternImage(props.leftColor) + ")"}}>
                    </div>
                    <div className="rightTri" style={{ backgroundImage: "url(" + getLanternImage(props.topColor) + ")" }}>
                    </div>
                    <div className="bottomTri" style={{ backgroundImage: "url(" + getLanternImage(props.bottomColor) + ")" }}>
                    </div>
                    <div className="leftTri" style={{ backgroundImage: "url(" + getLanternImage(props.rightColor) + ")" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LakeTile;