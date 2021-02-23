import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createData = (name, monday, tuesday, wednesday, thursday, friday) => {
  return { name, monday, tuesday, wednesday, thursday, friday };
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const rows = [
  createData("Morning Up Stairs", 159, 6.0, 24, 4.0, 2),
  createData("Morning Down Stairs", 237, 9.0, 37, 4.3, 3),
  createData("Morning Parking Lot", 262, 16.0, 24, 6.0, 3),
  createData("Lunch A", 305, 3.7, 67, 4.3, 3),
  createData("Lunch B", 305, 3.7, 67, 4.3, 3),
  createData("Lunch C", 305, 3.7, 67, 4.3, 3),
  createData("Lunch D", 305, 3.7, 67, 4.3, 3),
  createData("Afternoon Up Stairs", 305, 3.7, 67, 4.3, 3),
  createData("Afternoon Down Stairs", 305, 3.7, 67, 4.3, 3),
  createData("Afternoon Parking Lot", 305, 3.7, 67, 4.3, 3),
];

export default function BasicTable() {
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.monday}</TableCell>
              <TableCell align='right'>{row.tuesday}</TableCell>
              <TableCell align='right'>{row.wednesday}</TableCell>
              <TableCell align='right'>{row.thursday}</TableCell>
              <TableCell align='right'>{row.friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
