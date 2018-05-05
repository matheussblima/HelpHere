import * as storage from "redux-storage";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "../reducers";

export default createStore(reducers);
