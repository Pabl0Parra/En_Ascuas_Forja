import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// this will connect to our localStorage
import storage from "redux-persist/lib/storage";
//! remove logger before production!
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// filtering out what`s false --> boolean. We do this in dev to make sure middleware is always true (does not work on production)
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// if we r not in prod & there is a window object & dev_tools exist, use this enhancer, || otherwise, use the one from redux
const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
