import { Dispatch } from "redux";
import { LanguageAction, LanguageActionTypes } from "../../types/language";

export const ChangeLanguage = (language: string) => {
    return (dispatch: Dispatch<LanguageAction>) => {
        if (language === "ru") dispatch({ type: LanguageActionTypes.CHANGE_LANGUAGE_TO_ENG });
        if (language === "eng") dispatch({ type: LanguageActionTypes.CHANGE_LANGUAGE_TO_RU });
    };
};
