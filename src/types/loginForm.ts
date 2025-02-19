import { IUser } from "../models/IUser";

export interface loginFormState {
    isAuth: boolean;
    currentUser: IUser;
}

export interface LoginFormActionPayload {
    email: string;
    password: string;
    username?: string;
}

export interface LoginFormAction {
    type: string;
    payload?: LoginFormActionPayload;
}

export enum LoginFormActionTypes {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    LOGOUT = "LOGOUT",
}
