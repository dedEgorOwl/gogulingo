import { LoginInputAction, LoginInputActionTypes, LoginInputState } from "../../types/login";

const initialState: LoginInputState = {
    login: "",
    password: "",
};

export const loginReducer = (state: LoginInputState = initialState, action: LoginInputAction): LoginInputState => {
    switch (action.type) {
        case LoginInputActionTypes.CHANGE_LOGIN_INPUT:
            return { ...state, login: action.payload };
        case LoginInputActionTypes.CHANGE_PASSWORD_INPUT:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
