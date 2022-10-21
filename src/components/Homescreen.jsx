import React from 'react'
import { Carousel } from 'react-bootstrap'
import Data from './data'

const Homescreen = () => {
  return (
    <div>
        {Data.map((el)=><Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={el.posterUrl}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>)
      </Carousel>)
      }
    
      
    </div>
  )
}

export default Homescreen