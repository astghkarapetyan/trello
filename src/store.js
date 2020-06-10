import { createStore, combineReducers } from 'redux';
import { listsReducer } from './reducers';
export const initialState = {
    lists:[]
};
const configureStore = () => {
    return createStore(
        combineReducers({
            lists: listsReducer
        }),
        initialState
    )
};
export  default configureStore