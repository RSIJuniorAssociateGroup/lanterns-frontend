import React from 'react';
import './App.css';
import Player from './components/Player/Players';
import PlayerNotTurn from './components/Player/PlayerNotTurn';
import LanternSupply from './components/Supply/LanternSupply';
import LanternCardsHorizontal from './components/Player/LanternCardsHorizontal';
import Board from './components/Board/Board';
import LakeTile from './components/LakeTileComponent/LakeTile'
import DedicationToken from './components/DedicationToken/dedication-tokens'
import LakeTileSupply from './components/LakeTileSupply/LakeTileSupply';
import { bool } from 'prop-types';
import { createBoard, placeFirstTile } from './components/Board/LegalTilePlaced';
import { startingPlayer, shuffleLakeTiles, dealLakeTiles, orientFirstTile, getDeckForCorrectPlayerCount } from './GameLogic';
import { makeLakeTiles } from "./components/LakeTileComponent/lakeTiles";

export let activePlayerIndex = startingPlayer(2);

export let LegalBoard = placeFirstTile(createBoard(3), 1, 1);

class App extends React.Component {

	constructor(props) {
		super(props)

		this.setCurrentPlayer = this.setCurrentPlayer.bind(this);

		this.rotate = this.rotate.bind(this);
		// this.getLanternImage = this.getLanternImage.bind(this);

		this.drawLakeTileForActivePlayer = this.drawLakeTileForActivePlayer.bind(this);
		this.updatePlayerHand = this.updatePlayerHand.bind(this);

		this.checkDedication = this.checkDedication.bind(this);
		this.getDedication = this.getDedication.bind(this);
		this.gameSetup = this.gameSetup.bind(this);
		this.rotate = this.rotate.bind(this);

		this.state = {
			currentPlayer: activePlayerIndex,
			// canRotate: props.canRotate,
			legalBoard: LegalBoard,
			playerHands: [
				[],
				[],
			],

			gameLanternSupply: [2, 0, 0, 0, 0, 3, 0],

			playerLanternSupplies: [
				[2, 4, 2, 3, 4, 5, 1],
				[1, 1, 2, 1, 4, 2, 1],
			],

			playerHonorScores: [0, 0],

			baseLakeTileSupply: [
				[5, 2, 7, 3],
				[7, 3, 5, 2],
				[7, 1, 4, 6],
				[2, 1, 4, 3],
				[7, 3, 2, 1],
				[4, 7, 3, 6],
				[2, 6, 7, 1],
				[1, 6, 6, 3],
				[5, 2, 2, 1],
				[6, 2, 7, 4],
				[2, 6, 1, 3],
				[2, 3, 2, 4],
				[4, 5, 7, 6],
				[5, 1, 7, 6],
				[6, 2, 5, 7],
				[4, 4, 5, 4],
				[4, 2, 5, 1],
				[1, 3, 5, 6],
				[4, 1, 5, 6],
				[7, 7, 6, 3],
				[7, 1, 4, 1],
				[3, 3, 6, 3],
				[1, 5, 5, 5],
				[3, 2, 5, 6],
				[4, 2, 7, 4],
				[2, 4, 2, 4],
				[2, 7, 2, 1],
				[4, 6, 1, 6],
				[4, 3, 7, 3],
				[5, 6, 1, 1],
				[7, 4, 5, 7],
				[7, 1, 7, 1],
				[6, 6, 3, 3],
				[3, 5, 2, 5],
				[3, 5, 5, 6]
			],

			lakeTileSupply: [],

		}
	}

	rotate(canRotate, id) {
		if (canRotate === true) {
			let tempSupply = JSON.parse(JSON.stringify(this.state.baseLakeTileSupply));
			let temp = tempSupply[id];
			let tempColor = temp.pop();
			temp.unshift(tempColor);
			tempSupply[id] = temp;
			let updatedHand = this.makeLakeTiles(tempSupply);
			console.log("This is the updated hand ")
			console.log(updatedHand);
			// let updateHand = updateLakeTileHand(updatedHand);

			this.setState({
				baseLakeTileSupply: tempSupply,
			});
			console.log("TempSupply is ")
			console.log(tempSupply[id]);
		} else {
			alert("You cannot rotate a placed lake tile.");
		}
	}

	// makePlayerZeroHand() {
	// 	for (let i=0; i<deck.length+1; i++) {
	// 		console.log("This is the first for loop")
	// 		console.log(deck[b][j][i]);
	// 		playerOne.push(
	// 			<LakeTile 
	// 				id={i} 
	// 				draggable={true} 
	// 				// getLanternImage={func}
	// 				topColor={deck[b][j][i][0]}
	// 				rightColor={deck[b][j][i][1]}
	// 				bottomColor={deck[b][j][i][2]}
	// 				leftColor={deck[b][j][i][3]}
	// 				canRotate={true}
	// 			/>
	// 		);
	// 		return playerOne;
	// 	}
	// }

