import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 10;
const initialState = [
    {
        title: 'First List',
        id: 0,
        cards: [
            {
                id: 0,

                text: 'here comes the text for the first card',
            },
            {
                id: 1,

                text: 'nice little second card',
            },
        ],
    },
    {
        title: 'Second List',
        id: 1,
        cards: [
            {
                id: 5,

                text: 'here comes the text for the first card',
            },
            {
                id: 6,

                text: 'nice little second card',
            },
            {
                id: 8,

                text: 'again nice little second card',
            },
        ],
    },
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID,
            };
            listID += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID,
            };
            cardID += 1;
            const newState = state.map((list) => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard],
                    };
                } else {
                    return list;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default listsReducer;
