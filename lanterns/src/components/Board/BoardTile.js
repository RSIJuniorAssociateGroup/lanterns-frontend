import React from 'react';
import { LegalBoard } from './Board';
import { placeTile } from './LegalTilePlaced';
import { activePlayerIndex } from "../../App";
import { endTurn } from "../../GameLogic";

class BoardTile extends React.Component {
    constructor(props) {
        super(props)

        this.setCurrentPlayer = this.props.setCurrentPlayer.bind(this);

        this.state = {
            canDrop: true,
            boardTileLakeTileId: this.props.tileid,
            col: this.props.col,
            row: this.props.row,
        }
    }

    thisState

    drop = e => {
        if (placeTile(LegalBoard, this.props.col, this.props.row) !== false) {

                endTurn(activePlayerIndex);
                this.setCurrentPlayer(activePlayerIndex);
                
                e.preventDefault();
                // Transfer the id between this event, get the element by id
                // and append it to the boardTile
                const lakeTile_id = e.dataTransfer.getData('lakeTile_id');

                const lakeTile = document.getElementById(lakeTile_id);
                lakeTile.style.display = 'block';

                e.target.appendChild(lakeTile);
        }
    }

    // Allows you to continue with function of dropping.
    dragOver = e => {
        e.preventDefault();
    }

    render() {
        if (this.state.canDrop === true) {
            return (
                <div
                    id={this.props.id}
                    col={this.props.col}
                    row={this.props.row}
                    tileid={this.props.tileid}
                    // called when we drop over the boardTile
                    className={this.props.className}
                    onDrop={this.drop}
                    // called when call one of lakeTiles over the baord. 
                    onDragOver={this.dragOver}
                >
                    {this.props.children}
                </div>
            );
        } else {
            return (
                <div
                    id={this.props.id}
                    col={this.props.col}
                    row={this.props.row}
                    tileid={this.props.tileid}
                    className={this.props.className}

                >
                    {this.props.children}
                </div>
            )

        }
    }
}

export default BoardTile;

