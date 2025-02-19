import * as ScrollActionCreators from "./scroll";
import * as LanguageActionCreators from "./language";
import * as ModalsActionCreators from "./modals";

export default {
    ...ScrollActionCreators,
    ...LanguageActionCreators,
    ...ModalsActionCreators,
};
