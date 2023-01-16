import React, { useState } from "react";
import {
  Container,
  Card,
  Typography,
  TextField,
  Button,
  CardHeader,
  CardContent,
} from "@mui/material";
import axios from "axios";

const Userregister = () => {
  const [regData, setRegData] = useState({
    username: "",
    password: "",
    name: "",
    phone: 0,
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/add", {
        username: regData.username,
        password: regData.password,
        name: regData.name,
        phone: regData.phone,
        email: regData.email,
      })
      .then((response) => {
        alert("registered successfully");
        
      });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <Card>
          <CardHeader title={<Typography variant="h3">Register</Typography>} />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                label="Username"
                type="text"
                value={regData.username}
                onChange={(e) =>
                  setRegData({ ...regData, username: e.target.value })
                }
              />
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                label="Password"
                type="password"
                value={regData.password}
                onChange={(e) =>
                  setRegData({ ...regData, password: e.target.value })
                }
              />
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                label="Name"
                type="text"
                value={regData.name}
                onChange={(e) =>
                  setRegData({ ...regData, name: e.target.value })
                }
              />
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                label="Phone"
                type="number"
                value={regData.phone}
                onChange={(e) =>
                  setRegData({ ...regData, phone: e.target.value })
                }
              />
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                label="Email"
                type="email"
                value={regData.email}
                onChange={(e) =>
                  setRegData({ ...regData, email: e.target.value })
                }
              />
              <Button
                variant="contained"
                color="success"
                style={{ marginTop: "20px" }}
                type="submit"
              >
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Userregister;
