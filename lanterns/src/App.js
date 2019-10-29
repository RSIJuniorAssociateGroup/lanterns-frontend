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

// imports for testing

const PlayerOrder = [
	<Player
		// each child in a list should contain a key
		key={0}
		playerId={0}
		playerName="Sub Zero"
		lakeTileHand={<PlayerLakeTiles />}
		playerHonorScore={0}
		playerActive={false}
	/>,

	<Player
		// each child in a list should contain a key
		key={2}
		playerId={2}
		playerName="Double Duo"
		lakeTileHand={<PlayerLakeTiles />}
		playerHonorScore={0}
		playerActive={true}
	/>
]

class App extends React.Component {

	constructor(props) {
		super(props)

		this.drawLakeTileForActivePlayer = this.drawLakeTileForActivePlayer.bind(this)
		this.lakeTileSupply = React.createRef();
	}

	gameOver = false
	activePlayer = PlayerOrder[0]

	render() {
		return (
			<div className="gameView">

				{/* PLAYER 0 INFO */}
				<div className="playerZero">
					{PlayerOrder[0]}
					<LanternCardsHorizontal />
					{/* <PlayerLakeTiles /> */}
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
					<LanternSupply />
					<DedicationToken />
					<LakeTileSupply ref={this.lakeTileSupply}/>
				</div>


				{/* PLAYER 2 (HUMAN) INFO */}
				<div className="playerTwo">

					{PlayerOrder[1]}

					<button onClick={this.drawLakeTileForActivePlayer}>Click</button>

					<LanternCardsHorizontal />
				</div>

			</div>
		);
	}

	getActivePlayer() {
		for (let i = 0; i < PlayerOrder.length; i++) {
			if (PlayerOrder[i].props.playerActive === true) {
				this.activePlayer = PlayerOrder[i]
			}
		}
	}

	drawLakeTileForActivePlayer() {
		this.getActivePlayer()

		let lakeTile = this.lakeTileSupply.current.getTopCard()

		// this.activePlayer.props.lakeTileHand.receiveLakeTile(lakeTile)

	}
}

export default App;

