"use strict"
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import crateReduxStore from './app/createStore';

import SportEventsPage from './components/sportsevents/SportsEventsPage';
import SportEventDetailsPage from './components/sporteventdetails/sportEventDetailsPage';
import LoginPage from "./components/login/LoginPage";
import SportsManagerAppBar from "./components/appbar/SportsManagerAppBar";

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

const store = crateReduxStore();
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

// STEP 1 create the store
const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            <SportsManagerAppBar/>
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
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <BrowserRouter>
                <PrimaryLayout/>
            </BrowserRouter>
        </Provider>
    </JssProvider>
);

render(<App/>, document.getElementById('app'));