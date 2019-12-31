import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';

const Routes = () => {

    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;