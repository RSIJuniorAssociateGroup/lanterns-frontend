import React from 'react'
import BoardTile from './BoardTile';
import LakeTile from '../LakeTileComponent/LakeTile';

export let thisBoard = createBoard(3);

export let notTargetable = 0;
export let targetable = 1;
export let tilePlaced = 2;

export function createBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++)
            board[i][j] = 0;
    }

    // console.log(board);
    return board;
};



export function checkNotZero(array) {
    for (var i = 0; i < array.length; i++) {
        var innerArrayLength = array[i].length;
        for (var j = 0; j < innerArrayLength; j++) {
            if (array[i][j] == notTargetable) {
                // console.log(array[i][j]);
                checkAdjacency(array, i, j)
            }
            // count++;
            // console.log(count);
        }
    }
    // console.log(array);

}

// map1(3);
export let count = 0;

export function checkAdjacency(array, i, j) {
    // for (var i = 0; i < array.length; i++) {
    //     var innerArrayLength = array[i].length;
    //   for (var j = 0; j < innerArrayLength; j++) {
    // count++;
    // console.log(count);

    // console.log(array[l][m])

    //Recall that the entire board is rotated 90 degrees, thus when you print out the corresponding array results columns will be where rows are, and rows where the columns are. 
    //Example a placement of a tile at the bottom middle would result in the following board array 
    // [    [ 0, 0, 1 ],
    //      [ 0, 1, 2 ], 
    //      [ 0, 0, 1 ] ]

    //check above (right after rotation)
    if (array[j][i - 1] == 2) {
        array[i][j] = 1;
    }

    //check to the right (top after rotation)
    if (array[i][j + 1] == 2) {
        array[i][j] = 1;
    }

    //check bellow
    if (array[j][i + 1] == 2) {
        array[i][j] = 1;
    }

    //check to the left (bellow after rotation)
    if (array[i][j - 1] == 2) {
        array[i][j] = 1;
    }
    // console.log(array);

    //verifies that get array 9 times
    // console.log(array);

    //Insuring that it's efficient
    count++;
    console.log(count);
    return array;
// }
//     }
}

export function placeFirstTile(array, i, j) {
  array[i][j]=2;
  // console.log(array);
  checkNotZero(array);
    console.log(array);
      return array;
}

export function placeTile(array, i, j) {
  if (array[i][j] != 0) {
  array[i][j]=2;
  // console.log(array);
  checkNotZero(array);
    console.log(array);
      return array;
  } else {
    console.log("You cannot place a tile here.");
    return false;
  }

}
// console.log(thisBoard);

//  checkNotZero(thisBoard);

//TESTS
placeFirstTile(thisBoard, 1, 1);
//[ [ 0, 1, 0 ], [ 1, 2, 1 ], [ 0, 1, 0 ] ]
 placeTile(thisBoard, 0, 0);
 //You cannot place a tile here
//   placeTile(thisBoard, 2, 1);
  // [ [ 1, 2, 1 ], [ 1, 2, 1 ], [ 1, 2, 1 ] ]
//  placeTile(thisBoard, 0, 1);
 //[ [ 1, 2, 1 ], [ 1, 2, 1 ], [ 1, 1, 0 ] ]

class Board extends React.Component {
    render() {
        console.log("Working");


        return (
            <main className="board">
                <BoardTile col="0" row="0" className="boardTile" boardTileLakeTileId="null">
                </BoardTile>
                <BoardTile col="1" row="0" className="boardTile">
                </BoardTile>
                <BoardTile col="2" row="0" className="boardTile">

                </BoardTile>

                <BoardTile col="0" row="1" className="boardTile">
                </BoardTile>
                <BoardTile col="1" row="1" className="boardTile">
                    <LakeTile id="lakeTile-5" draggable="true" topColor={2}
                        rightColor={4}
                        bottomColor={5}
                        leftColor={3}>
                    </LakeTile>
                </BoardTile>
                <BoardTile col="2" row="1" className="boardTile">
                </BoardTile>

                <BoardTile col="0" row="2" className="boardTile">
                </BoardTile>
                <BoardTile col="1" row="2" className="boardTile">
                </BoardTile>
                <BoardTile col="2" row="2" className="boardTile">
                </BoardTile>
            </main>
        )
    }
}

export default Board
