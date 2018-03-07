import TokenStorage from "../auth/TokenStorage";
import {showNotification} from "../components/notifications/notificationActions";

const loadStandings = (id) => (dispatch) => {
    return fetch(`/api/sport-events/${id}/table`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((standings) => {
                dispatch({
                    type: 'STANDINGS_LOADED',
                    standings
                })
            }
        );
};

const loadMatches = (sportEventId) => (dispatch) => {
    return fetch(`/api/sport-events/${sportEventId}/matches`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((matches) =>
            dispatch({
                type: 'MATCHES_LOADED',
                matches
            })
        );
};

const loadTeams = (sportEventId) => (dispatch) => {
    return fetch(`/api/sport-events/${sportEventId}/teams`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((teams) =>
            dispatch({
                type: 'TEAMS_LOADED',
                teams
            })
        );
};

const addMatchResult = (newMatchResult) => (dispatch) => {
    return fetch(`/api/sport-events/${newMatchResult.sportEventId}/matches`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': TokenStorage.authHeader()
        },
        body: JSON.stringify({
            teamA: {
                name: newMatchResult.teamAName,
                result: newMatchResult.teamAResult
            },
            teamB: {
                name: newMatchResult.teamBName,
                result: newMatchResult.teamBResult
            }
        },),
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((matchResult) => {
                dispatch({
                    type: 'NEW_MATCH_RESULT_SAVED',
                    matchResult
                });
                dispatch(loadStandings(newMatchResult.sportEventId));
                dispatch(showNotification(`Match result has been added.`));
            }
        );
};

const addTeam = (newTeam) => (dispatch) => {
    return fetch(`/api/sport-events/${newTeam.sportEventId}/teams`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': TokenStorage.authHeader()
        },
        body: JSON.stringify({
            name: newTeam.name
        },),
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((team) => {
                dispatch({
                    type: 'NEW_TEAM_SAVED',
                    team
                });
                dispatch(showNotification(`Team: ${team.name} has been added`));
            }
        );
};

export {loadMatches, addMatchResult, loadStandings, addTeam, loadTeams};

