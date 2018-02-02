import {combineReducers} from 'redux';

const reducer = function (state = {}, action) {
    switch (action.type) {
        default: return [
            {
                id: "1",
                date: '20-01-2018',
                name: 'Piłeczka'
            },
            {
                id: "2",
                date: '20-02-2018',
                name: 'Piłeczka na hali'
            },
            {
                id: "3",
                date: '20-03-2018',
                name: 'Siatkówka na hali'
            }
        ]
    }
};


export default combineReducers({
    sportEvents: reducer,
    standings: () => [],
    results: () => [],
});