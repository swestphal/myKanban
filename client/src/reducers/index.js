import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import alertsReducer from './alertsReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    // Boardlists
    lists: listsReducer,

    // User and Authentification
    alert: alertsReducer,
    auth: authReducer,
    profile: profileReducer,
});