	makeLakeTiles(deck, handId) {
		let playerOne = [];

		// console.log("Here is a breakdown of the first array object ")
		// console.log(deck[0][0][0]);

		if (handId === 0 || handId === 1) {
		let b = 0
		let j = handId;

		for (let i=0; i<deck.length+1; i++){
			// console.log("This is the first for loop")
			// console.log(deck[b][j][i]);
			playerOne.push(
				<LakeTile 
					id={i} 
					draggable={true} 
					// getLanternImage={func}
					topColor={deck[b][j][i][0]}
					rightColor={deck[b][j][i][1]}
					bottomColor={deck[b][j][i][2]}
					leftColor={deck[b][j][i][3]}
					canRotate={true}
				/>
			);
		}
			console.log(playerOne);
			return playerOne;
		} else if (handId === 2) {

		// b= 1;
		let j = 1;
		for (let i=0; i<deck[1].length; i++) {
			console.log("This is the third for loop")
			console.log(deck[j][i]);
			// for (let j=0; i<deck[i].length; j++) {
			// 	console.log("This is the second for loop")
			// 	console.log(deck[i][j]);
			// }
		}
	} else {
		console.log("ERROR no valid handId");
	}
		return deck;

		/*

		console.log(deck);
		// return deck;
		let lakeTileDeck = deck.map((tile, i) => {
			return (<LakeTile
				id={i}
				draggable={true}
				topColor={deck[i][0]}
				rightColor={deck[i][1]}
				bottomColor={deck[i][2]}
				leftColor={deck[i][3]}
				canRotate={true}
				rotate={this.rotate}
			// parentHand={this.playerHands[0]}
			/>)

		});

		// console.log(lakeTileDeck);

		return lakeTileDeck;
		*/
	}

	componentWillMount() {
		this.gameSetup();
	}

	gameSetup() {

		let lakeTileDeck = this.state.baseLakeTileSupply;
		console.log("This is the lakeTileDeck");
		console.log(lakeTileDeck);
		let shuffledLakeTiles = shuffleLakeTiles(lakeTileDeck);
		console.log("This is the shuffledLakeTiles");
		console.log(shuffledLakeTiles);
		let gameLakeTileDeck = getDeckForCorrectPlayerCount(shuffledLakeTiles, 2);
		console.log("This is the gameLakeTileDeck");
		console.log(gameLakeTileDeck);
		// let createdDeck = this.makeLakeTiles(gameLakeTileDeck);
		// console.log("This is the createdDeck");
		// console.log(createdDeck);
		let result = dealLakeTiles(2, gameLakeTileDeck);
		console.log("This is the result");
		console.log(result);
		let player0Hand = this.makeLakeTiles(result, 0);
		console.log("This is the player0Hand");
		console.log(player0Hand);
		let player1Hand = this.makeLakeTiles(result, 1);
		console.log("This is the player1Hand");
		console.log(player1Hand);
		this.setState({
			playerHands: player0Hand,
			lakeTileSupply: result[1],
			baseLakeTileSupply: gameLakeTileDeck,
		});
		console.log("This is the baseLakeTileSupply")
		console.log(this.state.baseLakeTileSupply);
	}

	setCurrentPlayer(array) {
		this.setState({
			currentPlayer: array
		});
	}

	updatePlayerHand() {
		// console.log("Here");
	}

	drawLakeTileForActivePlayer() {

		if (!this.state.playerHands[activePlayerIndex[0]].length < 3) {

			let lakeTile = this.getTopLakeTile()

			let tempPlayersHand = this.state.playerHands
			let tempPlayerHand = this.state.playerHands[activePlayerIndex[0]]

			tempPlayerHand.push(lakeTile)

			tempPlayersHand[activePlayerIndex[0]] = tempPlayerHand;

			this.setState({
				playerHands: tempPlayersHand
			});
		}
	}

	getTopLakeTile() {

		let tempSupply = this.state.lakeTileSupply;

		let tile = tempSupply.pop();

		this.setState({
			lakeTileSupply: tempSupply
		});

		return tile;
	}

