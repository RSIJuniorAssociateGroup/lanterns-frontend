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
import { startingPlayer } from './GameLogic';
import { createBoard, placeFirstTile } from './components/Board/LegalTilePlaced';

//pictures
import blackTile from "./pictures/blackTile.jpg";
import blueTile from "./pictures/blueTile.jpg";
import greenTile from "./pictures/greenTile.jpg";
import orangeTile from "./pictures/orangeTile.jpg";
import purpleTile from "./pictures/purpleTile.jpg";
import redTile from "./pictures/redTile.jpg";
import whiteTile from "./pictures/whiteTile.jpg";

export let activePlayerIndex = startingPlayer(2);

export let LegalBoard = placeFirstTile(createBoard(3), 1, 1);

class App extends React.Component {

	constructor(props) {
		super(props)

		this.setCurrentPlayer = this.setCurrentPlayer.bind(this);

		this.rotate = this.rotate.bind(this);
		this.getLanternImage = this.getLanternImage.bind(this);

		this.drawLakeTileForActivePlayer = this.drawLakeTileForActivePlayer.bind(this);
		this.updatePlayerHand = this.updatePlayerHand.bind(this);

		this.checkDedication = this.checkDedication.bind(this);
		this.getDedication = this.getDedication.bind(this);

		this.state = {
			currentPlayer: activePlayerIndex,
			colors: [props.topColor, props.rightColor, props.bottomColor, props.leftColor],
			canRotate: props.canRotate,
			legalBoard: LegalBoard,
			playerHands: [
				[
					<LakeTile
						rotate={this.rotate.bind(this)}
						getLantern={this.getLanternImage.bind(this)}
						id="lakeTile-10"
						draggable="true"
						topColor={2}
						rightColor={4}
						bottomColor={5}
						leftColor={3}
						canRotate={true}
					/>,
					<LakeTile
						rotate={this.rotate.bind(this)}
						getLantern={this.getLanternImage.bind(this)}
						id="lakeTile-11"
						draggable="true"
						topColor={3}
						rightColor={4}
						bottomColor={1}
						leftColor={2}
						canRotate={true}
					/>,
					<LakeTile
						rotate={this.rotate.bind(this)}
						getLantern={this.getLanternImage.bind(this)}
						id="lakeTile-12"
						draggable="true"
						topColor={1}
						rightColor={6}
						bottomColor={7}
						leftColor={5}
						canRotate={true}
					/>
				],

				[
					<LakeTile
						rotate={this.rotate.bind(this)}
						getLantern={this.getLanternImage.bind(this)}
						id="lakeTile-20"
						draggable="true"
						topColor={2}
						rightColor={2}
						bottomColor={2}
						leftColor={2}
						canRotate={true}
					/>,
					<LakeTile
						rotate={this.rotate.bind(this)}
						getLantern={this.getLanternImage.bind(this)}
						id="lakeTile-21"
						draggable="true"
						topColor={3}
						rightColor={4}
						bottomColor={1}
						leftColor={2}
						canRotate={true}
					/>,
					<LakeTile
						rotate={this.rotate.bind(this)}
						getLantern={this.getLanternImage.bind(this)}
						id="lakeTile-22"
						draggable="true"
						topColor={1}
						rightColor={6}
						bottomColor={7}
						leftColor={5}
						canRotate={true}
					/>
				],

			],

			gameLanternSupply: [2, 0, 0, 0, 0, 3, 0],

			playerLanternSupplies: [
				[2, 4, 2, 3, 4, 5, 1],
				[1, 1, 2, 1, 4, 2, 1],
			],

			playerHonorScores: [0, 0],

			lakeTileSupply: [
				<LakeTile
					rotate={this.rotate.bind(this)}
					getLantern={this.getLanternImage.bind(this)}
					id="lakeTile-32"
					draggable="true"
					topColor={1}
					rightColor={2}
					bottomColor={3}
					leftColor={4} />,

				<LakeTile
					rotate={this.rotate.bind(this)}
					getLantern={this.getLanternImage.bind(this)}

					id="lakeTile-42"
					draggable="true"
					topColor={2}
					rightColor={2}
					bottomColor={2}
					leftColor={2} />,

				<LakeTile
					rotate={this.rotate.bind(this)}
					getLantern={this.getLanternImage.bind(this)}

					id="lakeTile-52"
					draggable="true"
					topColor={3}
					rightColor={3}
					bottomColor={3}
					leftColor={3} />,

				<LakeTile
					rotate={this.rotate.bind(this)}
					getLantern={this.getLanternImage.bind(this)}

					id="lakeTile-62"
					draggable="true"
					topColor={4}
					rightColor={4}
					bottomColor={4}
					leftColor={4} />,

				<LakeTile
					rotate={this.rotate.bind(this)}
					getLantern={this.getLanternImage.bind(this)}

					id="lakeTile-72"
					draggable="true"
					topColor={5}
					rightColor={5}
					bottomColor={5}
					leftColor={5} />,

				<LakeTile
					rotate={this.rotate.bind(this)}
					getLantern={this.getLanternImage.bind(this)}

					id="lakeTile-82"
					draggable="true"
					topColor={6}
					rightColor={6}
					bottomColor={6}
					leftColor={6} />,

				<LakeTile
					rotate={this.rotate.bind(this)}
					getLantern={this.getLanternImage.bind(this)}

					id="lakeTile-92"
					draggable="true"
					topColor={7}
					rightColor={7}
					bottomColor={7}
					leftColor={7} />,
			],
		}
	}

	setCurrentPlayer(array) {
		this.setState({
			currentPlayer: array
		});
	}

	//Logic for lake tiles
	rotate() {
		if (this.state.canRotate === true) {
			let temp = this.state.colors
			let tempColor = temp.pop()
			temp.unshift(tempColor);
			let newColors = temp
			this.setState({
				colors: newColors
			})
		} else {
			alert("You cannot rotate a placed lake tile.");
		}
	}

	getLanternImage(num) {
		let image = null;
		switch (num) {
			case 1:
				image = blackTile
				break
			case 2:
				image = blueTile
				break
			case 3:
				image = greenTile
				break
			case 4:
				image = orangeTile
				break
			case 5:
				image = purpleTile
				break
			case 6:
				image = redTile
				break
			case 7:
				image = whiteTile
				break;
		}
		return image
	}

	dragStart = e => {
		const target = e.target;
		e.dataTransfer.setData('lakeTile_id', e.target.id);
		// e.dataTransfer.effectAllowed='move';
	}

	dragOver = e => {
		e.stopPropagation();
		this.setState({
			canRotate: false
		})
		// e.dataTransfer.dropEffect='move';
	}

	//Logic for player hand

	updatePlayerHand() {
		console.log("Here");
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
		console.log(this.state.legalBoard);
		const top = this.getLanternImage(this.state.colors[0])
		const right = this.getLanternImage(this.state.colors[1])
		const bottom = this.getLanternImage(this.state.colors[2])
		const left = this.getLanternImage(this.state.colors[3])
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
						updatePlayerHand={this.updatePlayerHand.bind(this)}
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
