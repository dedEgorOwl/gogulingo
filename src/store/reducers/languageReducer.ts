import { LanguageAction, LanguageActionTypes, LanguageState } from "../../types/language";

const initialState: LanguageState = {
    language: "ru",
};

export const languageReducer = (state: LanguageState = initialState, action: LanguageAction): LanguageState => {
    switch (action.type) {
        case LanguageActionTypes.CHANGE_LANGUAGE_TO_RU:
            return { language: "ru" };
        case LanguageActionTypes.CHANGE_LANGUAGE_TO_ENG:
            return { language: "eng" };
        default:
            return state;
    }
};
