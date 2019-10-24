import React from 'react'

class BoardTile extends React.Component {
    drop = e => {
        e.preventDefault();
        // Transfer the id between this event, get the element by id
        // and append it to the boardTile
        const lakeTile_id = e.dataTransfer.getData('lakeTile_id');

        const lakeTile = document.getElementById(lakeTile_id);
        lakeTile.style.display = 'block';

        e.target.appendChild(lakeTile);
    }

    // Allows you to continue with function of dropping.
    dragOver = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div
                id={this.props.id}
                col={this.props.col}
                row={this.props.row}
                // called when we drop over the boardTile
                className={this.props.className}
                onDrop={this.drop}
                // called when call one of lakeTiles over the baord. 
                onDragOver={this.dragOver}
            >
                {this.props.children}
            </div>
        )
    }
}

export default BoardTile;

