import React from "react";
import DepartingLeft from "../SelectAirlines/DepartingLeft";
import { ReturnAirlineData } from "../Cards/CardsData";
import ReturningPriceBox from "../SelectAirlines/ReturningPriceBox";
import Button from "../Buttons/Button";
import './PassengerInfo.css'
import { Luggage } from "../../images/Images";
function PassengerLeft({flightData}) {
    const selectedFlight = ReturnAirlineData[0];
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
          //  btnFunction={toPassngerInfo}
           btnContent={"Select seats"}
        />
      </div>
      <div>
        <Luggage/>
      </div>
    </div>
  )
}

export default PassengerLeft