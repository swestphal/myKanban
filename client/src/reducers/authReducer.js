import { CONSTANTS } from '../actions';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CONSTANTS.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };
        case CONSTANTS.REGISTER_SUCCESS:
        case CONSTANTS.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };
        case CONSTANTS.REGISTER_FAIL:
        case CONSTANTS.AUTH_ERROR:
        case CONSTANTS.LOGIN_FAIL:
        case CONSTANTS.LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            };

        default:
            return state;
    }
}

export default authReducer