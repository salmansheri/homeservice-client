import React, { useState, useEffect } from "react";
import { Container, Card, Button,TextField, Typography, CardHeader } from '@mui/material';
import axios from "axios";
// import { useDispatch } from 'react-redux';

const Userlogin = () => {
  const [userData, setuserData] = useState({
    username: "", 
    password: "",
  });
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user").then((response) => {
      setItem(response.data);
      
      console.log(response.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
     window.location = "/customerHomePage";
    console.log(userData);
    // if (userData.username === items.username) {
    //   if(userData.password === setuserData.password) {
    //     window.location = '/';

    //   } else {
    //     alert("please register first!");
    //   }
    // } 
  };

  const handleClick = (e) => {
    window.location = "/userregister";
  };
  return (
    <>
    <Container style={{marginTop: "100px"}}>
    <Card style={{marginTop: "20px", padding: "20px"}}>
        <CardHeader title={<Typography variant="h3">User Login</Typography>} />
        <form onSubmit={handleSubmit}>
        <TextField style={{marginTop: "20px"}} type="text" fullWidth label="username" id="fullWidth" value={userData.username} onChange={(e) => setuserData({...userData, username: e.target.value})} />
        <TextField style={{marginTop: "20px"}} type="password" fullWidth label="password" id="fullWidth" value={userData.password} onChange={(e) => setuserData({...userData, password: e.target.value})}/>
        <Button style={{marginTop: "20px"}} variant="contained" color="primary" type="submit">Login</Button>
        <Typography style={{marginTop: "20px"}} variant="body2">----or----</Typography>
        <Button style={{marginTop: "20px"}} variant="outlined" color="secondary" onClick={handleClick}>Register</Button>

        </form>
     </Card>
    </Container>
    
      
    </>
  );
};

export default Userlogin;
