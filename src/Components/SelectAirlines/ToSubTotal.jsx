
import React from "react";
import Navbar from "../Navbar/Navbar";
import SpotInput from "../SpotInput/SpotInput";
import "./SelectAirlines.css";
import Footer from "../Footer/Footer";

import Button from "../Buttons/Button";
import { Map } from "../../images/Images";
import DepartingFlights from "../DepartingFlights/DepartingFlights";
import PriceGrid from "../PriceGrid/PriceGrid";
import { PriceHistroy } from "../../images/Images";
import PlacesInjapan from "../PlaceInJapan/PlacesInjapan";
import SanFrancisco from "../SanFrancisco/SanFrancisco";
import PriceRating from "../PriceRating/PriceRating";
import DepartingLeft from "./DepartingLeft";
import { ReturnAirlineData } from "../Cards/CardsData";
import ReturningFlights from "../ReturningFlights/ReturningFlights";
import ReturningPriceBox from "./ReturningPriceBox";
import SelectInput from "../SelectInputs/SelectInput";
import DepartMainleft from "./DepartMainleft";


function ToSubTotal() {
    // const selectedFlight = ReturnAirlineData[0];
  return (
    <div>
      <Navbar />
      <div className="departingFlex wrapper">
        <div className="DepartingRight">
          <div className="airLinePageInputs">
            <SpotInput />
          </div>
          <div>
            <SelectInput/>
          </div>
          <p className="departingPlaneP">
            Choose a <span>returning</span> flight
          </p>
          <ReturningFlights />

          <div className="showAllFlights">
            <Button btnContent={"Show all flights"} />
          </div>
          <div className="map">
            <img src={Map} alt="" />
          </div>
        </div>
        <DepartMainleft />
        {/* <div className="departingLeft">
            <DepartingLeft flightData={selectedFlight} />
            <ReturningPriceBox flightData={selectedFlight}/>
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
            <Button btnContent={"Passenger information"} />
          </div>
        </div> */}
      </div>
      <PlacesInjapan />
      <SanFrancisco />
      <Footer />
    </div>
  )
}

export default ToSubTotal