import React from 'react'
import './DepartingLeft.css'

function ReturningPriceBox({ flightData }) {
  return (
    <div className="returningPrice">
        <div className="departingPriceDiv">
          <div className="departImg">
            <img src={flightData.image} alt={flightData.name} />
          </div>
          <div>
            <p className="departName">{flightData.name}</p>
            <p className="departFig">FIG4312</p>
          </div>
          <div>
            <p className="departDuration">{flightData.duration}(+1day)</p>
            <p className="departTime">{flightData.time}</p>
            <p className="departStopTime">{flightData.stopTime}</p>
          </div>
        </div>
      </div>
  )
}

export default ReturningPriceBox