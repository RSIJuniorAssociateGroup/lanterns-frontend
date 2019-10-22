import React from 'react';
import './App.css';
import Player from './components/player/Players';
import RotateTileRight, { tile01 } from './components/LakeTileComponent/RotateTile';
import lakeTileImage from './pictures/tile01-0.png';
import LanternSupply from './components/supply/LanternSupply';
import PlayerLakeTiles from './components/player/PlayerLakeTiles';
import LanternCards from './components/player/LanternCards';
import LanternCardsHorizontal from './components/player/LanternCardsHorizontal';
import LakeTile from './components/LakeTileComponent/LakeTile'

// imports for testing

class BoardTile extends React.Component {
	selectBoardTile = () => {
		this.props.selectBoardTile(this.props.row, this.props.col);
	}

	render() {
		return (
			<div
				className={this.props.BoardTileClass}
				id={this.props.id}
				onClick={this.selectBoardTile}
			>
				<div className="lake-tile-holder">
					<LakeTile
						topColor={2}
						rightColor={4}
						bottomColor={5}
						leftColor={3} />
				</div>
			</div>
		);
	}
}

class Grid extends React.Component {
	render() {
		const width = (this.props.cols * 102);
		var rowsArr = [];

		var BoardTileClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let BoardTileId = i + "_" + j;

				BoardTileClass = this.props.gridFull[i][j] ? "BoardTile on" : "BoardTile off";
				rowsArr.push(
					<BoardTile
						BoardTileClass={BoardTileClass}
						key={BoardTileId}
						BoardTileId={BoardTileId}
						row={i}
						col={j}
						selectBoardTile={this.props.selectBoardTile}

					/>
				);
			}
		}

		return (
			<div className="grid" style={{ width: width }}>
				{rowsArr}
			</div>
		);
	}
}

class Board extends React.Component {
	constructor() {
		super();
		this.rows = 3;
		this.cols = 3;

		this.state = {
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	selectBoardTile = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		console.log(row, col);
		this.setState({
			gridFull: gridCopy
		});
	}

	//place a starting lakeTile
	seed = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[1][1] = true;
		this.setState({
			gridFull: gridCopy
		});
	}

	componentDidMount() {
		this.seed();
	}

	render() {
		return (
			<div>
				<Grid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBoardTile={this.selectBoardTile}
				/>
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

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
					<PlayerLakeTiles />
				</div>


				{/* PLAYER 1 INFO */}
				<div className="playerOne">
					<Player
						// each child in a list should contain a key
						key={0}
						playerId={0}
						playerName="Obi One"
						lakeTileHand={[4, 7, 36]}
						playerHonorScore={0}
						playerActive="false"
					/>
					<PlayerLakeTiles />
					<LanternCards />
				</div>

				{/* Game board */}
				<div className="boardGridStyle">
					<Board />
				</div>

				{/* PLAYER 3 INFO */}
				<div className="playerThree">
					<Player
						// each child in a list should contain a key
						key={0}
						playerId={0}
						playerName="Triple Threat"
						lakeTileHand={[4, 7, 36]}
						playerHonorScore={0}
						playerActive="false"
					/>
					<PlayerLakeTiles />
					<LanternCards />
				</div>

				<div className="supplyGrid">
					<LanternSupply />
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

					<button onClick={() => RotateTileRight(tile01.colorList)}>
						Rotate Tile
          		</button>
				</div>

			</div>
		);
	}
}

export default App;

