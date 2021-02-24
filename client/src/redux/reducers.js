import * as types from "./constants";
import { combineReducers } from "redux";

const initialState = {
  loading: false,
  error: "",
  employees: [
    {
      label: "X1",
      value: "X1",
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
      shifts: {
        monday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        tuesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        wednesday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        thursday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
        friday: { number: 0, morning: 0, lunch: 0, afternoon: 0 },
      },
    },
  ],
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

      return {
        ...state,
        loading: false,
        employees: newEmployees,
        error: error,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({ schedule });
