export interface ModalsState {
    errors: boolean;
    login: boolean;
}

export interface ModalsAction {
    type: string;
    payload: boolean;
}

export enum ModalsActionTypes {
    CHANGE_IS_LOGIN_ACTIVE = "CHANGE_IS_LOGIN_ACTIVE",
    CHANGE_IS_ERROR_ACTIVE = "CHANGE_IS_ERROR_ACTIVE",
}
