import axios from 'axios';
import { CONSTANTS } from '../actions';
import { setAlert } from './alertActions';
import setAuthToken from '../utils/setAuthToken';
// load user

export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: CONSTANTS.USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: CONSTANTS.AUTH_ERROR,
        });
    }
};

// register user
export const register = ({ name, email, password }) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: CONSTANTS.REGISTER_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: CONSTANTS.REGISTER_FAIL,
        });
    }
};

// Login User
export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: CONSTANTS.LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: CONSTANTS.LOGIN_FAIL,
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: CONSTANTS.CLEAR_PROFILE });
    dispatch({ type: CONSTANTS.LOGOUT });
};
