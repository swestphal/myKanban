import { CONSTANTS } from '../actions';

const initialState = 'darkMode';

const themeReducer = (
    state = initialState, action
) => {

    const { type } = action;

    switch (type) {
        case CONSTANTS.TOGGLE_THEME:

            return (state === 'darkMode' ? 'lightMode' : 'darkMode');

        default:
            return state;
    }
};

export default themeReducer;
