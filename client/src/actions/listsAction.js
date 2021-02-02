import axios from 'axios';
import { CONSTANTS } from '.';


export const addList = (list_title) => async dispatch => {

    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ list_title });

        const res = await axios.post('/api/lists', body, config);

        dispatch({
            type: CONSTANTS.ADD_LIST,
            payload: res.data
        })


    } catch (err) {

        dispatch({
            type: CONSTANTS.ERROR_PROFILE,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });

    }

};

export const getLists = () => async (dispatch) => {

    try {
        const res = await axios.get('/api/lists');

        dispatch({
            type: CONSTANTS.GET_LISTS,
            payload: res.data,
        });

    } catch (err) {

        dispatch({
            type: CONSTANTS.ERROR_PROFILE,
            payload: {
                msg: err,
                status: err,
            },
        });
    }
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {

    return {
        type: CONSTANTS.DRAG_FINISHED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type,
        },
    };
};
