import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import Moviecard from './Moviecard'
import'./movielist.css'



const Movielist = ({movies}) => {
  const [input,setInput] = useState('')
  const [grlow,setGrlow]= useState(0)
  const Input = (e) => {
    setInput(e.target.value)
    }
    
  return (
    <div className='movielist'>
        <div className="search">
          <input type="text" className="searchInput" onChange={(e)=>Input(e)}/>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={()=>setGrlow(1)}>Greater to Lower</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>setGrlow(2)}>Lower to Greater</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>setGrlow(3)}>A=>Z</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {grlow==1?movies.sort((a,b)=>b.rate-a.rate).map((el)=> <Moviecard name={el.name} rate={el.rate} description={el.description} posterUrl={el.posterUrl}/>):grlow==2?movies.sort((a,b)=>b.name-b.name).map((el)=> <Moviecard name={el.name} rate={el.rate} description={el.description} posterUrl={el.posterUrl}/>):grlow==3?movies.sort((a,b)=>a.rate-b.rate).map((el)=> <Moviecard name={el.name} rate={el.rate} description={el.description} posterUrl={el.posterUrl}/>):null}
        {/* {movies.filter((x)=> x.name.toLowerCase().includes(input.toLowerCase().trim())).map((el)=> <Moviecard name={el.name} rate={el.rate} description={el.description} posterUrl={el.posterUrl}/>)} */}
    </div>
  )
}

export default Movielist