import React from "react";
import Button from "../Buttons/Button";
import './PriceRating.css'

function PriceRating() {
  return (
    <div className="priceNdBuyDiv">
      <div className="priceNdBuy">
        <div><p>Price rating</p></div>
        <div className="buySoon">
          <Button btnContent={"Buy soon"} />
        </div>
      </div>
      <div>
        <p className="recommendPara">
        We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.
        </p>
      </div>
      <div>
        <p className="priceRatingPara">Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal</p>
      </div>
    </div>
  );
}

export default PriceRating;
