class TokenStorage {

    static authenticateUser(user) {
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

    static authHeader() {
        let token = localStorage.getItem('token');

        if (token) {
            return 'Bearer ' + token;
        } else {
            return '';
        }
    }

}

export default TokenStorage;