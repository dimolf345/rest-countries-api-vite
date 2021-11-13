import { createStore, applyMiddleware } from "redux";
// import the root reducer
import rootReducer from "./rootReducer";
// import the middlewares you need
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [thunk];

//adds redux-logger as middleWare only in dev mode
if (import.meta.env.DEV) {
  middleWares.push(logger);
}

//create the store and pass it the rootReducer and the applyMiddleware function.
// make sure to spread the middleWares array like ...middleWares
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
