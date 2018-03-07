const reducer = function (prevState = [], action) {
    switch (action.type) {
        case 'SPORT_EVENTS_LOADED':
            return action.sportEvents;
        case 'NEW_SPORT_EVENT_SAVED':
            return [action.sportEvent, ...prevState];
        default:
            return [...prevState];

    }
};

export default reducer;