import { Dispatch } from 'redux';
import { CurrentUserAction, CurrentUserActionTypes } from '../../types/currentUser';
import AuthService from '../../services/AuthService';
import axios from 'axios';

export const LoginUser = (email: string, password: string) => {
	return async (dispatch: Dispatch<CurrentUserAction>) => {
		try {
			const response = await AuthService.login(email, password);
			console.log(response);
			localStorage.setItem('token', response.data.accessToken);
			dispatch({ type: CurrentUserActionTypes.SET_CURRENT_USER, payload: response.data.user });
		} catch (error) {
			console.log(error);
		}
	};
};

export const RegistrationUser = (username: string, email: string, password: string) => {
	return async (dispatch: Dispatch<CurrentUserAction>) => {
		try {
			const response = await AuthService.registration(username, email, password);
			console.log(response);
			localStorage.setItem('token', response.data.accessToken);
			dispatch({ type: CurrentUserActionTypes.SET_CURRENT_USER, payload: response.data.user });
		} catch (error) {
			console.log(error);
		}
	};
};

export const LogoutUser = () => {
	return async (dispatch: Dispatch<CurrentUserAction>) => {
		try {
			const response = await AuthService.logout();
			console.log(response);
			localStorage.removeItem('token');
			dispatch({
				type: CurrentUserActionTypes.SET_CURRENT_USER,
				payload: {
					username: '',
					email: '',
					password: '',
					role: '',
					tasks: [0, 0, 0],
					isActivated: false,
					activationLink: '',
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const СheckAuthUser = () => {
	return async (dispatch: Dispatch<CurrentUserAction>) => {
		try {
			const response = await axios.get(`http://localhost:5000/api/refresh`, { withCredentials: true });
			localStorage.setItem('token', response.data.accessToken);
			dispatch({
				type: CurrentUserActionTypes.SET_CURRENT_USER,
				payload: response.data.user,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
