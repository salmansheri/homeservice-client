import React, { useState } from "react";
import {
  Container,
  Card,
  Button,
  TextField,
  CardHeader,
  Typography,
} from "@mui/material";

const AdminLogin = () => {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminData);
  };

  return (
    <Container style={{ marginTop: "100px", fontFamily: "" }}>
      <Card style={{ padding: "50px" }}>
        <CardHeader title={<Typography variant="h3">Admin Login</Typography>} />

        <form onSubmit={handleSubmit}>
          <TextField
            style={{ marginTop: "20px" }}
            type="text"
            fullWidth
            label="Username"
            id="fullWidth"
            value={adminData.username}
            onChange={(e) =>
              setAdminData({ ...adminData, username: e.target.value })
            }
          />
          <TextField
            style={{ marginTop: "20px" }}
            type="password"
            fullWidth
            label="password"
            id="fullWidth"
            value={adminData.password}
            onChange={(e) =>
              setAdminData({ ...adminData, password: e.target.value })
            }
          />
          <Button
            style={{ marginTop: "20px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default AdminLogin;
