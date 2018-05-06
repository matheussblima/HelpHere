import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

const reducer = storage.reducer(reducers);
const engine = createEngine("helpHereStorage");

const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(thunk, middleware)(
  createStore
);
const store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);
load(store);

load(store)
  .then(newState => console.log("Loaded state:", newState))
  .catch(() => console.log("Failed to load previous state"));

console.warn(store);

export default store;
