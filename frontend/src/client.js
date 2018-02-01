"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import SportEventsPage from './components/pages/sportEventsPage';
import SportEventDetailsPage from './components/pages/sportEventDetailsPage';

//STEP 3 define reducers
const reducer = function(state = {}, action) {
  switch (action.type) {
    case "POST_BOOK":
      return state = action.payload;
      break;
  }

  return state
}
// STEP 1 create the store

const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Sports manager
    </header>
    <main>
      <Route path="/" exact component={SportEventsPage} />
      <Route path="/details" component={SportEventDetailsPage} />
    </main>
  </div>
)

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

render(<App />, document.getElementById('app'));

store.subscribe(function() {
  console.log('current state is: ', store.getState());
  console.log('current price: ', store.getState().price);
})

// STEP 2 create and dispatch actions
store.dispatch({
  type: "POST_BOOK",
  payload: {
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description ',
    price: 33.33
  }
})
