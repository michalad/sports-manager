function openMatchResultDialog() {
    return {
        type: 'OPEN_MATCH_RESULT_DIALOG',
    }
}

function closeMatchResultDialog() {
    return {
        type: 'CLOSE_MATCH_RESULT_DIALOG',
    }
}

export {openMatchResultDialog, closeMatchResultDialog};