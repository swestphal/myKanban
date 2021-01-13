import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 20;
const initialState = [
    {
        title: 'First List',
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,

                text: 'here comes the text for the first card',
            },
            {
                id: `card-${1}`,

                text: 'nice little second card',
            },
        ],
    },
    {
        title: 'Second List',
        id: `list-${2}`,
        cards: [
            {
                id: `card-${4}`,

                text: 'here comes the text for the first card',
            },
            {
                id: `card-${6}`,

                text: 'nice little second card',
            },
            {
                id: `card-${8}`,

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
                id: `list-${listID}`,
            };
            listID += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`,
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
