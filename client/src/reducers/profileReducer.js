import { CONSTANTS } from '../actions';

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CONSTANTS.GET_POFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case CONSTANTS.ERROR_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case CONSTANTS.CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false,
            };
        default:
            return state;
    }
}
