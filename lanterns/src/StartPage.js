import React from 'react';
import './StartPage.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StylesProvider } from "@material-ui/styles";

class StartPage extends React.Component {

    // goToGame = (path) => {
    //     this.props.history.push(path);
    // }

    render() {
        return (

            <div className="startPage">
                <img className="lanternsImage" />
                <StylesProvider injectFirst>
                    <Button className="menuButton startButton" component={Link} to="/game">
                        Start Game
                    </Button>
                </StylesProvider>

                <Button className="menuButton howToButton" >
                    How To Play
                </Button>

            </div>
        );
    }
}

export default StartPage;
