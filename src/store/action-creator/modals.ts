import { Dispatch } from "redux";
import { ModalsAction, ModalsActionTypes } from "../../types/modals";

export const ChangeModalState = (modal: string, state: boolean) => {
    return (dispatch: Dispatch<ModalsAction>) => {
        if (modal === "login") dispatch({ type: ModalsActionTypes.CHANGE_IS_LOGIN_ACTIVE, payload: state });
        if (modal === "error") dispatch({ type: ModalsActionTypes.CHANGE_IS_ERROR_ACTIVE, payload: state });
    };
};
