import { combineReducers } from 'redux';
import { languageReducer } from './languageReducer';
import { scrollReducer } from './scrollReducer';
import { modalsReducer } from './modalsReducer';
import { currentUserReducer } from './currentUser';

export const rootReducer = combineReducers({
	language: languageReducer,
	scroll: scrollReducer,
	modals: modalsReducer,
	currentUser: currentUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
