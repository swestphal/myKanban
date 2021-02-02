import axios from 'axios';
import { CONSTANTS } from '.';


export const addList = (list_title) => async dispatch => {
    console.log("trycatch")
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ list_title });

        const res = await axios.post('/api/lists', body, config);
        console.log(res.data);
        dispatch({
            type: CONSTANTS.ADD_LIST,
            payload: res.data
        })

        console.log("success")
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

export const getLists = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/lists');
        console.log(res.data)
        dispatch({
            type: CONSTANTS.GET_LISTS,
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
