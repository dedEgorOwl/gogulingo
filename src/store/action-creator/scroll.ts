import { Dispatch } from "redux";
import { ScrollAction, ScrollActionTypes } from "../../types/scroll";

export const ChangeScroll = (position: number) => {
    return (dispatch: Dispatch<ScrollAction>) => {
        dispatch({ type: ScrollActionTypes.CHANGE_SCROLL, payload: position });
    };
};
