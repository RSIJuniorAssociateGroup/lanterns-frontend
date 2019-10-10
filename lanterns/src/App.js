import React from 'react';
import './App.css';

function RotateTileRight(props) {
  console.log("Right");
  let item = "";
  let list = props;
  item = list[3];
  list.pop();
  list.unshift(item);
  console.log(list);
  return (
    <div>
    {tile01.colorList}
  </div>
  );
}

function RotateTileLeft(props) {
  console.log("Left");
  let item = "";
  let list = props;
  item = list[0];
  list.shift();
  list.push(item);
  console.log(list);
  return list;
}

//Test data to be passed for Rotating the Tile
let tile01 = {
  id: 1,
  colorList: ["yellow ", "gold ", "indigo ", "turqouise "],
}

class App extends React.Component {
  render() 
  {
    return (
      <div className="App">
        <div className="App-body">
          <button onClick = {() => RotateTileRight(tile01.colorList)}>
            Rotate Sample Tile Right
          </button>
          <div>
            {/* {tile01.colorList} */}
          </div>
          <button onClick = {() => RotateTileLeft(tile01.colorList)}>
            Rotate Sample Tile Left
          </button>
        </div>
      </div>
    );
  }
}

export default App;
