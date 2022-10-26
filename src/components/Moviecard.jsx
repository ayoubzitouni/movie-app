import React from 'react'
import './moviecard.css'
import ReactStars from 'react-stars'
import { render } from 'react-dom'







const Moviecard = (props) => {
  return (
    <div className='movieCard'>
        <img src={props.posterUrl} alt={`${props.name} poster`} className="posterImg" />
        <div className="cardContent">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className="rate">

          Rate: <ReactStars
          value={props.rate}
          edit={false}
          count={5}
          size={24}
          color2={'#ffd700'} />
        </div>
        </div>
    </div>
  )
}

export default Moviecard

