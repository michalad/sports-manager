import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import loginReducers from '../components/login/loginReducers';
import sportsEventsReducers from '../components/sportsevents/sportsEventsReducers'
import notificationReducers from '../components/notifications/notificationsReducers';
import matchResultDialogReducers from '../components/matchResultDialog/matchResultDialogReducers';

const matchesReducers = (prevState = [], action) => {
    switch (action.type) {
        case 'MATCHES_LOADED': {
            return action.matches;
        }
        case 'NEW_MATCH_RESULT_SAVED': {
            return [...prevState, action.matchResult];
        }
        default: {
            return [...prevState];
        }
    }
};


const teamsReducers = (prevState = [], action) => {
    switch (action.type) {
        case 'TEAMS_LOADED': {
            return action.teams;
        }
        case 'NEW_TEAM_SAVED': {
            return [...prevState, action.team];
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
            return [...state];
    }
};


export default combineReducers({
    form: formReducer,
    sportEvents: sportsEventsReducers,
    matches: matchesReducers,
    standings: standingsReducer,
    teams: teamsReducers,
    auth: loginReducers,
    notification: notificationReducers,
    matchResultDialog: matchResultDialogReducers
});