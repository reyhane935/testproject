import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

import reducer from "./Data";
const persistconfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistconfig, reducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
);
export const persistor = persistStore(store);
//export const store=createStore(applyMiddleware(thunk,logger))
export default store;
