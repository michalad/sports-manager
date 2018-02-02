"use strict"
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import crateReduxStore from './app/createStore';

import SportEventsPage from './components/pages/sportEventsPage';
import SportEventDetailsPage from './components/pages/sportEventDetailsPage';

const store = crateReduxStore();

// STEP 1 create the store
const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            Sports manager
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

store.subscribe(function () {
    console.log('current state is: ', store.getState());
    console.log('current price: ', store.getState().price);
});
