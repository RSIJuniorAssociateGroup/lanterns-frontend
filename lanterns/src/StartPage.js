import React from 'react';
import './StartPage.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StylesProvider } from "@material-ui/styles";

class StartPage extends React.Component {

    openRulesWindow() {
        window.open('https://static1.squarespace.com/static/54148cdae4b05a3412bfa19b/t/5b2dc4cc1ae6cf364b9271c9/1529726208175/lanterns_rulebook_v2.pdf', "_blank");
    }

    render() {
        return (

            <div className="startPage">
                <img className="lanternsImage" />
                <StylesProvider injectFirst>
                    <Button className="menuButton startButton" component={Link} to="/game">
                        Start Game
                    </Button>

                    <Button className="menuButton howToButton" onClick={this.openRulesWindow}>
                        How To Play
                    </Button>
                </StylesProvider>
            </div>
        );
    }
}

export default StartPage;
