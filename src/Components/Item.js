import * as React from "react";
import rows from "./rows";
import "./style/item.css";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    // margin: "10px 20px",
    margin: "auto",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: "15px",
    textAlign: "center",
    border: "none",
    // border: "1px solid black",
    // border: "2px solid rgb(203, 221, 221)",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  tableRowCell: {
    // fontWeight: "bold",
    border: "2px solid rgb(203, 221, 221)",
    textAlign: "center",
    // color: "aqua",
  },
}));

export default function Item() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    // <Paper sx={{ width: "100%", overflow: "hidden" }}>
    <TableContainer component={Paper} className={classes.tableContainer}>
      {/* <TableContainer className={classes.tableContainer}> */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>
              Resume Filename
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Candidate Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Skills</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Upload Date
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Matching Criteria
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell
                  className={classes.tableRowCell}
                  component="th"
                  scope="row"
                > */}
                <TableCell className={classes.tableRowCell}>
                  {row.fileName}
                </TableCell>
                <TableCell className={classes.tableRowCell}>
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableRowCell}>
                  {row.skills}
                </TableCell>
                <TableCell className={classes.tableRowCell}>
                  {row.date}
                </TableCell>
                <TableCell className={classes.tableRowCell}>
                  {row.criteria}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TableFooter>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableFooter>
    </TableContainer>
    // </Paper>
  );
}
