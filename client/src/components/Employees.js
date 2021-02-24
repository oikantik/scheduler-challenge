import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import updateEmployee from "../redux/actions";

function Employees({ employees, day, type, handleSelect }) {
  return (
    <Select
      style={{ width: "100px" }}
      closeMenuOnSelect={false}
      options={employees}
      onChange={(e) => {
        handleSelect({ ...e, day, type });
      }}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (payload) => {
      console.log(payload);
      dispatch(updateEmployee(payload));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    employees: state.schedule.employees,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
