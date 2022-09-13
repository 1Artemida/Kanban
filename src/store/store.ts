import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import listReduser from "./reducers/listReduser";

const rootReducer = combineReducers({
    list: listReduser
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
export default store;
