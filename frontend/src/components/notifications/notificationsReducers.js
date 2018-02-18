const initialState = {
    show: false,
    message: ''

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SHOW_NOTIFICATION': {
            return action.notification

        }
        case 'CLOSE_NOTIFICATION': {
            return action.notification

        }
    }
    return state;
}