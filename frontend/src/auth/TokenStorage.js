class TokenStorage {

    static authenticateUser(user) {
        console.log('DEBUG: ' + user);
        localStorage.setItem('token', user.token);
        localStorage.setItem('username', user.username);
    }

    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    static logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static authHeader() {
        let token = localStorage.getItem('token');

        if (token) {
            return {'Authorization': 'Bearer ' + token};
        } else {
            return {};
        }
    }

}

export default TokenStorage;