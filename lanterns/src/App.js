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
import { startingPlayer, shuffleLakeTiles, dealLakeTiles, orientFirstTile, getDeckForCorrectPlayerCount } from './GameLogic';
import { makeLakeTiles } from "./lakeTiles";
import { checkThreePair, moveLanternCardsThreePair, checkOneOfEach, moveLanternsCardsOneOfEach, moveLanternCardsFourOfAKind, checkFourOfAKind } from "./MakeDedicationLogic";

export let activePlayerIndex = startingPlayer(2);

class App extends React.Component {

	constructor(props) {
		super(props)

		this.drawLakeTileForActivePlayer = this.drawLakeTileForActivePlayer.bind(this);
		this.checkDedication = this.checkDedication.bind(this);
		this.getDedication = this.getDedication.bind(this);
		this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
		this.gameSetup = this.gameSetup.bind(this);

		this.state = {
			currentPlayer: activePlayerIndex,
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

			lakeTileSupply: [],

		}

		this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
	}

	componentWillMount() {
		this.gameSetup();
	}

	gameSetup() {

		let lakeTileDeck = makeLakeTiles();
		let shuffledLakeTiles = shuffleLakeTiles(lakeTileDeck);
		let gameLakeTileDeck = getDeckForCorrectPlayerCount(shuffledLakeTiles, 2);
		let result = dealLakeTiles(2, gameLakeTileDeck);

		this.setState({
			playerHands: result[0],
			lakeTileSupply: result[1],
		});
	}

	setCurrentPlayer(array) {
		this.setState({
			currentPlayer: array
		});
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

	getDedication(value) {
		let tempHonorScores = this.state.playerHonorScores;
		tempHonorScores[activePlayerIndex[0]] += value;

		this.setState({
			playerHonorScores: tempHonorScores
		});
	}

	checkDedication(type) {

		let tempActivePlayerLanternCards = this.state.playerLanternSupplies[activePlayerIndex[0]];
		let tempGameLanternSupply = this.state.gameLanternSupply;
		let canMakeDedication = false;

		switch (type) {
			case 2:
				if (checkThreePair(tempActivePlayerLanternCards)) {
					canMakeDedication = true;
					this.updateAfterDedication(moveLanternCardsThreePair(tempActivePlayerLanternCards, tempGameLanternSupply));
				}
				break;
			case 4:
				if (checkFourOfAKind(tempActivePlayerLanternCards)) {
					canMakeDedication = true;
					this.updateAfterDedication(moveLanternCardsFourOfAKind(tempActivePlayerLanternCards, tempGameLanternSupply));
				}
				break;
			case 7:
				if (checkOneOfEach(tempActivePlayerLanternCards)) {
					canMakeDedication = true;
					this.updateAfterDedication(moveLanternsCardsOneOfEach(tempActivePlayerLanternCards, tempGameLanternSupply));
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
								lakeTileHand={this.state.playerHands[0]}
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
}

export default App;
