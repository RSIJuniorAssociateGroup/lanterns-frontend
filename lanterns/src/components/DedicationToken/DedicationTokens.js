import React from "react";
import ded4 from '../../pictures/4_of_a_Kind.jpg';
import dedPairs from '../../pictures/3_pairs.jpg';
import ded7 from '../../pictures/7_unique.jpg';
import './ded.css';

// Tie this component to 'player hand'  ex:
// initialize 'Honor Array': playerDedicationTokens = []
// Push 'Honor Points' to player 'Honor Array': playerDedicationTokens.push(points4);
// Add up points in 'Honor Array': let playerHonor = playerDedicationTokens.reduce((a, b) => a + b, 0);


// Tie in to this component from 'Lantern Cards' in 'player hand' Ex.:
// Bool: sufficient cards to make trade?  T/F




class DedicationToken extends React.Component {
    state = {
        fIndex: 0,
        pIndex: 0,
        sIndex: 0,
        fourTokensStack: [],
        pairsTokenStack: [],
        sevenTokensStack: [],

    }
    constructor(props) {
        super(props);
        this.buyToken = this.buyToken.bind(this);
    };

    setDedicationStacks() {
        switch (this.props.playerCount) {
            case 2:
                this.setState({
                    fourTokensStack: [8, 7, 6, 5, 5, 4, 'generic'],
                    pairsTokenStack: [9, 8, 7, 6, 5, 5, 'generic'],
                    sevenTokensStack: [10, 9, 8, 7, 6, 5, 'generic']
                });
                break;
            case 3:
                this.setState({
                    fourTokensStack: [8, 7, 6, 6, 5, 5, 5, 4, 'generic'],
                    pairsTokenStack: [9, 8, 7, 7, 6, 6, 5, 5, 'generic'],
                    sevenTokensStack: [10, 9, 8, 8, 7, 7, 6, 5, 'generic']
                });
                break;
            case 4:
                this.setState({
                    fourTokensStack: [8, 7, 7, 6, 6, 5, 5, 5, 4, 'generic'],
                    pairsTokenStack: [9, 8, 8, 7, 7, 6, 6, 5, 5, 'generic'],
                    sevenTokensStack: [10, 9, 9, 8, 8, 7, 7, 6, 5, 'generic']
                });
                break;
        }
    }

    componentWillMount() {
        this.setDedicationStacks();
    }

    render() {
        // Backend arrays of tokens?

        let points4 = this.state.fourTokensStack[this.state.fIndex];
        let pointsPairs = this.state.pairsTokenStack[this.state.pIndex];
        let points7 = this.state.sevenTokensStack[this.state.sIndex];

        return (
            <div className="tokenHand">
                <button data-id="1" className="tokenContainer" onClick={this.buyToken}>
                    <img src={ded4} width="150" alt="Four Of A Kind" />
                    <h1>{points4}</h1>
                </button>
                <button data-id="2" className="tokenContainer" onClick={this.buyToken}>
                    <img src={dedPairs} width="150" alt="Three Pairs" />
                    <h1>{pointsPairs}</h1>
                </button>
                <button data-id="3" className="tokenContainer" onClick={this.buyToken}>
                    <img src={ded7} width="150" alt="One of Each" />
                    <h1>{points7}</h1>
                </button>
            </div>
        )
    }

    buyToken(e) {
        if (e.currentTarget.dataset.id === "1" && this.props.checkDedication(4)) {
            this.props.getDedication(this.state.fourTokensStack[this.state.fIndex])
            if (this.state.fIndex + 1 !== this.state.fourTokensStack.length) {
                this.setState({ fIndex: this.state.fIndex + 1 });
            }
        } else if (e.currentTarget.dataset.id === '2' && this.props.checkDedication(2)) {
            this.props.getDedication(this.state.pairsTokenStack[this.state.pIndex])
            if (this.state.pIndex + 1 !== this.state.pairsTokenStack.length) {
                this.setState({ pIndex: this.state.pIndex + 1 });
            }
        } else if (e.currentTarget.dataset.id === '3' && this.props.checkDedication(7)) {
            this.props.getDedication(this.state.sevenTokensStack[this.state.sIndex])
            if (this.state.sIndex + 1 !== this.state.sevenTokensStack.length) {
                this.setState({ sIndex: this.state.sIndex + 1 });
            }
        }
    }
}

export default DedicationToken;