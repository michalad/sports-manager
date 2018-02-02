"use strict"
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
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
            <Route path="/" exact component={SportEventsPage}/>
            <Route path="/details" component={SportEventDetailsPage}/>
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

// STEP 2 create and dispatch actions.js
store.dispatch({
    type: "POST_BOOK",
    payload: {
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description ',
        price: 33.33
    }
});
