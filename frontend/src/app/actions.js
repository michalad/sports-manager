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

const loadMatches = (id) => (dispatch) => {
    return fetch(`/api/sport-events/${id}/matches`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((matches) => {
                dispatch({
                    type: 'MATCHES_LOADED',
                    matches
                })
            }
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
    newSportEvent.preventDefault();
    return fetch('/api/sport-events', {method: 'POST', body: JSON.stringify(newSportEvent)})
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

export {loadSportEvents, createNewEvent, loadMatches, loadStandings};

