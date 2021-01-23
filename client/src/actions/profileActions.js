import { CONSTANTS } from '../actions';
import axios from 'axios';
import { setAlert } from './alertActions';

export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: CONSTANTS.GET_POFILE,
            payload: res.data,
        });

    } catch (err) {
        console.log('error', err);
        dispatch({
            type: CONSTANTS.ERROR_PROFILE,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

export const createProfile = (formData, history, edit = false) => async (
    dispatch
) => {
    try {

        const config = { headers: { 'Content-Type': 'application/json' } };

        const res = await axios.post('/api/profile', formData, config);
        dispatch({
            type: CONSTANTS.GET_POFILE,
            payload: res.data,
        });
        dispatch(
            setAlert(edit ? 'Profile updated' : 'Profile created', 'success')
        );
        if (!edit) {
            history.push('/dashboard'); // redirect in action doesnt work as in component with 'Redirect'
        }
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: CONSTANTS.ERROR_PROFILE,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
