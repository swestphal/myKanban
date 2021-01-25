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
                title: 'UX/UI Design ',
                text: 'here comes the text for the first card',
            },
            {
                id: `card-${1}`,
                title: 'Phonecall Molly',
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
                title: 'Run Tests',
                text: 'here comes the text for the first card',
            },
            {
                id: `card-${6}`,
                title: 'Clean Database',
                text: 'nice little second card',
            },
            {
                id: `card-${8}`,
                title: 'Call the Designer',
                text: 'again nice little second card',
            },
        ],
    },
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            listID += 1;
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`,
            };
            return [...state, newList];

        case CONSTANTS.ADD_CARD: {
            cardID += 1;
            const newCard = {
                title: action.payload.title,
                text: action.payload.text,
                id: `card-${cardID}`,
            };
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
        }
        case CONSTANTS.DRAG_FINISHED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type,
            } = action.payload;

            const newState = [...state];

            // dragging lists
            console.log(draggableId);
            if (type === 'list') {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }
            if (droppableIdStart === droppableIdEnd) {
                // if same list
                const list = state.find((list) => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(
                    (list) => droppableIdStart === list.id
                );
                // pull card from list
                const card = listStart.cards.splice(droppableIndexStart, 1);
                // find list where drag start

                const listEnd = state.find(
                    (list) => droppableIdEnd === list.id
                );

                //put card in new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;

        default:
            return state;
    }
};

export default listsReducer;
