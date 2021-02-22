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
                cards: [{ text: "vhvh" }],
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

            cardID = action.payload._id;

            const newCard = {
                title: action.payload.card_title,
                text: action.payload.card_text,
                _id: `${cardID}`,
            };
            console.log(newCard)
            console.log(state)
            /*const newLists = state.lists.map((list) => {

                if (list._id === action.payload._list) {
                    console.log(list)
                    //todo .. keep old cards with spread operator!
                    const ret = {
                        ...list,
                        cards: [newCard],
                    };

                    return ret
                } else {
                    return {
                        ...list,
                        cards: [],
                    };
                }
            });*/
            const index = state.lists.findIndex((list) => list._id === action.payload._list)
            console.log(index);
            const lists = [...state.lists]
            console.log(lists[index])


            const ret = {
                ...state,
                lists
            };
            console.log(ret)
            return ret

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
