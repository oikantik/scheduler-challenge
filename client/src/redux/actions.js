import * as types from "./constants";

const updateEmployee = (payload) => {
  return {
    type: types.UPDATE_EMPLOYEE,
    payload,
  };
};

export default updateEmployee;
