export * from './listsAction';
export * from './cardsAction';

export * from './alertActions';
export * from './authActions';
export * from './profileActions';

export * from './themeActions';

export const CONSTANTS = {

    /**
     * Toggle Theme
     */

    TOGGLE_THEME: 'TOGGLE_THEME',


    /**
     * Add / Get Card or List to Board
     */

    ADD_CARD: 'ADD_CARD',
    ADD_LIST: 'ADD_LIST',
    DRAG_FINISHED: 'DRAG_FINISHED',

    GET_LISTS: 'GET_LISTS',

    /**
     *  User & Authentification
     */

    SET_ALERT: 'SET_ALERT',
    REMOVE_ALERT: 'REMOVE_ALERT',

    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL',
    USER_LOADED: 'USER_LOADED',
    AUTH_ERROR: 'AUTH_ERROR',

    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',

    LOGOUT: 'LOGOUT',
    CLEAR_PROFILE: 'CLEAR_PROFILE',

    GET_POFILE: 'GET_PROFILE',
    ERROR_PROFILE: 'ERROR_PROFILE',
};
