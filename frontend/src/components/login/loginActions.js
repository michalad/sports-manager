import TokenStorage from "../../auth/TokenStorage";

const login = (loginData) => (dispatch) => {
    return fetch(`/api/login`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            username: loginData.username,
            password: loginData.password
        },),
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((user) => {
                if (user.success) {
                    TokenStorage.authenticateUser(user);
                    dispatch({
                        type: 'LOGIN_SUCCESSFUL',
                        user: {
                            isAuthenticated: true
                        }
                    });
                } else {
                    dispatch({
                        type: 'SHOW_NOTIFICATION',
                        notification: {
                            show: true,
                            message: user.message
                        }
                    });
                }
            }
        );
};

const  logout = () => (dispatch) => {
    TokenStorage.logoutUser();
    return dispatch({
        type: 'LOGOUT',
        user: {
            isAuthenticated: false
        }
    });
};

export {login, logout};