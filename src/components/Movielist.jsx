import React from 'react'
import Data from './data'
import Moviecard from './Moviecard'
import'./movielist.css'






const Movielist = () => {
  return (
    <div className='movielist'>
        {Data.map((el)=> <Moviecard name={el.name} description={el.description} posterUrl={el.posterUrl} rate={el.rate}/>)}
    </div>
  )
}

export default Movielist