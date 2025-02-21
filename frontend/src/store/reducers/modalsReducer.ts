import { ModalsAction, ModalsActionTypes, ModalsState } from "../../types/modals";

const initialState: ModalsState = {
    login: false,
};

export const modalsReducer = (state: ModalsState = initialState, action: ModalsAction): ModalsState => {
    switch (action.type) {
        case ModalsActionTypes.CHANGE_IS_LOGIN_ACTIVE:
            return { ...state, login: action.payload };
        default:
            return state;
    }
};
