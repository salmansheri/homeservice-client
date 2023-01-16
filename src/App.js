import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/400.css";
import {
  Navbar,
  Userlogin,
  Userregister,
  Adminlogin,
  CustomerHomePage,
  Welcomepage,
  ViewAllBills,
  CancelBill, 
  UpdateBill,
} from "./components";
import { TelephoneBill, WaterBill, ElectricityBill } from './components/billsComponents'

function App() {
  return (
    <div style={{ fontFamily: "roboto" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/userRegister" element={<Userregister />} />
          <Route path="/customerHomePage" element={<CustomerHomePage />} />
          <Route path="/telephonebill" element={<TelephoneBill />} />
          <Route path="/waterbill" element={<WaterBill />} /> 
          <Route path="/electricitybill" element={<ElectricityBill />} />
          <Route path="/viewallbills" element={<ViewAllBills />} /> 
          <Route path="/cancelbill" element={<CancelBill />} />
          <Route path="/updatebill" element={<UpdateBill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
