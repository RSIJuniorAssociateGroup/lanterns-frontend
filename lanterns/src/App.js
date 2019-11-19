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
		this.findTileInHand = this.findTileInHand.bind(this);
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
			playerOneHand: [],
			playerTwoHand: [],

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

	rotate(canRotate, id, location) {
		if (canRotate === true) {
			console.log("This is the id ");
			console.log(id);
			console.log("This is the location ");
			console.log(location);

			switch (location) {
				case 0: 
				  
				  console.log(this.findTileInHand(this.state.playerOneHand, id));
				  break;
      	case 1: 
          this.findTileInHand(this.state.playerOneHand, id);
				  break;
        case 2: 
          this.findTileInHand(this.state.playerOneHand, id);
				  break;
			}
		} else {
			alert("You cannot rotate a placed lake tile.");
		}
	}

	findTileInHand(arrayOne, id) {
		// console.log(arrayOne);
		  for (let i=0; i < 3; i++) {
			console.log(arrayOne[i].props.id)
			if(arrayOne[i].props.id === id) {
			console.log("Here it is")
			console.log(arrayOne[i].props.id);
			let result = { topColor: arrayOne[i].props.topColor,rightColor: arrayOne[i].props.rightColor,bottomColor: arrayOne[i].props.bottomColor,leftColor: arrayOne[i].props.leftColor};

			let newResult = {topColor: arrayOne[i].props.topColor,rightColor: arrayOne[i].props.rightColor,bottomColor: arrayOne[i].props.bottomColor,leftColor: arrayOne[i].props.leftColor};
	  
		console.log(result);
				let newTopColor = result.topColor;
				let newRightColor = result.rightColor;
				let newBottomColor = result.bottomColor;
				let newLeftColor = result.leftColor;
		
		//  getNestedObject(arrayOne, ['0', 'key'],);
				this.state.playerOneHand[i].props =newResult;
	  
		this.setState ({
			playerOneHand: this.state.playerOneHand
		})
	  
		
	  
				console.log("the new array is");
		console.log(arrayOne[i]);
		return arrayOne[i];
			}
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
		let hand = [];

		// console.log("Here is a breakdown of the first array object ")
		// console.log(deck[0][0][0]);

		if (handId === 0) {
			let b = 0

			for (let i = 0; i < deck.length + 1; i++) {
				// console.log("This is the first for loop")
				// console.log(deck[b][j][i]);
				hand.push(
					<LakeTile
						id={i}
						draggable={true}
						// getLanternImage={func}
						topColor={deck[b][handId][i][0]}
						rightColor={deck[b][handId][i][1]}
						bottomColor={deck[b][handId][i][2]}
						leftColor={deck[b][handId][i][3]}
						canRotate={true}
						rotate={this.rotate.bind(this)}
						location={0}
					/>
				);
			}
		} else if (handId === 1) {
			let b = 0

			for (let i = 0; i < deck.length + 1; i++) {
				// console.log("This is the first for loop")
				// console.log(deck[b][j][i]);
				hand.push(
					<LakeTile
						id={i+3}
						draggable={true}
						// getLanternImage={func}
						topColor={deck[b][handId][i][0]}
						rightColor={deck[b][handId][i][1]}
						bottomColor={deck[b][handId][i][2]}
						leftColor={deck[b][handId][i][3]}
						canRotate={true}
						rotate={this.rotate.bind(this)}
						location={1}
					/>
				);
			}
		} else if (handId === 2) {

			// let b= 1;
			let j = 1;
			for (let i = 0; i < deck[1].length; i++) {
				// console.log("This is the third for loop")
				// console.log(deck[j][i]);

				hand.push(
					<LakeTile
						id={i+7}
						draggable={true}
						// getLanternImage={func}
						topColor={deck[j][i][0]}
						rightColor={deck[j][i][1]}
						bottomColor={deck[j][i][2]}
						leftColor={deck[j][i][3]}
						canRotate={true}
						rotate={this.rotate.bind(this)}
						location={2}
					/>
				);
			}
		} else {
			console.log("ERROR no valid handId");
		}
		// console.log(hand);
		return hand;

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
		let tileDeck = this.makeLakeTiles(result, 2);
		console.log("This is the tileDeck");
		console.log(tileDeck);

		this.setState({
			playerOneHand: player0Hand,
			playerTwoHand: player1Hand,
			lakeTileSupply: tileDeck,
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

	drawForThisPlayer() {
		if (activePlayerIndex[0] === 0) {
			let lakeTile = this.getTopLakeTile()

			let tempPlayersHand = this.state.playerOneHand
			let tempPlayerHand = this.state.playerOneHand

			tempPlayerHand.push(lakeTile)

			tempPlayersHand = tempPlayerHand;

			this.setState({
				playerOneHand: tempPlayersHand
			});
		} else if (activePlayerIndex[0] === 1) {
			let lakeTile = this.getTopLakeTile()

			let tempPlayersHand = this.state.playerTwoHand
			let tempPlayerHand = this.state.playerTwoHand

			tempPlayerHand.push(lakeTile)

			tempPlayersHand = tempPlayerHand;

			this.setState({
				playerTwoHand: tempPlayersHand
			});
		} else {
			console.log("Error drawing for this player");
		}
	}

	drawLakeTileForActivePlayer(playerHands) {

		// if (!this.state.playerHands[activePlayerIndex[0]].length < 3) {

		let lakeTile = this.getTopLakeTile()

		let tempPlayersHand = this.state.playerHands
		let tempPlayerHand = this.state.playerHands

		tempPlayerHand.push(lakeTile)

		tempPlayersHand = tempPlayerHand;

		this.setState({
			playerHands: tempPlayersHand
		});
		// }
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
								lakeTileHand={this.state.playerOneHand}
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
								lakeTileHand={this.state.playerTwoHand}
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