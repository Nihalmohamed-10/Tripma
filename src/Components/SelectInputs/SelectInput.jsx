import React from "react";
import './SelectInput.css'

function SelectInput() {
  return (
    <div className="SelectInputD">
      <select className="SelInp" placeholder="From Where?">
        <option value="" disabled selected>
          Max price
        </option>
        <option value="option1">SFO</option>
        <option value="option2">ATL</option>
        <option value="option3">LAX</option>
        <option value="option1">STL</option>
        <option value="option2">PVG</option>
        <option value="option3">MSP</option>
        <option value="option3">NRT</option>
      </select>
      <select className="SelInp" placeholder="From Where?">
        <option value="" disabled selected>
         Shops
        </option>
        <option value="option1">SFO</option>
        <option value="option2">ATL</option>
        <option value="option3">LAX</option>
        <option value="option1">STL</option>
        <option value="option2">PVG</option>
        <option value="option3">MSP</option>
        <option value="option3">NRT</option>
      </select>
      <select className="SelInp" placeholder="From Where?">
        <option value="" disabled selected>
          Time
        </option>
        <option value="option1">SFO</option>
        <option value="option2">ATL</option>
        <option value="option3">LAX</option>
        <option value="option1">STL</option>
        <option value="option2">PVG</option>
        <option value="option3">MSP</option>
        <option value="option3">NRT</option>
      </select>
      <select className="SelInp" placeholder="From Where?">
        <option value="" disabled selected>
          Airlines
        </option>
        <option value="option1">SFO</option>
        <option value="option2">ATL</option>
        <option value="option3">LAX</option>
        <option value="option1">STL</option>
        <option value="option2">PVG</option>
        <option value="option3">MSP</option>
        <option value="option3">NRT</option>
      </select>
      <select className="SelInp" placeholder="From Where?">
        <option value="" disabled selected>
          Seat class
        </option>
        <option value="option1">SFO</option>
        <option value="option2">ATL</option>
        <option value="option3">LAX</option>
        <option value="option1">STL</option>
        <option value="option2">PVG</option>
        <option value="option3">MSP</option>
        <option value="option3">NRT</option>
      </select>
      <select className="SelInp" placeholder="From Where?">
        <option value="" disabled selected>
          More
        </option>
        <option value="option1">SFO</option>
        <option value="option2">ATL</option>
        <option value="option3">LAX</option>
        <option value="option1">STL</option>
        <option value="option2">PVG</option>
        <option value="option3">MSP</option>
        <option value="option3">NRT</option>
      </select>
    </div>
  );
}

export default SelectInput;
