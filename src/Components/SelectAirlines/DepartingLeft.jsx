import React from "react";
import { ReturnAirlineData } from "../Cards/CardsData";
import "./DepartingLeft.css";
import Button from "../Buttons/Button";
import DepartingPriceBox from "./DepartingPriceBox";

function DepartingLeft() {
  const selectedFlight = ReturnAirlineData[0];
  return (
    <div className="depPrcieDiv">
      <DepartingPriceBox  flightData={selectedFlight} />
      {/* <div className="departSubtotal">
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
      </div> */}
      {/* <div className="departButton">
        <Button btnContent={"Save and close"} />
      </div> */}
    </div>
  );
}

export default DepartingLeft;
