import React from 'react'
import { AirlineData } from "../Cards/CardsData";
import '../DepartingFlights/DepartingFlights.css'
import { useNavigate } from 'react-router-dom';

function ReturningFlights() {
    const navigate = useNavigate();
  const toSubTotal = () => {
      navigate("/tosubtotal");
    };
  return (
    <div>
        <div className="DepartinglightSelect ">
            <div className="flightListContainer">
              {AirlineData?.map((data) => (
                <a href="" onClick={toSubTotal} className='flightLink'>
                    <div className="flightDetail">
                  <div className="flightLogo">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="nameNdDuration">
                    <p className='flightDuration'>{data.duration}</p>
                    <p className='flightName'>{data.name}</p>
                  </div>
                  <div className="flightTIme">
                    <p className='flightTime'>{data.time}</p>
                  </div>
                  <div className="flightStopNdTime">
                    <p className='flightStop'>{data.stops}</p>
                    <p className='flightStopTime'>{data.stopTime}</p>
                  </div>
                  <div className="flightRate">
                    <p className='ticketPrice'>{data.price}</p>
                    <p className='ticketRound'>{data.round}</p>
                  </div>
                </div>
                </a>
              ))}
            </div>
          </div>

    </div>
  )
}

export default ReturningFlights