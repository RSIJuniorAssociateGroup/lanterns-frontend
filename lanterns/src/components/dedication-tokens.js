import React from "react";
import ded4 from '../resources/4_of_a_Kind.jpg';
import dedPairs from '../resources/3_pairs.jpg';
import ded7 from '../resources/7_unique.jpg';
import './ded.css';

// Tie this component to 'player hand'  ex:
// initialize 'Honor Array': playerDedicationTokens = []
// Push 'Honor Points' to player 'Honor Array': playerDedicationTokens.push(points4);
// Add up points in 'Honor Array': let playerHonor = playerDedicationTokens.reduce((a, b) => a + b, 0);


// Tie in to this component from 'Lantern Cards' in 'player hand' Ex.:
// Bool: sufficient cards to make trade?  T/F


let fIndex = 0;
let pIndex = 0;
let sIndex = 0;

class DedicationToken extends React.Component {
    constructor(props) {
        super(props);
        this.nextToken = this.nextToken.bind(this);
        this.nextToken2 = this.nextToken2.bind(this);
        this.nextToken3 = this.nextToken3.bind(this);
    };

    render() {

        // Backend arrays of tokens?
        let fourTokensStack = [8, 7, 6, 5, 5, 4, 'generic'];
        let pairsTokenStack = [9, 8, 7, 6, 5, 5, 'generic'];
        let sevenTokensStack = [10, 9, 8, 7, 6, 5, 'generic'];

        let points4 = fourTokensStack[fIndex];
        let pointsPairs = pairsTokenStack[pIndex];
        let points7 = sevenTokensStack[sIndex];

        return (
            <div className="tokenHand">
                <button className="tokenContainer" onClick={this.nextToken}>
                    <img src={ded4} width="150" alt="4_of_a_Kind" />
                    <h1>{points4}</h1>
                </button>
                <button className="tokenContainer" onClick={this.nextToken2}>
                    <img src={dedPairs} width="150" alt="3_pairs" />
                    <h1>{pointsPairs}</h1>
                </button>
                <button className="tokenContainer" onClick={this.nextToken3}>
                    <img src={ded7} width="150" alt="3_pairs" />
                    <h1>{points7}</h1>
                </button>
            </div>
        )
    }
    nextToken() {
        let legalMove = false;
        if (legalMove === false) {
            return;
        }
        for (var i = 0; i < Array.length; i++) {
            fIndex += 1;
            this.forceUpdate();
        }
    }

    nextToken2() {
        let legalMove = true;
        if (legalMove === false) {
            return;
        }
        for (var i = 0; i < Array.length; i++) {
            pIndex += 1;
            this.forceUpdate();
        }
    }

    nextToken3() {
        let legalMove = true;
        if (legalMove === false) {
            return;
        }
        for (var i = 0; i < Array.length; i++) {
            sIndex += 1;
            this.forceUpdate();
        }
    }

}

export default DedicationToken;