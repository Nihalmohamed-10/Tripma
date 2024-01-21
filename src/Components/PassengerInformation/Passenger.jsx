import React from "react";
import Navbar from "../Navbar/Navbar";
import PassengerInputs from "./PassengerInputs";
import PassengerLeft from "./PassengerLeft";
import './PassengerInfo.css'

function Passenger() {
  return (
    <div className="passengerInfoPage wrapper">
      <Navbar />
      <div className="PassengerInfoFlex">
        <div className="passengerRight">
          <h3>Passenger information</h3>
          <p>
            Enter the required information for each traveler and be sure that it
            exactly matches the government-issued ID presented at the airport.
          </p>
          <div className="passengerInputDivOne">
            <PassengerInputs />
            <PassengerInputs />
            <PassengerInputs />
            <PassengerInputs />
            <PassengerInputs />
          </div>
          <div className="passengerInputDivTwo">
            <PassengerInputs  />
            <PassengerInputs />
            <PassengerInputs />
            <PassengerInputs />
          </div>
          <p className="EmergContact">Emergency contact information</p>
          <p className="sameAsPassenger">same as passenger 1</p>
          <div className="passengerInputDivThree">
            <PassengerInputs />
            <PassengerInputs />
            <PassengerInputs />
            <PassengerInputs />
          </div>
          <p className="bagInfo">Bag information</p>
          <p className="eachPassngrPara">
            Each passenger is allowed one free carry-on bag and one personal
            item. First checked bag for each passenger is also free. Second bag
            check fees are waived for loyalty program members. See the full bag
            policy.
          </p>
        </div>
        <div>
          <PassengerLeft />
        </div>
      </div>
    </div>
  );
}

export default Passenger;
