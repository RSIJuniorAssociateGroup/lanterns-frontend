import React from 'react';
import myFunction from './logic';

class BoardTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            canDrop: true,
            boardTileLakeTileId: this.props.tileid
        }
    }

    // onTextChange: function(val) {
        
    // }

    drop = e => {
        e.preventDefault();
        // Transfer the id between this event, get the element by id
        // and append it to the boardTile
        const lakeTile_id = e.dataTransfer.getData('lakeTile_id');

        const lakeTile = document.getElementById(lakeTile_id);
        lakeTile.style.display = 'block';

        e.target.appendChild(lakeTile);

        this.setState({ canDrop : this.state.canDrop = false});

        // this.setState({ boardTileLakeTileId: this.state.boardTileLakeTileId = this.props.tileid});
        // console.log(lakeTile_id);
        // console.log(this.state.canDrop);
        // myFunction(this.props.col);
        // myFunction(this.props.row);
        // myFunction(this.props.className);

        // myFunction(this.lakeTile_id);
        // myFunction(this.props.boardTileLakeTileId);

    }

    // Allows you to continue with function of dropping.
    dragOver = e => {
        e.preventDefault();
    }

    render() {
        if (this.state.canDrop === true) {
            // myFunction()
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
                // boardtilelaketileid={this.setState(this.props.tileid)}
            >
                {this.props.children}
            </div>
        );
        } else {
            return(
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

