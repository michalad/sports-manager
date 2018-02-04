import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'


const reducer = function (prevState = [], action) {
    switch (action.type) {
        case 'SPORT_EVENTS_LOADED':
            return action.sportEvents;
        default:
            return [];

    }
};

const matchesReducers = (prevState = [], action) => {
    switch (action.type) {
        case 'MATCHES_LOADED': {
            return  action.matches;
        }
        case 'NEW_MATCH_RESULT_SAVED': {
            return [...prevState, action.matchResult];
        }
        default: {
            return [...prevState];
        }
    }
};

const standingsReducer = function (state = [], action) {
    switch (action.type) {
        case 'STANDINGS_LOADED':
            return action.standings;
        default:
            console.log('returning default');
            return [...state];
    }
};


export default combineReducers({
    form: formReducer,
    sportEvents: reducer,
    matches: matchesReducers,
    standings: standingsReducer,
});