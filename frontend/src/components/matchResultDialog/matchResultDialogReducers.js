const initialState = {
    isOpen: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MATCH_RESULT_DIALOG': {
            return {
                isOpen: true
            }
        }
        case 'CLOSE_MATCH_RESULT_DIALOG': {
            return {
                isOpen: false
            }
        }
    }
    return state;
}