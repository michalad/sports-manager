const initialState = {
    show: false,
    message: ''

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SHOW_NOTIFICATION': {
            return {
                message: action.message,
                show: true
            }
        }
        case 'CLOSE_NOTIFICATION': {
            return {
                show: false
            }

        }
    }
    return state;
}