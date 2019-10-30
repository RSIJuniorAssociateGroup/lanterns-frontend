import lakeTile_Id from './BoardTile';

console.log("Logical");

function myFunction (tileId) {
if (tileId) {
    console.log("This is the Lake Tile Id " + tileId);
    console.log("Complied")
} else {
    console.log("Unable to comply");
}
}

/*if (this.props.col != 2) {
    look at boardTiles to the right
}
if (this.props.col != 0) {
    look at boardTiles to the left
}
if (this.props.row !0) {
    look at boardTile above
}
if (this.props.row !3) {
    look at boardTile bellow
}

*/

export default  myFunction;