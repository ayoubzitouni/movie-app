import React from 'react'
import './moviecard.css'







const Moviecard = (movie) => {
  return (
    <div className='movieCard'>
        <img src={movie.posterUrl} alt={`${movie.name} poster`} className="posterImg" />
        <div className="cardContent">
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        <div className="rate">
          Rate: {movie.rate}
        </div>
        </div>
    </div>
  )
}

export default Moviecard

