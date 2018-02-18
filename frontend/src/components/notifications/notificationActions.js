const showNotification = (message) => (dispatch) => {
    return dispatch({
        type: 'SHOW_NOTIFICATION',
        notification: {
            show: true,
            message: message
        }
    });
};

const closeNotification = () => (dispatch) => {
    return dispatch({
        type: 'CLOSE_NOTIFICATION',
        notification: {
            show: false
        }
    });
};

export {showNotification, closeNotification};