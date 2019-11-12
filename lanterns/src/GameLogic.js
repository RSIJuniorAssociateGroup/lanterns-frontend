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
	item = array[array.length - 1];
	array.pop();
	array.unshift(item);
	
	return array;
}
