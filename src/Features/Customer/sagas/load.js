import { put, takeLatest, delay } from "redux-saga/effects";
import { get } from "../../../asyncStorage";
import { CUSTOMERS_KEY } from "../../../helpers";
import { loadResults, loadCustomers } from "../../reducers";

export function* watchLoadCustomers() {
  yield takeLatest(loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
  try {
    const customers = yield get(CUSTOMERS_KEY);

    yield delay(500);

    yield put(loadResults(customers));
  } catch (error) {
    yield put(loadResults([]));
  }
}
