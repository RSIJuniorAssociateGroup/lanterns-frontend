import React from "react";
import LakeTile from "./components/LakeTileComponent/LakeTile"

let lakeTiles= [
    [5, 2, 7, 3],
    [7, 3, 5, 2],
    [7, 1, 4, 6],
    [2, 1, 4, 3],
    [7, 3, 2, 1],
    [4, 7, 3, 6],
    [2, 6, 7, 1],
    [1, 6, 6, 3],
    [5, 2, 2, 1],
    [6, 2, 7, 4],
    [2, 6, 1, 3],
    [2, 3, 2, 4],
    [4, 5, 7, 6],
    [5, 1, 7, 6],
    [6, 2, 5, 7],
    [4, 4, 5, 4],
    [4, 2, 5, 1],
    [1, 3, 5, 6],
    [4, 1, 5, 6],
    [7, 7, 6, 3],
    [7, 1, 4, 1],
    [3, 3, 6, 3],
    [1, 5, 5, 5],
    [3, 2, 5, 6],
    [4, 2, 7, 4],
    [2, 4, 2, 4],
    [2, 7, 2, 1],
    [4, 6, 1, 6],
    [4, 3, 7, 3],
    [5, 6, 1, 1],
    [7, 4, 5, 7],
    [7, 1, 7, 1],
    [6, 6, 3, 3],
    [3, 5, 2, 5],
    [3, 5, 5, 6]
];

export function makeLakeTiles(func) {
    let lakeTileDeck = [];
    console.log(lakeTiles.length);

    for (let i = 0; i < lakeTiles.length; i++) {
        lakeTileDeck.push(
            <LakeTile 
                id={i} 
                draggable={true} 
                topColor={lakeTiles[i][0]}
                rightColor={lakeTiles[i][1]}
                bottomColor={lakeTiles[i][2]}
                leftColor={lakeTiles[i][3]}
                canRotate={true}
                getLanternImage={func}
            />
        );
    }

    return lakeTileDeck;
}
