import TokenStorage from "../../auth/TokenStorage";

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

const createNewEvent = (newSportEvent) => (dispatch) => {
    return fetch('/api/sport-events', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': TokenStorage.authHeader()
        },
        body: JSON.stringify(newSportEvent),
    })
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

export {loadSportEvents, createNewEvent};