	render() {

		return (
			<div className="gameView">

				{/* PLAYER 0 INFO */}
				<div className="playerZero">

					{(() => {
						switch (this.state.currentPlayer[0]) {
							case 0: return <Player
								// each child in a list should contain a key
								key={0}
								playerId={0}
								playerName="Sub Zero"
								lakeTileHand={this.state.playerHands}
								playerHonorScore={this.state.playerHonorScores[0]}
							/>;
							case 1: return <PlayerNotTurn
								// each child in a list should contain a key
								key={0}
								playerId={0}
								playerName="Sub Zero"
								playerHonorScore={this.state.playerHonorScores[0]}
							/>;
							default: return "ERROR ERROR ERROR ERROR";
						}
					})()}

					<LanternCardsHorizontal lanternCards={this.state.playerLanternSupplies[0]} />

				</div>

				{/* Game board */}
				<div className="boardGridStyle">
					<Board
						setCurrentPlayer={this.setCurrentPlayer.bind(this)}
						drawLakeTileForActivePlayer={this.drawLakeTileForActivePlayer.bind(this)}
						updatePlayerHand={this.updatePlayerHand.bind(this)}
						firstTileColors={orientFirstTile(2)}
					/>
				</div>

				<div className="supplyGrid">
					<LanternSupply gameSupply={this.state.gameLanternSupply} />
					<DedicationToken
						checkDedication={this.checkDedication}
						getDedication={this.getDedication}
					/>
					<LakeTileSupply
						supply={this.state.lakeTileSupply} />
				</div>


				{/* PLAYER 2 (HUMAN) INFO */}
				<div className="playerTwo">

					{(() => {
						switch (this.state.currentPlayer[0]) {
							case 1: return <Player
								// each child in a list should contain a key
								key={2}
								playerId={2}
								playerName="Double Duo"
								lakeTileHand={this.state.playerHands[1]}
								playerHonorScore={this.state.playerHonorScores[1]}
								playerActive={true}
							/>;
							case 0: return <PlayerNotTurn
								// each child in a list should contain a key
								key={2}
								playerId={2}
								playerName="Double Duo"
								playerHonorScore={this.state.playerHonorScores[1]}
								playerActive={true}
							/>;
							default: return "ERROR ERROR ERROR ERROR";
						}
					})()}

					<button onClick={this.drawLakeTileForActivePlayer}>Click</button>

					<LanternCardsHorizontal lanternCards={this.state.playerLanternSupplies[1]} />

				</div>

			</div>
		);
	}

	getDedication(value) {
		let tempHonorScores = this.state.playerHonorScores;
		tempHonorScores[activePlayerIndex[0]] += value;

		this.setState({
			playerHonorScores: tempHonorScores
		});
	}

	checkDedication(type) {
		let tempLanternCards = this.state.playerLanternSupplies[activePlayerIndex[0]];
		let canMakeDedication = false;

		switch (type) {
			case 2:
				canMakeDedication = this.checkThreePair(tempLanternCards);
				break;
			case 4:
				canMakeDedication = this.checkFourOfAKind(tempLanternCards);
				break;
			case 7:
				canMakeDedication = this.checkOneOfEach(tempLanternCards);
				break;
		}

		return canMakeDedication;
	}

	checkOneOfEach(lanternCards) {
		for (let i = 0; i < lanternCards.length; i++) {
			if (lanternCards[i] === 0) {
				return false;
			}
		}

		this.moveLanternsCardsOneOfEach();
		return true;
	}

	moveLanternsCardsOneOfEach() {
		let tempPlayerSupplies = this.state.playerLanternSupplies;
		let tempPlayerSupply = this.state.playerLanternSupplies[activePlayerIndex[0]];
		let tempGameSupply = this.state.gameLanternSupply;

		for (let i = 0; i < tempPlayerSupply.length; i++) {
			tempPlayerSupply[i]--;
			tempGameSupply[i]++;
		}

		tempPlayerSupplies[activePlayerIndex[0]] = tempPlayerSupply;

		this.setState({
			playerLanternSupplies: tempPlayerSupplies,
			gameLanternSupply: tempGameSupply,
		});
	}

	checkThreePair(lanternCards) {
		let pairs = 0;
		for (let i = 0; i < lanternCards.length; i++) {
			if (lanternCards[i] >= 2) {
				pairs++;
			}
		}

		if (pairs >= 3) {
			this.moveLanternCardsThreePair()
			return true;
		} else {
			return false;
		}
	}

	moveLanternCardsThreePair() {
		let tempPlayerSupplies = this.state.playerLanternSupplies;
		let tempPlayerSupply = this.state.playerLanternSupplies[activePlayerIndex[0]];
		let tempGameSupply = this.state.gameLanternSupply;

		let pairCount = 0;

		for (let i = 0; i < tempPlayerSupply.length; i++) {
			if (pairCount === 3) {
				break;
			} else {
				if (tempPlayerSupply[i] >= 2) {
					tempPlayerSupply[i] -= 2;
					tempGameSupply[i] += 2;
					pairCount++;
				}
			}
		}

		tempPlayerSupplies[activePlayerIndex[0]] = tempPlayerSupply;

		this.setState({
			playerLanternSupplies: tempPlayerSupplies,
			gameLanternSupply: tempGameSupply,
		});
	}

	checkFourOfAKind(lanternCards) {
		for (let i = 0; i < lanternCards.length; i++) {
			if (lanternCards[i] >= 4) {
				this.moveLanternCardsFourOfAKind();
				return true;
			}
		}

		return false;
	}

	moveLanternCardsFourOfAKind() {
		let tempPlayerSupplies = this.state.playerLanternSupplies;
		let tempPlayerSupply = this.state.playerLanternSupplies[activePlayerIndex[0]];
		let tempGameSupply = this.state.gameLanternSupply;

		for (let i = 0; i < tempPlayerSupply.length; i++) {
			if (tempPlayerSupply[i] >= 4) {
				tempPlayerSupply[i] -= 4;
				tempGameSupply[i] += 4;
				break;
			}
		}

		this.setState({
			playerLanternSupplies: tempPlayerSupplies,
			gameLanternSupply: tempGameSupply,
		});
	}
}

export default App;