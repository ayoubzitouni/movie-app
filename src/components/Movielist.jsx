import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import Data from './data'
import Moviecard from './Moviecard'
import'./movielist.css'

const Movielist = () => {
  const [input,setInput] = useState('')
  const [grlow,setGrlow]= useState(0)
  const Input = (e) => {
    setInput(e.target.value)
    }
    
  return (
    <div className='movielist'>
        <div className="search">
          <img src="https://www.kindpng.com/picc/m/569-5696378_loop-svg-png-icon-free-download-loop-svg.png" alt="1" className='loop' />
          <input type="text" className="searchInput" onChange={(e)=>Input(e)}/>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter by rate
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={()=>setGrlow(1)}>Greater to Lower</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>setGrlow(2)}>Lower to Greater</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>setGrlow(3)}>Clear</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {grlow==1?Data.sort((a,b)=>b.rate-a.rate).map((el)=> <Moviecard name={el.name} rate={el.rate} description={el.description} posterUrl={el.posterUrl}/>):grlow==2?Data.sort((a,b)=>a.rate-b.rate).map((el)=> <Moviecard name={el.name} rate={el.rate} description={el.description} posterUrl={el.posterUrl}/>):null}
        {Data.filter((x)=> x.name.toLowerCase().includes(input.toLowerCase())).map((el)=> <Moviecard name={el.name} rate={el.rate} description={el.description} posterUrl={el.posterUrl}/>)}
    </div>
  )
}

export default Movielist