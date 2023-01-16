import React from "react";

import {
  Card,
  Container,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  AppBar,
  Box,
} from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import CancelIcon from '@mui/icons-material/Cancel';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Lightning from "../images/lightning.png";
import watertap from "../images/water-tap.png";
import telephone from "../images/telephone.png";

const CustomerHomePage = () => {
  const waterClick = () => {
    window.location = "/waterbill";
  };

  const electricityClick = () => {
    window.location = "/electricitybill";
  };
  const telephoneClick = () => {
    window.location = "/telephonebill";
  };
  const cancelClick = () => {

  }
  const updateBillClick = () => {

  }
  const viewAllBillsClick = () => {
    window.location="/viewallbills"
  }

  return (
    <>
    <AppBar style={{marginTop: "60px"}}>
        <Box>
            <Button onClick={cancelClick} sx={{ color: "#fff" }}><CancelIcon />Cancel Bill</Button>
            <Button onClick={updateBillClick} sx={{ color: "#fff" }}><UpgradeIcon />Update Bill</Button>
            <Button onClick={viewAllBillsClick} sx={{ color: "#fff" }}><VisibilityIcon />View All Bills</Button>
        </Box>
        
    </AppBar>
      <Container style={{ marginTop: "200px", display:"flex", flexWrap: "wrap", alignItem: "center", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345 }} style={{marginRight: "100px"}}>
          <CardMedia
            component="img"
            height="250"
            image={Lightning}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pay Electricity Bill
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={electricityClick} variant="contained" color="primary"><PaidIcon /> Pay</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{marginRight: "100px"}}>
          <CardMedia
            component="img"
            height="250"
            image={watertap}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pay Water Bill
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={waterClick} variant="contained" color="primary"><PaidIcon /> Pay</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{marginRight: "100px"}}>
          <CardMedia
            component="img"
            height="250"
            image={telephone}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pay Telephone Bill
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={telephoneClick} variant="contained" color="primary"><PaidIcon /> Pay</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default CustomerHomePage;
