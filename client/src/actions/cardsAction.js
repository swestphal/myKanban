import axios from 'axios';
import { CONSTANTS } from '.';


export const addCard = (listID, formData) => async dispatch => {
    console.log(listID); console.log(formData);
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const id = listID.split('-')[1]
        const body = JSON.stringify({ listID, formData, id });
        const res = await axios.post('/api/cards', body, config);
        console.log(res.data);
        dispatch({
            type: CONSTANTS.ADD_CARD,
            payload: res.data,
        })


    } catch (err) {
        console.log(err)
        dispatch({
            type: CONSTANTS.ERROR_PROFILE,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });

    }

};