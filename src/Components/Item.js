import * as React from "react";
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

function createData(fileName, name, skills, date, criteria) {
  return { fileName, name, skills, date, criteria };
}

const rows = [
  createData(
    "sanghcv.txt",
    "Sangharsh S Dahegaonkar",
    "C , HTML , CSS ,React",
    "24:5:2021",
    "react"
  ),
  createData(
    "aashishcv.txt",
    "Ashish D dhok ",
    "C , HTML , CSS ,React, python , java, c sharp",
    "24:5:2021",
    "react"
  ),
  createData(
    "nayankcv.txt",
    "Nayank A singnapure",
    "C , HTML , CSS ,React, anguler",
    "24:5:2021",
    "anguler"
  ),
  createData(
    "nikhilcv.txt",
    "Nikhil A Movade",
    "C , HTML , CSS ,React,c++",
    "24:5:2021",
    "c++"
  ),
  createData(
    "mukulcv.txt",
    "Mukul S roy",
    "C , HTML , CSS ,React, java , Database",
    "24:5:2021",
    "database"
  ),
  createData(
    "mukulcv.txt",
    "Mukul S roy",
    "C , HTML , CSS ,React, java , Database",
    "24:5:2021",
    "database"
  ),
  createData(
    "mukulcv.txt",
    "Mukul S roy",
    "C , HTML , CSS ,React, java , Database",
    "24:5:2021",
    "database"
  ),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 20px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
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
    <TableContainer component={Paper} className={classes.tableContainer}>
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
                <TableCell component="th" scope="row">
                  {row.fileName}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.skills}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.criteria}</TableCell>
              </TableRow>
            ))}
        </TableBody>
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
      </Table>
    </TableContainer>
  );
}
