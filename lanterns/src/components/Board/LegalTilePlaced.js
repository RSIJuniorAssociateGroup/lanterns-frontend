export function createBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
      board[i] = [];
      for (var j = 0; j < size; j++)
        board[i][j] = 0;
    }
    return board;
  };

export let notTargetable = 0;
export let targetable = 1;
export let tilePlaced = 2;

export function checkNotZero(array) {
  for (var i = 0; i < array.length; i++) {
    var innerArrayLength = array[i].length;
    for (var j = 0; j < innerArrayLength; j++) {
      if (array[i][j] === notTargetable) {
        checkAdjacency(array, i, j)
      }
    }
  }
}

export function checkAdjacency(array, i, j) {
  //check above
  if (i > 0 && array[i - 1][j] === tilePlaced) {
    array[i][j] = 1;
  }

  //check to the right
  if (j < 5 && array[i][j + 1] === tilePlaced) {
    array[i][j] = 1;
  }

  //check bellow
  if (i < array.length - 1 && array[i + 1][j] === tilePlaced) {
    array[i][j] = 1;
  }

  //check to the left
  if (j > 0 && array[i][j - 1] === tilePlaced) {
    array[i][j] = 1;
  }

  return array;
}

export function placeFirstTile(array, i, j) {
  array[i][j] = tilePlaced;
  checkNotZero(array);
    console.log(array);

  return array;
}

export function placeTile(array, i, j) {
  if (array[i][j] !== 0) {
    array[i][j] = tilePlaced;
    checkNotZero(array);
    // console.log(array);
    return array;
  } else {
    alert("You cannot legally place a tile here.");
    return false;
  }
}