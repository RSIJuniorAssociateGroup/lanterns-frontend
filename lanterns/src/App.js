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
import { createBoard, placeFirstTile } from './components/Board/LegalTilePlaced';
import { startingPlayer, shuffleLakeTiles, dealLakeTiles, orientFirstTile, getDeckForCorrectPlayerCount } from './GameLogic';
import { checkThreePair, moveLanternCardsThreePair, checkOneOfEach, moveLanternsCardsOneOfEach, moveLanternCardsFourOfAKind, checkFourOfAKind } from "./MakeDedicationLogic";

export let activePlayerIndex = startingPlayer(2);

export let LegalBoard = placeFirstTile(createBoard(3), 1, 1);

export let droppedTilesBoard = placeFirstTile(createBoard(3), 1, 1);

export let firstTileOrientation = orientFirstTile(2);

class App extends React.Component {

	constructor(props) {
		super(props)

		this.setCurrentPlayer = this.setCurrentPlayer.bind(this);

		this.rotate = this.rotate.bind(this);
		this.findTileInHand = this.findTileInHand.bind(this);

		this.drawLakeTileForActivePlayer = this.drawLakeTileForActivePlayer.bind(this);

		this.updatePlayerHand = this.updatePlayerHand.bind(this);
		this.copyTileToBoard = this.copyTileToBoard.bind(this);
		this.checkAdjacentColors = this.checkAdjacentColors.bind(this);


		this.checkDedication = this.checkDedication.bind(this);
		this.getDedication = this.getDedication.bind(this);
		this.gameSetup = this.gameSetup.bind(this);
		this.rotate = this.rotate.bind(this);

		this.state = {
			currentPlayer: activePlayerIndex,
			legalBoard: LegalBoard,
			playerOneHand: [],
			playerTwoHand: [],

			gameLanternSupply: [2, 0, 0, 0, 0, 3, 0],

			playerLanternSupplies: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
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
			droppedLakeTiles: droppedTilesBoard,

		}
	}

	rotate(canRotate, id, location) {
		if (canRotate === true) {

			switch (location) {
				case 0:

					this.findTileInHand(this.state.playerOneHand, id, location)
					break;
				case 1:
					this.findTileInHand(this.state.playerTwoHand, id, location);
					break;
			}
		} else {
			alert("You cannot rotate a placed lake tile.");
		}
	}

	findTileInHand(arrayOne, id, location) {
		for (let i = 0; i < arrayOne.length; i++) {
			if (arrayOne[i].props.id === id) {
				let result = { topColor: arrayOne[i].props.topColor, rightColor: arrayOne[i].props.rightColor, bottomColor: arrayOne[i].props.bottomColor, leftColor: arrayOne[i].props.leftColor };

				let newTopColor = result.leftColor;
				let newRightColor = result.topColor;
				let newBottomColor = result.rightColor;
				let newLeftColor = result.bottomColor;

				let newResult =
					<LakeTile
						id={arrayOne[i].props.id}
						draggable={true}
						topColor={newTopColor}
						rightColor={newRightColor}
						bottomColor={newBottomColor}
						leftColor={newLeftColor}
						canRotate={true}
						rotate={this.rotate.bind(this)}
						location={location}
					/>

				if (activePlayerIndex[0] === 0) {
					this.state.playerOneHand[i] = newResult;

					this.setState({
						playerOneHand: this.state.playerOneHand
					})
				} else if (activePlayerIndex[0] === 1) {
					this.state.playerTwoHand[i] = newResult;

					this.setState({
						playerTwoHand: this.state.playerTwoHand
					})
				}

				return arrayOne[i];
			}
		}

	}

