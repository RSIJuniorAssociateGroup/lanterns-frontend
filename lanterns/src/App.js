import React from 'react';
import './App.css';
import Player from './components/Player/Players';
import LanternSupply from './components/Supply/LanternSupply';
import LanternCardsHorizontal from './components/Player/LanternCardsHorizontal';
import Board from './components/Board/Board';
import LakeTile from './components/LakeTileComponent/LakeTile'
import DedicationToken from './components/DedicationToken/dedication-tokens'
import LakeTileSupply from './components/LakeTileSupply/LakeTileSupply';
// import ActivePlayerIndex from './components/Board/Board'
import {startingPlayer} from './GameLogic';

// imports for testing

export let ActivePlayerIndex = startingPlayer(2);

class App extends React.Component {

	constructor(props) {
		super(props)

		this.drawLakeTileForActivePlayer = this.drawLakeTileForActivePlayer.bind(this)
		
		this.state = {
			playerZeroHand: [
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
				]
			],

			playerTwoHand: [
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
				]
			],

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
		//this.state.players[0].lakeTileHand = this.state.playerOneHand
	}

	render() {
		return (
			<div className="gameView">

				{/* PLAYER 0 INFO */}
				<div className="playerZero">
					<Player
						// each child in a list should contain a key
						key={0}
						playerId={0}
						playerName="Sub Zero"
						lakeTileHand={this.state.playerZeroHand}
						playerHonorScore={0}
						playerActive={false}
					/>,
					<LanternCardsHorizontal />
					{/* <PlayerLakeTiles /> */}
				</div>

				{/* Game board */}
				<div className="boardGridStyle">
					<Board />
				</div>

				<div className="supplyGrid">
					<LanternSupply />
					<DedicationToken />
					<LakeTileSupply
						supply={this.state.lakeTileSupply} />
				</div>


				{/* PLAYER 2 (HUMAN) INFO */}
				<div className="playerTwo">

					<Player
						// each child in a list should contain a key
						key={2}
						playerId={2}
						playerName="Double Duo"
						lakeTileHand={this.state.playerTwoHand}
						playerHonorScore={0}
						playerActive={true}
					/>

					<button onClick={this.drawLakeTileForActivePlayer}>Click</button>

					{/* <PlayerLakeTiles /> */}
					<LanternCardsHorizontal />
				</div>

			</div>
		);
	}

	drawLakeTileForActivePlayer() {

		if (!this.state.playerHands[ActivePlayerIndex].length < 3) {

			let lakeTile = this.getTopLakeTile()

			let tempPlayersHand = this.state.playerHands
			let tempPlayerHand = this.state.playerHands[ActivePlayerIndex]

			tempPlayerHand.push(lakeTile)

			tempPlayersHand[ActivePlayerIndex] = tempPlayerHand

			this.setState({
				playerHands: tempPlayersHand
			})
		}

	}

	getTopLakeTile() {

		let tempSupply = this.state.lakeTileSupply

		let tile = tempSupply.pop()

		this.setState({
			lakeTileSupply: tempSupply
		})

		return tile
	}

	// enforcePlayerTurn(ActivePlayerIndex) {

	// }
}

export default App;
