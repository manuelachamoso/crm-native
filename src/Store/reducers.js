import { combineReducers } from "redux";
import customer from "../Features/reducers"

const rootReducer = combineReducers({
  customer,
});

export default rootReducer;
