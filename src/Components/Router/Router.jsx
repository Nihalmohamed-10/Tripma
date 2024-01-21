import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import SelectAirlines from "../SelectAirlines/SelectAirlines";
import SelectReturnAirlines from "../SelectAirlines/SelectReturnAirlines";
import ToSubTotal from "../SelectAirlines/ToSubTotal";
import Passenger from "../PassengerInformation/Passenger";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/airlines" element={<SelectAirlines/>} />
          <Route path="/returnairlines" element={<SelectReturnAirlines/>} />
          <Route path="/tosubtotal" element={<ToSubTotal/>} />
          <Route path="/topassengerInfo" element={<Passenger/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
