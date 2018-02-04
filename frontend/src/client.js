"use strict"
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import crateReduxStore from './app/createStore';

import SportEventsPage from './components/pages/sportEventsPage';
import SportEventDetailsPage from './components/pages/sportEventDetailsPage';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const store = crateReduxStore();

// STEP 1 create the store
const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton  color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" >
                        Sports manager
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
        <main>
            <Switch>
                <Route path='/sport-events/:id' exact component={SportEventDetailsPage}/>
                <Route path="/sport-events" exact component={SportEventsPage}/>
                <Redirect path="/" exact to="/sport-events"/>
            </Switch>
        </main>
    </div>
)

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <PrimaryLayout/>
        </BrowserRouter>
    </Provider>
);

render(<App/>, document.getElementById('app'));