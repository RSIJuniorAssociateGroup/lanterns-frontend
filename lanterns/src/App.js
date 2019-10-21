import React from 'react';
import './App.css';
import PlayerHand from "./PlayerHand"
import LakeTile from "./LakeTile"

// ROTATING TILE


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <PlayerHand/> */}
        <LakeTile/>
      </div>
    );
  }
}

export default App;

