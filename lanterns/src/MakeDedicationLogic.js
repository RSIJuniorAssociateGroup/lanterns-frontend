export function checkThreePair(lanternCards) {
    let pairs = 0;
    for (let i = 0; i < lanternCards.length; i++) {
        if (lanternCards[i] >= 2) {
            pairs++;
        }
    }

    if (pairs >= 3) {
        return true;
    } else {
        return false;
    }
}

export function moveLanternCardsThreePair(playerLanternSupply, gameLanternSupply) {

    let pairCount = 0;

    for (let i = 0; i < playerLanternSupply.length; i++) {
        if (pairCount === 3) {
            break;
        } else {
            if (playerLanternSupply[i] >= 2) {
                playerLanternSupply[i] -= 2;
                gameLanternSupply[i] += 2;
                pairCount++;
            }
        }
    }

    return [playerLanternSupply, gameLanternSupply];

}

export function checkFourOfAKind(lanternCards) {
    for (let i = 0; i < lanternCards.length; i++) {
        if (lanternCards[i] >= 4) {
            return true;
        }
    }

    return false;
}

export function moveLanternCardsFourOfAKind(playerLanternSupply, gameLanternSupply) {

    for (let i = 0; i < playerLanternSupply.length; i++) {
        if (playerLanternSupply[i] >= 4) {
            playerLanternSupply[i] -= 4;
            gameLanternSupply[i] += 4;
            break;
        }
    }

    return [playerLanternSupply, gameLanternSupply];
}

export function checkOneOfEach(lanternCards) {
    for (let i = 0; i < lanternCards.length; i++) {
        if (lanternCards[i] === 0) {
            return false;
        }
    }

    return true;
}

export function moveLanternsCardsOneOfEach(playerLanternSupply, gameLanternSupply) {

    for (let i = 0; i < playerLanternSupply.length; i++) {
        playerLanternSupply[i]--;
        gameLanternSupply[i]++;
    }

    return [playerLanternSupply, gameLanternSupply];
}