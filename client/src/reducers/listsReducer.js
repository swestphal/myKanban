import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 20;
const initialState = {
    lists: [],
    list: null,
    loading: true,
    error: {}
};

const listsReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            listID = action.payload._id;
            const newList = {
                list_title: action.payload.list_title,
                cards: [],
                _id: `${listID}`,
                order: action.payload.order
            };
            return {
                ...state,
                lists: [...state.lists, newList],
            };

        case CONSTANTS.GET_LISTS:
            return {
                ...state,
                lists: action.payload,
                loading: false
            };

        case CONSTANTS.ADD_CARD: {
            cardID += 1;

            const newCard = {
                title: action.payload.formData.title,
                text: action.payload.formData.text,
                id: `card-${cardID}`,
            };
            const newState = state.lists.map((list) => {

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
                id,
                order
            } = action.payload;


            const newState = { ...state };
            console.log(newState)
            // dragging lists
            if (type === 'list') {
                console.log("listreducer")
                const list = newState.lists.splice(droppableIndexStart, 1);
                list[0].order = order
                newState.lists.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            // dragging cards
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
