const initialState = [
    {
        title: 'First List',
        id: 0,
        cards: [
            {
                id: 0,
                title: 'Card 1',
                text: 'here comes the text for the first card',
            },
            {
                id: 1,
                title: 'Card 2',
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
                title: 'Card 1 - of List 2',
                text: 'here comes the text for the first card',
            },
            {
                id: 6,
                title: 'Card 2 - of List 2',
                text: 'nice little second card',
            },
            {
                id: 8,
                title: 'Card 3 - of List 2',
                text: 'again nice little second card',
            },
        ],
    },
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;
