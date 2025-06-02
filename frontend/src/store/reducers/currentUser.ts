import { CurrentUserAction, CurrentUserActionTypes, CurrentUserState } from '../../types/currentUser';

const initialState: CurrentUserState = {
	username: '',
	email: '',
	password: '',
	role: '',
	tasks: [0, 0, 0],
	isActivated: false,
	activationLink: '',
};

export const currentUserReducer = (state: CurrentUserState = initialState, action: CurrentUserAction): CurrentUserState => {
	switch (action.type) {
		case CurrentUserActionTypes.SET_CURRENT_USER:
			const payloadUser = action.payload;
			return { ...payloadUser };
		default:
			return state;
	}
};
