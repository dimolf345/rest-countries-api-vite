import { createStore, applyMiddleware, compose } from "redux";
// import the root reducer
import rootReducer from "./rootReducer";
// import the middlewares you need
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//adds redux-logger as middleWare only in dev mode
// if (import.meta.env.DEV) {
//   middleWares.push(logger);
// }

//create the store and pass it the rootReducer and the applyMiddleware function.
// make sure to spread the middleWares array like ...middleWares
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

export default store;
