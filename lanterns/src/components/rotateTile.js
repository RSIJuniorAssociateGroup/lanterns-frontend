import React from 'react';


// ROTATING TILE
function RotateTileRight(props) {
    console.log("Right");
    let item = "";
    let list = props;
    item = list[3];
    list.pop();
    list.unshift(item);
    console.log(list);
  }

  //Test data to be passed for Rotating the Tile
let tile01 = {
    id: 1,
    colorList: ["yellow ", "gold ", "indigo ", "turqouise "],
}


  export default RotateTileRight;
  export {tile01};