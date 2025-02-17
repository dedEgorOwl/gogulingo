import { LoginInputAction, LoginInputActionTypes, LoginInputState } from "../../types/login";

const initialState: LoginInputState = {
    login: "",
    password: "",
    email: "",
    type: null,
};

export const loginReducer = (state: LoginInputState = initialState, action: LoginInputAction): LoginInputState => {
    switch (action.type) {
        case LoginInputActionTypes.CHANGE_LOGIN_INPUT:
            return { ...state, login: action.payload };
        case LoginInputActionTypes.CHANGE_PASSWORD_INPUT:
            return { ...state, password: action.payload };
        case LoginInputActionTypes.CHANGE_EMAIL_INPUT:
            return { ...state, password: action.payload };
        case LoginInputActionTypes.CHANGE_LOGIN_TYPE:
            return { ...state, type: action.payload };
        default:
            return state;
    }
};
