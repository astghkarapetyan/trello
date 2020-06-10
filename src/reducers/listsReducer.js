import { initialState } from "../store";
import { cases } from "./cases";

const listsReducer = (state = initialState.lists, action ) => {
    const handler = cases[action.type];
    return handler ? handler(state, action) : state
};
export default listsReducer;
