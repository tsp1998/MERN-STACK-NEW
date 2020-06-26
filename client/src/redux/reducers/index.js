import accountReducer from "./account-reducer";
import userReducer from "./user-reducer";
import blockchainReducer from "./blockchain-reducer";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
  account: accountReducer,
  blockchain: blockchainReducer,
});
