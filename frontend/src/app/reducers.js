import {combineReducers} from 'redux';

const reducer = function (state = {}, action) {
    switch (action.type) {
        case 'SPORT_EVENTS_LOADED':
            return action.sportEvents;
        default:
            return [];

    }
};

const matchesReducer = function (state = {}, action) {
    switch (action.type) {
        case 'MATCHES_LOADED':
            return action.matches;
        default:
            return [];

    }
};

const standingsReducer = function (state = {}, action) {
    switch (action.type) {
        case 'STANDINGS_LOADED':
            return action.standings;
        default:
            console.log('returning default');
            return [];
    }
};


export default combineReducers({
    sportEvents: reducer,
    standings: standingsReducer,
    matches: matchesReducer,
});