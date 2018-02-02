import {combineReducers} from 'redux';

const reducer = function (state = {}, action) {
    switch (action.type) {
        case 'SPORT_EVENTS_LOADED': {
            return  action.sportEvents;
        }
        default: {
            return [];
        }
    }
};


export default combineReducers({
    sportEvents: reducer,
    standings: () => [],
    results: () => [],
});