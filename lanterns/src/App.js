import React from 'react';
import './App.css';
import Player from './components/Player/Players';
import LanternSupply from './components/Supply/LanternSupply';
import PlayerLakeTiles from './components/Player/PlayerLakeTiles';
import LanternCards from './components/Player/LanternCards';
import LanternCardsHorizontal from './components/Player/LanternCardsHorizontal';
import Board from './components/Board/Board';
import LakeTile from './components/LakeTileComponent/LakeTile'
import DedicationToken from './components/DedicationToken/dedication-tokens'
import LakeTileSupply from './components/LakeTileSupply/LakeTileSupply';
import { bool } from 'prop-types';

// imports for testing

let activePlayerIndex = 1

class App extends React.Component {

	constructor(props) {
		super(props)

		this.drawLakeTileForActivePlayer = this.drawLakeTileForActivePlayer.bind(this);
		this.checkDedication = this.checkDedication.bind(this);
		this.getDedication = this.getDedication.bind(this);

		this.state = {

			playerHands: [
				[
					<LakeTile
						id="lakeTile-10"
						draggable="true"
						topColor={2}
						rightColor={4}
						bottomColor={5}
						leftColor={3}
					/>,
					<LakeTile
						id="lakeTile-11"
						draggable="true"
						topColor={3}
						rightColor={4}
						bottomColor={1}
						leftColor={2}
					/>,
					<LakeTile
						id="lakeTile-12"
						draggable="true"
						topColor={1}
						rightColor={6}
						bottomColor={7}
						leftColor={5}
					/>
				],

				[
					<LakeTile
						id="lakeTile-20"
						draggable="true"
						topColor={2}
						rightColor={2}
						bottomColor={2}
						leftColor={2}
					/>,
					<LakeTile
						id="lakeTile-21"
						draggable="true"
						topColor={3}
						rightColor={4}
						bottomColor={1}
						leftColor={2}
					/>,
					<LakeTile
						id="lakeTile-22"
						draggable="true"
						topColor={1}
						rightColor={6}
						bottomColor={7}
						leftColor={5}
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
					id="lakeTile-32"
					draggable="true"
					topColor={1}
					rightColor={2}
					bottomColor={3}
					leftColor={4} />,

				<LakeTile

					id="lakeTile-42"
					draggable="true"
					topColor={2}
					rightColor={2}
					bottomColor={2}
					leftColor={2} />,

				<LakeTile

					id="lakeTile-52"
					draggable="true"
					topColor={3}
					rightColor={3}
					bottomColor={3}
					leftColor={3} />,

				<LakeTile

					id="lakeTile-62"
					draggable="true"
					topColor={4}
					rightColor={4}
					bottomColor={4}
					leftColor={4} />,

				<LakeTile

					id="lakeTile-72"
					draggable="true"
					topColor={5}
					rightColor={5}
					bottomColor={5}
					leftColor={5} />,

				<LakeTile

					id="lakeTile-82"
					draggable="true"
					topColor={6}
					rightColor={6}
					bottomColor={6}
					leftColor={6} />,

				<LakeTile

					id="lakeTile-92"
					draggable="true"
					topColor={7}
					rightColor={7}
					bottomColor={7}
					leftColor={7} />,
			],

		}

	}

	render() {
		console.log(this.state.playerHonorScores)
		return (
			<div className="gameView">

				{/* PLAYER 0 INFO */}
				<div className="playerZero">
					<Player
						// each child in a list should contain a key
						key={0}
						playerId={0}
						playerName={"Sub Zero"}
						lakeTileHand={this.state.playerHands[0]}
						playerHonorScore={this.state.playerHonorScores[0]}
						playerActive={false}
					/>,
					<LanternCardsHorizontal lanternCards={this.state.playerLanternSupplies[0]} />
				</div>


				{/* PLAYER 1 INFO */}
				{/* <div className="playerOne"> */}
				{/* <Player */}
				{/* // each child in a list should contain a key */}
				{/* key={0} */}
				{/* playerId={0} */}
				{/* playerName="Obi One" */}
				{/* lakeTileHand={[4, 7, 36]} */}
				{/* playerHonorScore={0} */}
				{/* playerActive="false" */}
				{/* /> */}
				{/* <LanternCards /> */}
				{/* <PlayerLakeTiles /> */}
				{/* </div> */}

				{/* Game board */}
				<div className="boardGridStyle">
					<Board />
				</div>

				{/* PLAYER 3 INFO */}
				{/* <div className="playerThree"> */}
				{/* <Player
						// each child in a list should contain a key
						key={0}
						playerId={0}
						playerName="Triple Threat"
						lakeTileHand={[4, 7, 36]}
						playerHonorScore={0}
						playerActive="false"
					/> */}
				{/* <PlayerLakeTiles /> */}
				{/* <LanternCards /> */}
				{/* </div> */}

				<div className="supplyGrid">
					<LanternSupply gameSupply={this.state.gameLanternSupply}/>
					<DedicationToken
						checkDedication={this.checkDedication}
						getDedication={this.getDedication}
					/>
					<LakeTileSupply
						supply={this.state.lakeTileSupply} />
				</div>


				{/* PLAYER 2 (HUMAN) INFO */}
				<div className="playerTwo">

					<Player
						// each child in a list should contain a key
						key={2}
						playerId={2}
						playerName={"Double Duo"}
						lakeTileHand={this.state.playerHands[1]}
						playerHonorScore={this.state.playerHonorScores[1]}
						playerActive={true}
					/>

					<button onClick={this.drawLakeTileForActivePlayer}>Click</button>

					<LanternCardsHorizontal lanternCards={this.state.playerLanternSupplies[1]} />
				</div>

			</div>
		);
	}

	drawLakeTileForActivePlayer() {

		if (!this.state.playerHands[activePlayerIndex].length < 3) {

			let lakeTile = this.getTopLakeTile()

			let tempPlayersHand = this.state.playerHands
			let tempPlayerHand = this.state.playerHands[activePlayerIndex]

			tempPlayerHand.push(lakeTile)

			tempPlayersHand[activePlayerIndex] = tempPlayerHand;

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
		tempHonorScores[activePlayerIndex] += value;

		this.setState({
			playerHonorScores: tempHonorScores
		});
	}

	checkDedication(type) {
		let tempLanternCards = this.state.playerLanternSupplies[activePlayerIndex];
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
		let tempPlayerSupply = this.state.playerLanternSupplies[activePlayerIndex];
		let tempGameSupply = this.state.gameLanternSupply;

		for (let i = 0; i  < tempPlayerSupply.length; i++) {
			tempPlayerSupply[i]--;
			tempGameSupply[i]++;
		}

		tempPlayerSupplies[activePlayerIndex] = tempPlayerSupply;

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
		let tempPlayerSupply = this.state.playerLanternSupplies[activePlayerIndex];
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

		tempPlayerSupplies[activePlayerIndex] = tempPlayerSupply;

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
		let tempPlayerSupply = this.state.playerLanternSupplies[activePlayerIndex];
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

