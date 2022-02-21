import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { TABLE_DATA } from "../data/TableData";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    marginTop: "2rem",
    border: `1px solid ${grey[400]}`,
    maxWidth: "90vw",
    alignSelf: "center",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "#fff",
  },
  container: {
    textAlign: "center",
    width: "100vw",
  },
});

export default function TableScreen() {
  const classes = useStyles();
  const navigate = useNavigate();

  const onNavigate = (id) => {
    navigate(`/data/${id}`);
  };

  return (
    <div className={classes.container}>
      <TableContainer className={classes.tableHead} component={Paper}>
        <Typography variant="h6" color="primary" gutterBottom>
          Toppers of the year (2021) in 12th
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name of student</TableCell>
              <TableCell align="right">Marks(%)</TableCell>
              <TableCell align="right">School</TableCell>
              <TableCell align="right">Stream</TableCell>
              <TableCell align="right">state</TableCell>
              <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TABLE_DATA.map((item) => (
              <TableRow key={item.student_name}>
                <TableCell component="th" scope="row">
                  {item.student_name}
                </TableCell>
                <TableCell align="right">{item.marks}</TableCell>
                <TableCell align="right">{item.school}</TableCell>
                <TableCell align="right">{item.stream}</TableCell>
                <TableCell align="right">{item.state}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onNavigate(item.id)}
                  >
                    detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/form" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary" style={{ margin: 20 }}>
          Back
        </Button>
      </Link>
    </div>
  );
}
