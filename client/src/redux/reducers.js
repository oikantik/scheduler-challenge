import * as types from "./constants";
import { combineReducers } from "redux";

const initialState = {
  loading: false,
};

const placeholderState = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_LOAD:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default combineReducers({ placeholderState });
