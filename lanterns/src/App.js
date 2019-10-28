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
// imports for testing

class App extends React.Component {
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
						lakeTileHand={[4, 7, 36]}
						playerHonorScore={0}
						playerActive="false"
					/>
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
				</div>


				{/* PLAYER 2 (HUMAN) INFO */}
				<div className="playerTwo">

					<Player
						// each child in a list should contain a key
						key={0}
						playerId={0}
						playerName="Double Duo"
						lakeTileHand={[4, 7, 36]}
						playerHonorScore={0}
						playerActive="false"
					/>

					<PlayerLakeTiles />

					<LanternCardsHorizontal />
				</div>

			</div>
		);
	}
}

export default App;

