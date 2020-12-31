import React from "react";
import "./table.css";
import numeral from "numeral";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const TableData = ({ table, setCoin }) => {
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "white",
      },
      cursor: "pointer",
    },
  }))(TableRow);

  return (
    <TableContainer className="table__container" component={Paper}>
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#162336" }} className="table__cell">
              Coin
            </TableCell>
            <TableCell className="table__cell" align="right">
              Price
            </TableCell>
            <TableCell className="table__cell" align="right">
              Volume
            </TableCell>
            <TableCell className="table__cell" align="right">
              MarketCap
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((details) => (
            <StyledTableRow
              onClick={() => setCoin(details.id)}
              className="table__row"
              key={details.name}
            >
              {/* <TableCell>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  {details.market_cap_rank}
                </div>
              </TableCell> */}
              <TableCell className="table__cell-font">
                {details.name} <img alt="coin-img" src={details.image} />
              </TableCell>

              <TableCell className="table__cell-font" align="right">
                ${numeral(details.current_price).format("0,0")}
              </TableCell>
              <TableCell className="table__cell-font" align="right">
                ${numeral(details.total_volume).format("(0.0a)")}
              </TableCell>
              <TableCell className="table__cell-font" align="right">
                ${numeral(details.market_cap).format("0,0a")}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
