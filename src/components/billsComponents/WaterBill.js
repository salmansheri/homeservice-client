import React, { useState } from "react";
import {
  Container,
  Card,
  TextField,
  CardHeader,
  Typography,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const WaterBill = () => {
  const [wbillData, setwbillData] = useState({
    billnumber: 0,
    amount: 0,
  });
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:5000/wbill/add", {
      billnumber: wbillData.billnumber,
      amount: wbillData.amount,
      date: value,
    }).then((res)=> alert("successfully posted"));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <Card>
        <CardHeader
          title={
            <Typography variant="h3" color="secondary">
              Post Your Water Bill
            </Typography>
          }
        />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              type="number"
              fullWidth
              label="Bill Number"
              value={wbillData.billnumber}
              onChange={(e) =>
                setwbillData({ ...wbillData, billnumber: e.target.value })
              }
            />
            <TextField
              type="number"
              fullWidth
              label="Amount"
              style={{ marginTop: "20px", marginBottom: "20px" }}
              value={wbillData.amount}
              onChange={(e) =>
                setwbillData({ ...wbillData, amount: e.target.value })
              }
            />

            <LocalizationProvider
              style={{ marginTop: "20px" }}
              dateAdapter={AdapterDayjs}
            >
              <Stack>
                <DesktopDatePicker
                  spacing={8}
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
            <br />

            <Button
              type="submit"
              style={{ marginTop: "20px" }}
              variant="contained"
            >
              Post
            </Button>
          </form>
        </CardContent>
      </Card>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default WaterBill;
