import React, { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import updateEmployee from "../redux/actions";

function Employees({ employees, day, type, handleSelect }) {
  const [disabled, setDisabled] = useState(false);
  return (
    <Select
      style={{ width: "100px" }}
      hideSelectedOptions={true}
      options={employees}
      onChange={(e) => {
        setDisabled(true);
        handleSelect({ ...e, day, type });
      }}
      isDisabled={disabled}
      closeMenuOnSelect={true}
      isOptionDisabled={(option) => {
        if (type.toLowerCase().includes("morning")) {
          return option.shifts[day].morning >= 1;
        }

        if (type.toLowerCase().includes("lunch")) {
          return option.shifts[day].lunch >= 1;
        }

        if (type.toLowerCase().includes("afternoon")) {
          return option.shifts[day].afternoon >= 1;
        }

        // return option.isdisabled;
      }}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (payload) => {
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
