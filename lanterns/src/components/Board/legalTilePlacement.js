export let notTargetable, i, j, o = 0;
export let targetable = 1;
export let placedTile = 2;
export let boardWidth = 3;

export let arrayObject = new Array(9).fill(0);

// console.log(arrayObject);

// arrayObject.fill(mapObject,0,1);
// console.log(arrayObject);

export function checkNotZero(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      checkForAdjacency(array, i);
    }
  }
}

export function checkForAdjacency (array, i) {
  for (j=0; j< array.length; j++) {
  //  console.log(array[i])

  if (i >= 3) {
    checkTopTile(array, i);
  }

  if (i < 6) {
    checkBottomTile(array, i);
  }

  if (i == 0 || i == 1|| i == 3 || i == 4 || i == 6|| i == 7) {
    checkRightTile(array, i);
  }

  if (i == 1|| i == 2|| i == 4|| i == 5|| i == 7 || i == 8) {
    checkLeftTile(array, i);
  }

  }
      // console.log(array);
  return array;
}

export function checkTopTile(array, i) {
  if (array[i-3] == 2) {
    array[i]=1;
    // console.log(i);
  }
}

export function checkBottomTile(array, i) {
  if (array[i+3] == 2) {
    array[i]=1;
    // console.log(i);
  }
}

export function checkRightTile(array, i) {
  if (array[i+1] == 2) {
    array[i]=1;
    // console.log(i);
  }
}

export function checkLeftTile(array, i) {
  if (array[i-1] == 2) {
    array[i]=1;
    // console.log(i);
  }
}

export function placeTileAt(tile, i, array) {
  array.fill(tile,i,i+1);
  // console.log(array);
  checkNotZero(array);
  return array;
}

// NOTE WHEN USING THIS: Row has to start at 0, column has to start at one
export function placeTwoDTile (tile, row, col, arrayWidth, array) {
  i = col + (row * arrayWidth)
    array.fill(tile,i,i+1);
  // console.log(array);
  checkNotZero(array);
  return array;
}


/*************************************
 * TESTS FOR 2 D INPUT
 ************************************/
//INDIVIDUAL TESTS: TEST ONE AT A TIME TO GET STATED RESULTS
// IF test all at once the projected results are shown at bottom.
placeTwoDTile(placedTile, 0, 0, 3, arrayObject);
console.log(arrayObject);
// // [ 2, 1, 0, 1, 0, 0, 0, 0, 0 ]

// placeTwoDTile(placedTile, 0, 1, 3, arrayObject);
// console.log(arrayObject);
// // [ 1, 2, 1, 0, 1, 0, 0, 0, 0 ]

// placeTwoDTile(placedTile, 0, 2, 3, arrayObject);
// console.log(arrayObject);
// // [ 0, 1, 2, 0, 0, 1, 0, 0, 0 ]

// placeTwoDTile(placedTile, 1, 0, 3, arrayObject);
// console.log(arrayObject);
// // [ 1, 0, 0, 2, 1, 0, 1, 0, 0 ]

// placeTwoDTile(placedTile, 1, 1, 3, arrayObject);
// console.log(arrayObject)
// // [ 0, 1, 0, 1, 2, 1, 0, 1, 0 ]

// placeTwoDTile(placedTile, 1, 2, 3, arrayObject);
// console.log(arrayObject);
// // [ 0, 0, 1, 0, 1, 2, 0, 0, 1 ]

// placeTwoDTile(placedTile, 2, 0, 3, arrayObject);
// console.log(arrayObject);
// // [ 0, 0, 0, 1, 0, 0, 2, 1, 0 ]

// placeTwoDTile(placedTile, 2, 1, 3, arrayObject);
// console.log(arrayObject);
// // // [ 0, 0, 0, 0, 1, 0, 1, 2, 1 ]

// placeTwoDTile(placedTile, 2, 2, 3, arrayObject);
// console.log(arrayObject);
// // [ 0, 0, 0, 0, 0, 1, 0, 1, 2 ]

//If test these all at once then will GET
// [ 2, 1, 0, 1, 0, 0, 0, 0, 0 ]
// [ 2, 2, 1, 1, 1, 0, 0, 0, 0 ]
// [ 2, 2, 2, 1, 1, 1, 0, 0, 0 ]
// [ 2, 2, 2, 2, 1, 1, 1, 0, 0 ]
// [ 2, 2, 2, 2, 2, 1, 1, 1, 0 ]
// [ 2, 2, 2, 2, 2, 2, 1, 1, 1 ]
// [ 2, 2, 2, 2, 2, 2, 2, 1, 1 ]
// [ 2, 2, 2, 2, 2, 2, 2, 2, 1 ]
// [ 2, 2, 2, 2, 2, 2, 2, 2, 2 ]