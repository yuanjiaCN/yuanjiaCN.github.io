import React, { Component } from 'react';
import { Route ,Switch, Redirect, BrowserRouter,HashRouter  } from 'react-router-dom'
import Home from "../component/example/example"
import About from "../component/about/About"
import Increment from '../component/example/example'
class Roo extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/example" component={Increment} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Roo;