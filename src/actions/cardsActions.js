import  { ADDCARD, DRAG} from "./actionType";

const addCardAction = ({ listId, title }) => ({
    type: ADDCARD,
    payload: {
        listId,
        title
    }
});

const dragAction = ({startId, endId, startIndex, endIndex }) => ({
    type: DRAG,
    payload: {
        startId,
        endId,
        startIndex,
        endIndex
    }
});

export {
    addCardAction,
    dragAction
}