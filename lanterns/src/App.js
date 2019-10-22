import React from 'react';
import './App.css';
import Player from './components/players';
import RotateTileRight, { tile01 } from './components/rotateTile';
import lakeTileImage from './pictures/tile01-0.png';
import LanternHand from './components/lanternHand';
import PlayerHand from './PlayerHand';
// importsfor testing

class Box extends React.Component {
	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.col);
	}

	render() {
		return (
			<div
				className={this.props.boxClass}
				id={this.props.id}
				onClick={this.selectBox}
			/>
		);
	}
}

class Grid extends React.Component {
	render() {
		const width = (this.props.cols * 102);
		var rowsArr = [];

		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + "_" + j;

				boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
				rowsArr.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						selectBox={this.props.selectBox}

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

	selectBox = (row, col) => {
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
					selectBox={this.selectBox}
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
				{/* <div className="playerContainer"> */}
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
				</div>
				{/* </div> */}

				{/* <div className="middleGameView"> */}

				{/* PLAYER 1 INFO */}
				{/* <div className="playerContainer"> */}
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
				</div>
				{/* </div> */}

				{/* Game board */}
				<div className="boardGridStyle">
					<Board />
				</div>

				{/* PLAYER 3 INFO */}
				{/* <div className="playerContainer"> */}
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
				</div>
				{/* </div> */}

				<div className="supplyGrid">
					<LanternHand />
				</div>

				{/* </div> */}

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
<PlayerHand/>

					<button onClick={() => RotateTileRight(tile01.colorList)}>
						Rotate Tile
          		</button>
				</div>

        {/* <img src={lakeTileImage} alt="picutre of lakeTile"></img> */}
        
                
			</div>
		);
	}
}

export default App;

