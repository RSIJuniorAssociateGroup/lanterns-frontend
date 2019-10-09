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
  return list;
}

function RotateTileLeft(list) {
  console.log("Left");
  let item = "";
  item = list[0];
  list.shift();
  list.unshift(item);
  console.log(list);
  return list;
}

function TestRotationRightOnce() {
  console.log("This is the begining of the lake orientation test. First we create a base lakeTile with the same object structure as that found in the c#.")

  let lakeTile00 = {};
  lakeTile00.id = 0;
  lakeTile00.colorList = ["red", "white", "blue", "green"];

  console.log(lakeTile00);

  console.log("Then we rotate the tile right.");
  console.log(RotateTileRight(lakeTile00.colorList));
  return lakeTile00;
}

// function TestRoration() {
//   return (
//     <button onClick={() => TestRotationRightOnce()}>
//       Run test to rotate the tile right.
//   </button>
//   );
// }

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  TestRotationRightOnce();
}

let tile01 = {
  id: 1,
  colorList: ["yellow", "gold", "indigo", "turqouise"],
}

class App extends React.Component {
  render() 
  {
    // TestRotationRightOnce();
    return (
      <div className="App">
        <div className="App-body">
          <Welcome name="Sara" />
          {/* <RotateTileRight list= {["red", "white", "blue", "green"]} /> */}
          <button onClick = {() => RotateTileRight(tile01.colorList)}>

          </button>
        </div>
      </div>
    );
  }
}

export default App;
