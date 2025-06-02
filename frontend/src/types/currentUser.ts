export interface CurrentUserState {
	username: string;
	email: string;
	password: string;
	role: string;
	tasks: Array<Number>;
	isActivated: boolean;
	activationLink: string;
}

export interface CurrentUserAction {
	type: string;
	payload: CurrentUserState;
}

export enum CurrentUserActionTypes {
	SET_CURRENT_USER = 'SET_CURRENT_USER',
}
