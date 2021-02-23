import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";

function* appLoadSaga() {
  yield put({});
}

function* watchAppLoadSaga() {
  yield takeLatest(types.APP_LOAD, appLoadSaga);
}

export default function* rootSaga() {
  yield fork(watchAppLoadSaga);
}
