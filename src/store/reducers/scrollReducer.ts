import { ScrollAction, ScrollActionTypes } from "../../types/scroll";

const initialState: number = 0;

export const scrollReducer = (state: number = initialState, action: ScrollAction): number => {
    switch (action.type) {
        case ScrollActionTypes.CHANGE_SCROLL:
            return action.payload;
        default:
            return state;
    }
};
