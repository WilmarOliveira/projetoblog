import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import New from './components/New';

const Routes = () => {

    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;