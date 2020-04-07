import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer.js";
import dataReducer from "./reducers/dataReducer.js";
import uiReducer from "./reducers/uiReducer.js";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
