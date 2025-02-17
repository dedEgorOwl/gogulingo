import { LoginInputAction, LoginInputActionTypes } from "./../../types/login";
import { Dispatch } from "redux";

export const ChangeLoginType = (type: string) => {
    return (dispatch: Dispatch<LoginInputAction>) => {
        dispatch({ type: LoginInputActionTypes.CHANGE_LOGIN_TYPE, payload: type });
    };
};

export const ChangeLoginInputs = (inputType: string, inputText: string) => {
    return (dispatch: Dispatch<LoginInputAction>) => {
        if (inputType === "login") dispatch({ type: LoginInputActionTypes.CHANGE_LOGIN_INPUT, payload: inputText });
        if (inputType === "password") dispatch({ type: LoginInputActionTypes.CHANGE_PASSWORD_INPUT, payload: inputText });
        if (inputType === "email") dispatch({ type: LoginInputActionTypes.CHANGE_EMAIL_INPUT, payload: inputText });
    };
};
