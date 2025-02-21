import { LanguageAction, LanguageActionTypes } from "../../types/language";

const initialState: string = "ru";

export const languageReducer = (state: string = initialState, action: LanguageAction): string => {
    switch (action.type) {
        case LanguageActionTypes.CHANGE_LANGUAGE_TO_RU:
            return "ru";
        case LanguageActionTypes.CHANGE_LANGUAGE_TO_ENG:
            return "eng";
        default:
            return state;
    }
};
