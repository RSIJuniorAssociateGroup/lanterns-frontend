
class LegalBoard {

  thisBoard = createBoard(3)

  notTargetable = 0;
  targetable = 1;
  tilePlaced = 2;

  createBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
      board[i] = [];
      for (var j = 0; j < size; j++)
        board[i][j] = 0;
    }

    // console.log(board);
    return board;
  };

  checkNotZero(array) {
    console.log("Made it to checkNotZero");
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
  count = 0;

  checkAdjacency(array, i, j) {
    console.log("Made it to checkAdjacency");

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

    console.log("This is the current i index" + [i]);
    console.log("This is the current j index" + [j]);

    //check above
    if (i > 0 && array[i - 1][j] == 2) {
      array[i][j] = 1;
    }

    //check to the right
    if (j < 2 && array[i][j + 1] == 2) {
      array[i][j] = 1;
    }

    //check bellow
    if (i < array.length - 1 && array[i + 1][j] == 2) {
      array[i][j] = 1;
    }

    //check to the left
    if (j > 0 && array[i][j - 1] == 2) {
      array[i][j] = 1;
    }
    // console.log(array);

    //Insuring that it's efficient
    count++;
    console.log(count);
    return array;
    // }
    //     }
  }

  placeFirstTile(array, i, j) {
    array[i][j] = 2;
    // console.log(array);
    checkNotZero(array);
    console.log(array);
    return array;
  }

  placeTile(array, i, j) {
    if (array[i][j] != 0) {
      array[i][j] = 2;
      // console.log(array);
      checkNotZero(array);
      console.log(array);
      return array;
    } else {
      console.log("You cannot place a tile here.");
      return false;
    }

  }
}

export default LegalBoard;
