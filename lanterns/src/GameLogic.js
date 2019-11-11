export function startingPlayer(num) {
	let array = new Array(num);
	//human player gets to go first
	array[0] = 0;
	//computer player gets to go second
	array[1] = 1;
	// console.log(array);

	return array;
}

export function endTurn(activePlayer) {

	let item = "";
	let array = activePlayer;
	// console.log(array);
	item = array[array.length - 1];
	// console.log(item);
	array.pop();
	array.unshift(item);
	// console.log(array);
	// console.log("Previously was " + activePlayer);
	// // activePlayer = (activePlayer + 1) % 2 ;
	// console.log("Now is " + activePlayer);
	
	return array;
}
