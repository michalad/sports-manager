import TokenStorage from "../../auth/TokenStorage";

const loginReducers = (prevState = {
    user: {
        isAuthenticated: TokenStorage.isUserAuthenticated()
    }
}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL': {
            return {user: action.user};
        }
        case 'LOGIN_FAILED': {
            return {user: action.user};
        }
        case 'LOGOUT':
            return {user: action.user};
        default: {
            return prevState;
        }
    }
};

export default loginReducers;