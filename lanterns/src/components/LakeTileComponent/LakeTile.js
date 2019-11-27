import React from 'react';
import './LakeTile.css';
import { getLanternImage } from '../LakeTileComponent/lakeTiles';

const LakeTile = (props) => {

    const dragStart = (e) => {
        const target = e.target;
        var dragImgEl = document.createElement('span');
        e.dataTransfer.setData('lakeTile_id', e.target.id);
        dragImgEl.setAttribute('style',
            'position: absolute; display: block; top: 0; left: 0; width: 0; height: 0;');
        e.dataTransfer.setDragImage(dragImgEl, 0, 0);
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
                    <div className="topTri" style={{ backgroundImage: "url(" + getLanternImage(props.leftColor) + ")" }}>
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