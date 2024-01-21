import React from "react";
import DepartingLeft from "./DepartingLeft";
import ReturningPriceBox from "./ReturningPriceBox";
import Button from "../Buttons/Button";
import "./SelectAirlines.css";
import { ReturnAirlineData } from "../Cards/CardsData";
import { useNavigate } from "react-router-dom";

function DepartMainleft() {
  const selectedFlight = ReturnAirlineData[0];
  const navigate = useNavigate();
  const toPassngerInfo = () => {
    navigate("/topassengerInfo");
  };
  return (
    <div className="departingLeft">
      <DepartingLeft flightData={selectedFlight} />
      <ReturningPriceBox flightData={selectedFlight} />
      <div className="departSubtotal">
        <div className="departSubtotalOne">
          <p>Subtotal</p>
          <p>Taxes and Fees</p>
          <p>Total </p>
        </div>
        <div className="departSubtotalTwo">
          <p>$503</p>
          <p>$121</p>
          <p>$624</p>
        </div>
      </div>
      <div className="PassengerInfo">
        <Button
          btnFunction={toPassngerInfo}
          btnContent={"Passenger information"}
        />
      </div>
    </div>
  );
}

export default DepartMainleft;
