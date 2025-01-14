import * as ScrollActionCreators from "./scroll";
import * as LanguageActionCreators from "./language";
import * as ModalsActionCreators from "./modals";
import * as LoginActionCreators from "./login";

export default {
    ...ScrollActionCreators,
    ...LanguageActionCreators,
    ...ModalsActionCreators,
    ...LoginActionCreators,
};
