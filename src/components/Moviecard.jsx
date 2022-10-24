import React from 'react'
import './moviecard.css'







const Moviecard = (props) => {
  return (
    <div className='movieCard'>
        <img src={props.posterUrl} alt={`${props.name} poster`} className="posterImg" />
        <div className="cardContent">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className="rate">
          Rate: {props.rate}
        </div>
        </div>
    </div>
  )
}

export default Moviecard

