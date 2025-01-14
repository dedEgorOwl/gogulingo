import { ModalsAction, ModalsActionTypes, ModalsState } from "../../types/modals";

const initialState: ModalsState = {
    login: false,
    errors: false,
};

export const modalsReducer = (state: ModalsState = initialState, action: ModalsAction): ModalsState => {
    switch (action.type) {
        case ModalsActionTypes.CHANGE_IS_ERROR_ACTIVE:
            return { ...state, errors: action.payload };
        case ModalsActionTypes.CHANGE_IS_LOGIN_ACTIVE:
            return { ...state, login: action.payload };
        default:
            return state;
    }
};
