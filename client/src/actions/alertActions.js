import { v4 as uuidv4 } from 'uuid';

import { CONSTANTS } from '../actions';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
    const id = uuidv4();
    dispatch({
        type: CONSTANTS.SET_ALERT,
        payload: { msg, alertType, id },
    });

    setTimeout(
        () =>
            dispatch({
                type: CONSTANTS.REMOVE_ALERT,
                payload: id,
            }),
        timeout
    );
};
