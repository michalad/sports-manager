const reducer = function (prevState = [], action) {
    switch (action.type) {
        case 'SPORT_EVENTS_LOADED':
            return action.sportEvents;
        case 'NEW_SPORT_EVENT_SAVED':
            return [...prevState, action.sportEvent];
        default:
            return [...prevState];

    }
};

export default reducer;