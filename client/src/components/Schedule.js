import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Employees from "./Employees";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const rows = [
  "Morning Up Stairs",
  "Morning Down Stairs",
  "Morning Parking Lot",
  "Lunch A",
  "Lunch B",
  "Lunch C",
  "Lunch D",
  "Afternoon Up Stairs",
  "Afternoon Down Stairs",
  "Afternoon Parking Lot",
];

export default function Schedule() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {days.map((day, index) => {
              return (
                <TableCell align='right' key={index}>
                  {day}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {row}
              </TableCell>
              {days.map((day, index) => (
                <TableCell align='right' key={index}>
                  <Employees day={day.toLowerCase()} type={row} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
