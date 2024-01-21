import React from 'react'
import { placesInJapan } from '../Cards/CardsData'
import './PlacesInJapan.css'
import { vector } from '../../images/Images'

function PlacesInjapan() {
  return (
    <div>
        <div className="japanPlaceDiv wrapper">
          <h3>
          Find <span><a href=''>places to stay</a></span> in Japan{" "}
          </h3>
          <p className="all">
            <a href="#">All</a>
            <a href="#">
              <img className="vector" src={vector} alt="" />
            </a>
          </p>
        </div>
        <div className="placesinjapan wrapper">
          {placesInJapan.map((card) => (
            <div key={card.id} className="japanCards">
              <div className="japanCardImg">
                <img src={card.img} alt="" />
              </div>
              <div className="japanLoc">
                <p>
                  {card.place}
                </p>
              </div>
              <div className="cardHighlight">
                <p>{card.highlight}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default PlacesInjapan