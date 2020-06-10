import  { ADDLIST } from "./actionType";

const addListAction = ( title ) => ({
    type: ADDLIST,
    payload: {
        title
    }
});


export {
    addListAction
}