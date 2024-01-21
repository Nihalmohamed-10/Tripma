import React from "react";
import Navbar from "../Navbar/Navbar";
import SpotInput from "../SpotInput/SpotInput";
import "./SelectAirlines.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

import Button from "../Buttons/Button";
import { Map } from "../../images/Images";
import DepartingFlights from "../DepartingFlights/DepartingFlights";
import PriceGrid from "../PriceGrid/PriceGrid";
import { PriceHistroy } from "../../images/Images";
import PlacesInjapan from "../PlaceInJapan/PlacesInjapan";
import SanFrancisco from "../SanFrancisco/SanFrancisco";
import PriceRating from "../PriceRating/PriceRating";
import SelectInput from "../SelectInputs/SelectInput";

function SelectAirlines() {
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
            Choose a <span>departing</span> flight
          </p>
          <DepartingFlights />
          <div className="showAllFlights">
            <Button btnContent={"Show all flights"} />
          </div>
          <div className="map">
            <img src={Map} alt="" />
          </div>
        </div>
        <div className="DepartingLeft">
          <p className="priceGridp">Price grid (flexible dates)</p>
          <PriceGrid />
          <div className="graphDiv">
            <p className="priceHistory">Price History</p>
            <div className="graph">
              <img src={PriceHistroy} alt="" />
            </div>
          </div>
          <PriceRating />
        </div>
      </div>
      <PlacesInjapan />
      <SanFrancisco />
      <Footer />
    </div>
  );
}

export default SelectAirlines;
