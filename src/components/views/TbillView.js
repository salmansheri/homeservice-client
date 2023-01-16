import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, CardHeader, Typography } from "@mui/material";
import axios from "axios";

const TbillView = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/tbill")
      .then((response) => setItems(response.data));
  });
  return (
    <div style={{ marginTop: "50px" }}>
      <Card>
        <CardHeader
          title={<Typography variant="h3">Telephone Bill</Typography>}
        />
      </Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Bill Number</TableCell>
              <TableCell align="right">Amount($)</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              return (
                <TableRow
                  
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{item.billnumber}</TableCell>
                  <TableCell align="right">{item.amount}</TableCell>
                  <TableCell align="right">{item.date}</TableCell>
                  <TableCell align="right">Unpaid</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TbillView;
