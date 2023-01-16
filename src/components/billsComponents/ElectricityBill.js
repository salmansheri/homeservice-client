import React, { useState } from "react";
import {
  Container,
  Card,
  Typography,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import dayjs from "dayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ElectricityBill = () => {
  const [value, setValue] = useState(dayjs("2022-04-07"));
  const [ebillData, setebillData] = useState({
    billnumber: 0,
    amount: 0,
  });

  const [open, setOpen] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:5000/ebill/add", {billnumber: ebillData.billnumber, amount: ebillData.amount, date: value}).then((res)=> {
      alert("successfully posted")
    }).catch((err) => console.log(err));
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <Card>
          <CardHeader
            title={
              <Typography variant="h3">Post Your Electricity Bill</Typography>
            }
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                type="number"
                fullWidth
                label="Bill Number"
                value={ebillData.billnumber}
                onChange={(e) =>
                  setebillData({ ...ebillData, billnumber: e.target.value })
                }
              />
              <TextField
                style={{ marginTop: "20px", marginBottom: "20px" }}
                fullWidth
                label="Amount"
                value={ebillData.amount}
                onChange={(e) =>
                  setebillData({ ...ebillData, amount: e.target.value })
                }
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Date"
                    value={value}
                    minDate={dayjs("2017-01-01")}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              <Button
                
                type="submit"
                style={{ marginTop: "20px" }}
                variant="contained"
              >
                Post
              </Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Successfully Posted
              </Alert>
            </Snackbar>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ElectricityBill;
