"use strict"
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import crateReduxStore from './app/createStore';

import SportEventsPage from './components/pages/sportEventsPage';
import SportEventDetailsPage from './components/pages/sportEventDetailsPage';
import LoginPage from "./components/login/LoginPage";
import SportsManagerAppBar from "./components/appbar/SportsManagerAppBar";

const store = crateReduxStore();

// STEP 1 create the store
const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            <SportsManagerAppBar />
        </header>
        <main>
            <Switch>
                <Route path='/sport-events/:id' exact component={SportEventDetailsPage}/>
                <Route path="/sport-events" exact component={SportEventsPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Redirect path="/" exact to="/sport-events"/>
            </Switch>
        </main>
    </div>
);

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <PrimaryLayout/>
        </BrowserRouter>
    </Provider>
);

render(<App/>, document.getElementById('app'));