import { LoginFormAction, LoginFormActionTypes } from "./../../types/loginForm";
import { Dispatch } from "redux";

export const LoginRequest = (email: string, password: string) => {
    return (dispatch: Dispatch<LoginFormAction>) => {
        dispatch({ type: LoginFormActionTypes.LOGIN, payload: { email: email, password: password } });
    };
};

export const LogoutRequest = () => {
    return (dispatch: Dispatch<LoginFormAction>) => {
        dispatch({ type: LoginFormActionTypes.LOGOUT });
    };
};

export const RegisterRequest = (email: string, password: string, username: string) => {
    return (dispatch: Dispatch<LoginFormAction>) => {
        dispatch({ type: LoginFormActionTypes.REGISTER, payload: { email: email, password: password, username: username } });
    };
};
