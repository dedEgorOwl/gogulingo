import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { languageReducer } from "./languageReducer";
import { scrollReducer } from "./scrollReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    language: languageReducer,
    scroll: scrollReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
