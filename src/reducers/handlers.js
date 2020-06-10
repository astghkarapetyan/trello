const returnCard = (state, listId, cardId) => {
    const list = state.find(({listId:id}) => id === listId);
    return list.cards.find(({cardId:id}) => id === cardId);
};
const addList = (state, action) => {
    const { title } = action.payload;
    const newList = {
        title,
        listId: `list-id-${ state.length + 1 }`,
        cards: []
    };
    return [
        ...state,
        newList
    ];
};

const addCard = (state, action) => {
    const { listId, title } = action.payload;
    const currentListIndex = state.findIndex(({ listId: id })=> id === listId);
    state[currentListIndex].cards.push({
        title,
        cardId: `card-id-${listId}-${ state[currentListIndex].cards.length + 1 }`,
        comments:[],
        description:'',
        watch:false
    });
    return [
        ...state,
    ];
};
const drag = (state, action) => {
    const {startId, endId, startIndex, endIndex } = action.payload;
    if(startId === endId){
        const list = state.find(({ listId })=> listId === startId );
        const startItem = list.cards.splice(startIndex,1);
        list.cards.splice(endIndex, 0, ...startItem);
        return [ ...state ]
    }else if(startId !== endId){
        const startList = state.find(({ listId })=> listId === startId );
        const startItem = startList.cards.splice(startIndex, 1);

        const endList = state.find(({ listId })=> listId === endId );
        endList.cards.splice(endIndex, 0, ...startItem );
        return [
            ...state
        ];
    }
    return state
};

const editCardTitle = (state, action) => {
    const { listId, cardId, value } = action.payload;
    const card = returnCard(state, listId, cardId);
    card.title = value;
    return [
        ...state
    ];

};
const editCardDescription = (state, action) => {
    const { listId, cardId, value } = action.payload;
    const card = returnCard(state, listId, cardId);
    card.description = value;
    return [
        ...state
    ];

};
const addCardComment = (state, action) => {
    const { listId, cardId, value:{ commentValue, watch} } = action.payload;
    const card = returnCard(state, listId, cardId);
    card.comments = [commentValue, ...card.comments];
    card.watch = watch;
    return [
        ...state
    ];

   

};


export {
    addList,
    addCard,
    drag,
    editCardTitle,
    editCardDescription,
    addCardComment
}