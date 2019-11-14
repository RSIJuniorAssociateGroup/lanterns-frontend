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

export function shuffleLakeTiles(lakeTiles) {
	var currentIndex = lakeTiles.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = lakeTiles[currentIndex];
		lakeTiles[currentIndex] = lakeTiles[randomIndex];
		lakeTiles[randomIndex] = temporaryValue;
	}

	return lakeTiles;
}

export function dealLakeTiles(playerCount, lakeTiles) {
	let playerHands = [];
	switch (playerCount) {
		case 2:
			playerHands.push([], []);
			break;
		case 3:
			playerHands.push([], [], []);
			break;
		case 4:
			playerHands.push([], [], [], []);
			break;
	}

	let playerHandIndex = 0


	for (let i = 0; i < 3 * playerCount; i++) {
		playerHands[playerHandIndex].push(lakeTiles.pop());
		playerHandIndex = ++playerHandIndex % playerCount;
	}

	return [playerHands, lakeTiles];
}

export function orientFirstTile(playerCount) {
	let rng = Math.floor(Math.random() * playerCount);
	let tileColors = [];

	switch (rng) {
		case 0:
			tileColors.push(6, 7, 1, 2)
			break;
		case 1:
			tileColors.push(1, 2, 6, 7)
			break;
		case 2:
			tileColors.push(2, 6, 7, 1)
			break;
		case 3:
			tileColors.push(7, 1, 2, 6);
			break;
	}

	return tileColors;
}

export function getDeckForCorrectPlayerCount(lakeTileDeck, playerCount) {
	let totalDeckSize = 0;
	let deck = [];

	switch(playerCount) {
		case 4:
			totalDeckSize = 20;
			break;
		case 3:
			totalDeckSize = 18;
			break;
		case 2:
			totalDeckSize = 16;
			break;
	}

	for (let i = 0; i < totalDeckSize; i++) {
		deck.push(lakeTileDeck.pop());
	}

	return deck;
}