import { CONSTANTS } from '../actions';

const initialState = [];

const alertsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CONSTANTS.SET_ALERT:
            return [...state, payload];
        case CONSTANTS.REMOVE_ALERT:
            return state.filter((alert) => alert.id !== payload);
        default:
            return state;
    }
};

export default alertsReducer;
