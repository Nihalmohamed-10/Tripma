import React from 'react'
import './SanFrancisco.css'
import { vector } from '../../images/Images'
import { peopleInSan } from '../Cards/CardsData'

function SanFrancisco() {
  return (
    <div>
        <div className="sanFrancisco wrapper">
          <h3>
            Find your next adventure with these{" "}
            <span>
              <a href="#">flight deals</a>
            </span>
          </h3>

          <p className="all">
            <a href="#">All</a>
            <a href="#">
              <img className="vector" src={vector} alt="" />
            </a>
          </p>
        </div>

        <div className="sanFranciscoCards wrapper">
          {peopleInSan.map((card) => (
            <div key={card.id} className="sanCard">
              <div className="sanCardImg">
                <img src={card.img} alt="" />
              </div>
              <div className="sanLoc">
                <p>{card.place}</p>
                <p>{card.price}</p>
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

export default SanFrancisco