import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";

function* updateEmployee(action) {
  yield put({
    type: types.UPDATE_EMPLOYEE_SUCCESSFUL,
    payload: action.payload,
  });
}

function* watchUpdateEmployee() {
  yield takeLatest(types.UPDATE_EMPLOYEE, updateEmployee);
}

export default function* rootSaga() {
  yield fork(watchUpdateEmployee);
}
