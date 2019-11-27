import blackTile from "../../pictures/blackTile.jpg";
import blueTile from "../../pictures/blueTile.jpg";
import greenTile from "../../pictures/greenTile.jpg";
import orangeTile from "../../pictures/orangeTile.jpg";
import purpleTile from "../../pictures/purpleTile.jpg";
import redTile from "../../pictures/redTile.jpg";
import whiteTile from "../../pictures/whiteTile.jpg";


export function getLanternImage(num) {
    let image = null;
    switch (num) {
        case 1:
            image = blackTile
            break
        case 2:
            image = blueTile
            break
        case 3:
            image = greenTile
            break
        case 4:
            image = orangeTile
            break
        case 5:
            image = purpleTile
            break
        case 6:
            image = redTile
            break
        case 7:
            image = whiteTile
            break;
    }
    return image
}
