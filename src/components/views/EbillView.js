import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, CardHeader, Typography, Button } from "@mui/material";
import axios from "axios";

const EbillView = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/ebill")
      .then((response) => setItems(response.data));
  });


  const deleteBills = (id) => {
    axios.delete("http://localhost:5000/ebill/" + id).then((response)=> console.log(response.data)); 
    

  }
  return (
    <div>
      <Card>
        <CardHeader
          title={<Typography variant="h3">Electricity Bill</Typography>}
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
              <TableCell align="right">Click to Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.forEach((item) => {
              return (
                <TableRow
                  
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{item.billnumber}</TableCell>
                  <TableCell align="right">{item.amount}</TableCell>
                  <TableCell align="right">{item.date}</TableCell>
                  <TableCell align="right">Unpaid</TableCell>
                  <TableCell align="right"><Button onClick={deleteBills(item._id)}>Remove</Button></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EbillView;
