export function startingPlayer(num) {
	let array = new Array(num);
	//human player gets to go first
	array[0] = 1;
	//computer player gets to go second
	array[1] = 0;
	console.log(array);

	return array;
}

export function endTurn(activePlayer) {

	let item = "";
	let list = activePlayer;
	console.log(list);
	item = list[list.length - 1];
	console.log(item);
	list.pop();
	list.unshift(item);
	console.log(list);
	// console.log("Previously was " + activePlayer);
	// // activePlayer = (activePlayer + 1) % 2 ;
	// console.log("Now is " + activePlayer);
	return list;
}