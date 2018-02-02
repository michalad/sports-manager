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
    matches: () => [
        {
            teamA: {
                name: "A",
                result: 2
            },
            teamB: {
                name: "C",
                result: 5
            }
        },
        {
            teamA: {
                name: "B",
                result: 1
            },
            teamB: {
                name: "C",
                result: 3
            }
        }
    ],
});