import React, { useState } from "react";
import {
  Container,
  Card,
  CardHeader,
  Typography,
  CardContent,
  TextField,
  Button,
  Stack
} from "@mui/material";
// import { Form } from 'react-router-dom';
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios'; 

const TelephoneBill = () => {
  const [value, setValue] = useState(dayjs("2022-04-07"));
  const [tbillData, settbillData] = useState({
      billnumber: 0, 
      amount: 0,
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:5000/tbill/add", {billnumber: tbillData.billnumber, amount: tbillData.amount, date:value}).then((res) => alert("Successfully Posted")).catch(err=> console.log(err));
  };
  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Card>
          <CardHeader
            title={
              <Typography variant="h3" color="secondary">
                Post your bills
              </Typography>
            }
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField fullWidth type="number" label="Bill Number" value={tbillData.billnumber} onChange={(e) => settbillData({...tbillData, billnumber: e.target.value})} />
              <TextField
                style={{ marginTop: "20px", marginBottom: "20px" }}
                fullWidth
                type="number"
                label="Amount"
                value={tbillData.amount}
                onChange={(e) => settbillData({...tbillData, amount: e.target.value})}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
              <DesktopDatePicker
          label="Date"
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
          </Stack>
              </LocalizationProvider>
              <Button style={{ marginTop: "20px" }} variant="contained" color="primary" type="submit">
                Post
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default TelephoneBill;
