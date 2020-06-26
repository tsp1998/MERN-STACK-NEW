import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const intialState = {};

const middleWare = [thunk];

// import { loadFromLocalStorage, saveToLocalStorage } from "./redux-persist";
// const persistedState = loadFromLocalStorage()
// myStore.subscribe(() => saveToLocalStorage(myStore.getState()))

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ecommStore = createStore(
  rootReducer,
  intialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default ecommStore;
