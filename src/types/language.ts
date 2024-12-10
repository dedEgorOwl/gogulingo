export interface LanguageState {
    language: string;
}

export interface LanguageAction {
    type: string;
    payload: string;
}

export enum LanguageActionTypes {
    CHANGE_LANGUAGE_TO_RUS = "CHANGE_LANGUAGE_TO_RUS",
    CHANGE_LANGUAGE_TO_ENG = "CHANGE_LANGUAGE_TO_ENG",
}
