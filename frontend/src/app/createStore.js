import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import logger from 'redux-logger';

export default function createReduxStore() {
    const store = createStore(
        rootReducers,
        applyMiddleware(thunk, logger),
    );
    return store;
}
