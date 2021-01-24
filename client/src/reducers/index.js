import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import alertsReducer from './alertsReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import themeReducer from './themeReducer';

export default combineReducers({
    // Theming
    theme: themeReducer,

    // Boardlists
    lists: listsReducer,

    // User and Authentification
    alert: alertsReducer,
    auth: authReducer,
    profile: profileReducer,
});
