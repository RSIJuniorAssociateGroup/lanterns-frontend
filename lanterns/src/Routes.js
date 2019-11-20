import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartPage from './StartPage'
import App from './App';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={StartPage} />
                    <Route path='/game' component={App} />
                </Switch>
            </Router>
        );
    }
}

export default Routes