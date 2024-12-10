import { ScrollAction, ScrollActionTypes, ScrollState } from "../../types/scroll";

const initialState: ScrollState = {
    scroll: 0,
};

export const scrollReducer = (state: ScrollState = initialState, action: ScrollAction): ScrollState => {
    console.log(action.payload);

    switch (action.type) {
        case ScrollActionTypes.CHANGE_SCROLL:
            return { scroll: action.payload };
        default:
            return state;
    }
};
