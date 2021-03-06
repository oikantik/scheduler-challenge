import * as types from "./constants";
import { combineReducers } from "redux";

const initialState = {
  loading: false,
  error: "",
  employees: [
    {
      label: "X1",
      value: "X1",
      isdisabled: false,
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },

    {
      label: "X2",
      value: "X2",
      isdisabled: false,
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },

    {
      label: "X3",
      value: "X3",
      isdisabled: false,
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },

    {
      label: "X4",
      value: "X4",
      isdisabled: false,
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },

    {
      label: "X5",
      value: "X5",
      isdisabled: false,
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },

    {
      label: "X6",
      value: "X6",
      isdisabled: false,
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },

    {
      label: "X7",
      value: "X7",
      isdisabled: false,
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },
  ],
  lastEmployee: {
    old: {},
    new: {},
  },
  lastIndex: -1,
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_EMPLOYEE:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.UPDATE_EMPLOYEE_SUCCESSFUL: {
      let error = "";

      const index = state.employees.findIndex((employee) => {
        return employee.label === action.payload.label;
      });

      const newEmployees = [...state.employees];

      const day = newEmployees[index].shifts[action.payload.day];

      const type = action.payload.type.toLowerCase();

      // does someone else have this same thing?

      // if type included work

      if (type.includes("morning") && day.morning < 1) {
        day.morning += 1;
        day.number += 1;
      }

      if (type.includes("lunch") && day.lunch < 1) {
        day.lunch += 1;
        day.number += 1;
      }

      if (type.includes("afternoon") && day.afternoon < 1) {
        day.afternoon += 1;
        day.number += 1;
      }

      if (day.number === 2) {
        newEmployees[index].isdisabled = true;
      }

      return {
        ...state,
        loading: false,
        employees: newEmployees,
        lastEmployee: { new: { ...action.payload }, old: {} },
        lastIndex: index,
        error: error,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({ schedule });
