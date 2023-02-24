import { all } from "redux-saga/effects";
import customer from "../Features/Customer/sagas"

export default function* rootSaga() {
  yield all([customer()]);
}
