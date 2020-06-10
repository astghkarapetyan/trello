import {
    addList,
    addCard,
    drag,
    editCardTitle,
    editCardDescription,
    addCardComment
} from "./handlers";

export const cases = {
    ADDLIST: (state, action) => addList(state, action),
    ADDCARD: (state, action) => addCard(state, action),
    DRAG: (state, action) => drag(state, action),
    EDIT_CARD_TITLE:(state, action) => editCardTitle(state, action),
    EDIT_CARD_DESCRIPTION:(state, action) => editCardDescription(state, action),
    ADD_CARD_COMMENT:(state, action) => addCardComment(state, action),
};
