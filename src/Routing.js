import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Display from './Display';

class Routing extends Component {
    render() {
        return (
            <div>
                 <Router>
                     <Switch>
                    <Route exact path = "/" component = {Login} />
                    <Route exact path = "/Display" component = {Display} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routing
