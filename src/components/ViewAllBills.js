import React from "react";
import EbillView from "./views/EbillView";
import WbillView from "./views/WbillView";
import TbillView from "./views/TbillView";
import { Container } from "@mui/material";

const ViewAllBills = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <EbillView />
        <WbillView />
        <TbillView />
      </Container>
    </div>
  );
};

export default ViewAllBills;
