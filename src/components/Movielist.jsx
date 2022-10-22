import React, { useState } from 'react'
import Data from './data'
import Moviecard from './Moviecard'
import'./movielist.css'






const Movielist = () => {
  const [input,setInput] = useState('')
  const Search = (e) => {
    setInput(e.target.value)
    console.log(input)
    }
    
  return (
    <div className='movielist'>
        <div className="search">
          <img src="https://www.kindpng.com/picc/m/569-5696378_loop-svg-png-icon-free-download-loop-svg.png" alt="" className='loop' />
          <input type="text" className="searchInput" onChange={(e)=>Search(e)}/>
        </div>
        {/* {input===""?Data.map((el)=> <Moviecard name={el.name} description={el.description} posterUrl={el.posterUrl} rate={el.rate}/>):Data.filter((x)=>x.name.includes(input).map((el)=> <Moviecard name={el.name} description={el.description} posterUrl={el.posterUrl} rate={el.rate}/>))} */}
        {/* {Data.filter((elF)=>elF.name.includes(input)).map((movie)=> <Moviecard movie={movie} /> )} */}
    {Data.filter((elF)=>elF.name.includes(input)).map((movie)=> <Moviecard movie={movie} /> )}
    </div>
  )
}

export default Movielist