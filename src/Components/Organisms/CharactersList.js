import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import LoadingCircle from "../Atoms/LoadingCircle";

const CharactersList = (props) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align={"center"}>Characters List</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.characters.map((row) => {
              return (
                <Link
                  key={row.url}
                  to={{ pathname: `/character/${row.name}`, state: row }}
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                  }}
                >
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    style={{ display: "block" }}
                  >
                    <TableCell align={"center"} style={{ display: "block" }}>
                      {row.name}
                    </TableCell>
                  </TableRow>
                </Link>
              );
            })}
          </TableBody>
        </Table>
        {props.loadingState && <LoadingCircle />}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={props.pagination.count}
        rowsPerPage={10}
        page={props.pagination.currentPage}
        onPageChange={props.onPageChanged}
      />
    </Paper>
  );
};

export default CharactersList;
