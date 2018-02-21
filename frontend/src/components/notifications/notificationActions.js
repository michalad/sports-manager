function showNotification(message) {
    return {
        type: 'SHOW_NOTIFICATION',
        message: message
    }
}

function closeNotification() {
    return {
        type: 'CLOSE_NOTIFICATION',
    }
}

export {showNotification, closeNotification};