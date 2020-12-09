import { combineReducers } from "redux";

import apiReducer from "./apis/reducer";

const rootReducer = combineReducers({
  api: apiReducer
});

export default rootReducer;

