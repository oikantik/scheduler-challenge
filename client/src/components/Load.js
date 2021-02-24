import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const tableHeads = [
  "Staff Member",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Totals",
];

function Load({ employees }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {tableHeads.map((header, index) => {
              return (
                <TableCell align='right' key={index}>
                  {header}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees &&
            employees.map((employee, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component='th' scope='row'>
                    {employee.value}
                  </TableCell>
                  <TableCell align='right'>
                    {employee.shifts.monday.number}
                  </TableCell>
                  <TableCell align='right'>
                    {employee.shifts.tuesday.number}
                  </TableCell>
                  <TableCell align='right'>
                    {employee.shifts.wednesday.number}
                  </TableCell>
                  <TableCell align='right'>
                    {employee.shifts.thursday.number}
                  </TableCell>
                  <TableCell align='right'>
                    {employee.shifts.friday.number}
                  </TableCell>
                  <TableCell align='right'>0</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    employees: state.schedule.employees,
  };
};

export default connect(mapStateToProps)(Load);
