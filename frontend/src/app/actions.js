const loadSportEvents = () => (dispatch) => {
    return fetch('/api/sport-events')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((sportEvents) =>
            dispatch({
                type: 'SPORT_EVENTS_LOADED',
                sportEvents
            })
        );
};

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

const createNewEvent = (newSportEvent) => (dispatch) => {
    return fetch('/api/sport-events', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(newSportEvent),})
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((sportEvent) =>
            dispatch({
                type: 'NEW_SPORT_EVENT_SAVED',
                sportEvent
            })
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



const addMatchResult = (newMatchResult) => (dispatch) => {
    return fetch(`/api/sport-events/${newMatchResult.sportEventId}/matches`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
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
            }
        );
};

export {loadSportEvents, createNewEvent, loadMatches, addMatchResult, loadStandings};

