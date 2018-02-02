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

export {loadSportEvents};

