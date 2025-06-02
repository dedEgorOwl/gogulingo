import $api from '../http';

export default class AuthService {
	static async login(email, password) {
		return $api.post('http://localhost:5000/api/login', { email, password });
	}

	static async registration(username, email, password) {
		return $api.post('http://localhost:5000/api/registration', { username, email, password });
	}

	static async logout() {
		return $api.post('http://localhost:5000/api/logout');
	}
}
