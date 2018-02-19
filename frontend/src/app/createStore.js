import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

export default function createReduxStore() {

    let middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        const { logger } = require(`redux-logger`);
        middleware = [...middleware, logger];
    }

    return createStore(
        rootReducers,
        applyMiddleware(...middleware),
    );
}
