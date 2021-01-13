import { Droppable } from 'react-beautiful-dnd';
import { CONSTANTS } from '../actions';

export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    console.log(sort);
    return {
        type: CONSTANTS.DRAG_FINISHED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
        },
    };
};
