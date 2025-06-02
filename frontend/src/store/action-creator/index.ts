import * as ScrollActionCreators from './scroll';
import * as LanguageActionCreators from './language';
import * as ModalsActionCreators from './modals';
import * as CurrentUserActionCreators from './currentUser';

export default {
	...ScrollActionCreators,
	...LanguageActionCreators,
	...ModalsActionCreators,
	...CurrentUserActionCreators,
};