	makeLakeTiles(deck, handId) {
		let hand = [];

		if (handId === 0) {
			let b = 0

			for (let i = 0; i < deck.length + 1; i++) {
				hand.push(
					<LakeTile
						id={i}
						draggable={true}
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
				hand.push(
					<LakeTile
						id={i + 3}
						draggable={true}
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

			let j = 1;
			for (let i = 0; i < deck[1].length; i++) {

				hand.push(
					<LakeTile
						id={i + 7}
						draggable={true}
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
			return false;
		}
		return hand;
	}

	componentWillMount() {
		this.gameSetup();
	}

	placeInitialTileOnPlacedTileBoard(array, colorList, i, j) {

	}

	gameSetup() {

		let lakeTileDeck = this.state.baseLakeTileSupply;
		let shuffledLakeTiles = shuffleLakeTiles(lakeTileDeck);
		let gameLakeTileDeck = getDeckForCorrectPlayerCount(shuffledLakeTiles, 2);
		let result = dealLakeTiles(2, gameLakeTileDeck);
		let player0Hand = this.makeLakeTiles(result, 0);
		let player1Hand = this.makeLakeTiles(result, 1);
		let tileDeck = this.makeLakeTiles(result, 2);

		let placedTileBrd = this.placeInitialTileOnPlacedTileBoard(droppedTilesBoard, firstTileOrientation, 1,1);

		this.setState({
			playerOneHand: player0Hand,
			playerTwoHand: player1Hand,
			lakeTileSupply: tileDeck,
			baseLakeTileSupply: gameLakeTileDeck,
		});

	}

	setCurrentPlayer(array) {
		this.setState({
			currentPlayer: array
		});
	}

	updatePlayerHand(id, col, row) {
		if (id != undefined) {
			if (activePlayerIndex[0] === 0) {
				for (let i = 0; i < this.state.playerOneHand.length; i++) {
					if (this.state.playerOneHand[i].props.id == id) {

						let placedTile = this.state.playerOneHand[i];
						this.copyTileToBoard(placedTile, col, row, id);

						this.state.playerOneHand.splice(i,1);
					}
				}
			} else if (activePlayerIndex[0] === 1) {
				for (let i = 0; i < this.state.playerTwoHand.length; i++) {
					if (this.state.playerTwoHand[i].props.id == id) {

						let placedTile = this.state.playerTwoHand[i];
						this.copyTileToBoard(placedTile, col, row, id)
						
						this.state.playerTwoHand.splice(i, 1);
					}
				}
			} else {
				alert("Error with updatePlayerHand();")
			}
		} else {

		}
	}

	copyTileToBoard (tile, col, row, id) {

		let result = { topColor: tile.props.topColor, rightColor: tile.props.rightColor, bottomColor: tile.props.bottomColor, leftColor: tile.props.leftColor };

		let newTopColor = result.leftColor;
		let newRightColor = result.topColor;
		let newBottomColor = result.rightColor;
		let newLeftColor = result.bottomColor;

		let newResult = [newTopColor, newRightColor, newBottomColor, newLeftColor]
			// <LakeTile
			// 	id={id}
			// 	draggable={true}
			// 	topColor={newTopColor}
			// 	rightColor={newRightColor}
			// 	bottomColor={newBottomColor}
			// 	leftColor={newLeftColor}
			// 	canRotate={true}
			// 	rotate={this.rotate.bind(this)}
			// 	location={3}
			// 	col={col}
			// 	row={row}
			// />

			let droppedTiles = this.state.droppedLakeTiles;

			let tempHand = droppedTiles;
			let tempHands = droppedTiles;

			tempHand[col][row] = newResult;

			tempHands = tempHand;

			this.state.droppedLakeTiles = tempHands;

			this.setState({
				droppedLakeTiles: this.state.droppedLakeTiles
			})

			console.log("This is the temp hands");
			console.log(tempHands);
			this.checkAdjacentColors(tempHands, row, col, this.state.playerLanternSupplies, this.state.currentPlayer);
	}

	checkAdjacentColors(array, i, j, playerLanternSupplies, activePlayerIndex) {

		// let matchingColors = [];
	  
		console.log("Checking adjacentcy")
		console.log(array);
		console.log(i);
		console.log(j);
		console.log(playerLanternSupplies);

		// if (i !=)
		
		//check above current index
		if (i != 0 && typeof array[i - 1][j] === 'object') {
		  if (array[i-1][j].props.bottomColor === array[i][j].props.topColor) {

			console.log()
			// matchingColors.push(array[i][j].topColor);
			// let playerLanterns = this.state.playerLanternSupplies;

			// let tempSupply = playerLanterns;
			// let tempSupplys = playerLanterns;

			// tempSupply = tempSupply[activePlayerIndex[0]].push(array[i][j].topColor);
			
			// console.log("This is the temp supply");
			// console.log(tempSupply);

			// tempSupplys = tempSupply;

			// this.state.playerLanternSupplies = tempSupplys;
			
			//  this.setState({
			// 	 playerLanternSupplies: this.state.playerLanternSupplies
			//  })
		  }
		}
	  
		//check to the right of current index
		if (j !== 2 && typeof array[i][j + 1] === 'object') {
		  if (array[i][j+1].props.leftColor === array[i][j].props.rightColor) {
			// matchingColors.push(array[i][j].rightColor);
			playerLanternSupplies[activePlayerIndex[0]].push(array[i][j].rightColor);
		  }
		}
	  
		//check to the bottom of current index
		if (this.i < array.length && 
			typeof array[i + 1][j] === 'object') {
		  if (array[i+1][j].props.topColor === array[i][j].props.bottomColor) {
			// matchingColors.push(array[i][j].bottomColor);
			playerLanternSupplies[activePlayerIndex[0]].push(array[i][j].bottomColor);
		  }
		}
	  
		//check to the left of current index
		if (j !== 0 && typeof array[i][j - 1] === 'object') {
		  if (array[i][j-1].props.rightColor === array[i][j].props.leftColor) {
			// matchingColors.push(array[i][j].leftColor);
			playerLanternSupplies[activePlayerIndex[0]].push(array[i][j].leftColor);
		  }
		}
		console.log("Checking Adjacent Colors");
		// console.log(matchingColors);
		// playerLanternSupplies[activePlayerIndex[0]].push(matchingColors);
		console.log(playerLanternSupplies);
		// return matchingColors;
	  }

	drawLakeTileForActivePlayer() {

		if (activePlayerIndex[0] === 0) {
			let playerHands = this.state.playerOneHand;

			let lakeTile = this.getTopLakeTile()

			let tempPlayersHand = playerHands
			let tempPlayerHand = playerHands

			tempPlayerHand.push(lakeTile);

			tempPlayersHand = tempPlayerHand;

			this.state.playerOneHand = tempPlayersHand;

			this.setState({
				playerOneHand: tempPlayerHand
			})

		} else if (activePlayerIndex[0] === 1) {
			let playerHands = this.state.playerTwoHand;

			let lakeTile = this.getTopLakeTile()

			let tempPlayersHand = playerHands
			let tempPlayerHand = playerHands

			tempPlayerHand.push(lakeTile);

			tempPlayersHand = tempPlayerHand;

			this.state.playerTwoHand = tempPlayersHand;

			this.setState({
				playerTwoHand: tempPlayerHand
			})
		}
	}

	getTopLakeTile() {

		let tempSupply = this.state.lakeTileSupply;

		let tile = tempSupply.pop();

		this.setState({
			lakeTileSupply: tempSupply
		});

		let newHandTile =
			<LakeTile
				id={tile.props.id}
				draggable={true}
				// getLanternImage={func}
				topColor={tile.props.topColor}
				rightColor={tile.props.rightColor}
				bottomColor={tile.props.bottomColor}
				leftColor={tile.props.leftColor}
				canRotate={true}
				rotate={this.rotate.bind(this)}
				location={activePlayerIndex[0]}
			/>



		return newHandTile;
	}

	getDedication(value) {
		let tempHonorScores = this.state.playerHonorScores;
		tempHonorScores[activePlayerIndex[0]] += value;

		this.setState({
			playerHonorScores: tempHonorScores
		});
	}

	checkDedication(type) {
		let canMakeDedication = false;

		switch (type) {
			case 2:
				if (checkThreePair(this.state.playerLanternSupplies[activePlayerIndex[0]])) {
					canMakeDedication = true;
					this.updateAfterDedication(moveLanternCardsThreePair(
						this.state.playerLanternSupplies[activePlayerIndex[0]], this.state.gameLanternSupply));
				}
				break;
			case 4:
				if (checkFourOfAKind(this.state.playerLanternSupplies[activePlayerIndex[0]])) {
					canMakeDedication = true;
					this.updateAfterDedication(moveLanternCardsFourOfAKind(
						this.state.playerLanternSupplies[activePlayerIndex[0]], this.state.gameLanternSupply));
				}
				break;
			case 7:
				if (checkOneOfEach(this.state.playerLanternSupplies[activePlayerIndex[0]])) {
					canMakeDedication = true;
					this.updateAfterDedication(moveLanternsCardsOneOfEach(
						this.state.playerLanternSupplies[activePlayerIndex[0]], this.state.gameLanternSupply));
				}
				break;
		}

		return canMakeDedication;
	}

	updateAfterDedication(newSupplies) {
		let tempPlayerSupplies = this.state.playerLanternSupplies;
		tempPlayerSupplies[activePlayerIndex[0]] = newSupplies[0];
		this.setState({
			playerLanternSupplies: tempPlayerSupplies,
			gameLanternSupply: newSupplies[1],
		});
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
						firstTileColors={firstTileOrientation}

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
}

export default App;