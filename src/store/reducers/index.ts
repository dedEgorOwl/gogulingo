import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { languageReducer } from "./languageReducer";
import { scrollReducer } from "./scrollReducer";
import { modalsReducer } from "./modalsReducer";
import { loginFormReducer } from "./loginFormReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    language: languageReducer,
    scroll: scrollReducer,
    modals: modalsReducer,
    loginForm: loginFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
