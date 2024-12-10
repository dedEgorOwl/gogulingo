export interface LoginInputState {
    login: string;
    password: string;
}

export interface LoginInputAction {
    type: string;
    payload: string;
}

export enum LoginInputActionTypes {
    CHANGE_LOGIN_INPUT = "CHANGE_LOGIN_INPUT",
    CHANGE_PASSWORD_INPUT = "CHANGE_PASSWORD_INPUT",
}
