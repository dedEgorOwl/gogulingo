import { combineReducers } from "redux";
import { languageReducer } from "./languageReducer";
import { scrollReducer } from "./scrollReducer";
import { modalsReducer } from "./modalsReducer";

export const rootReducer = combineReducers({
    language: languageReducer,
    scroll: scrollReducer,
    modals: modalsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
