import React, { useState } from 'react'
import { Button, Container, Modal, Navbar } from 'react-bootstrap'
const Nvbar = () => {
  const [show,setShow]=useState(false)
  const [fname,setFname]=useState('')
  const [desc,setDesc]=useState('')
  const [fpost,setFpost]=useState('')
  const [frt,setFrt]=useState(0)
const Toggle=()=>{
setShow(!show);
}
const Check=()=>{
if(fname!="" && desc!="" && frt!="" && fpost!=""){
  console.log("jawek behi sahbi")
}else {console.log("jawek mouch behi sahbi")}
Toggle()
}
const Add=()=>{
  
}

  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Freeflix
          </Navbar.Brand>
          <Navbar.Brand>
            <button onClick={Toggle}>Add a film
            </button>
            <Modal show={show} onHide={Toggle}>
              <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <label htmlFor="fname">Film Name</label>
                <br/>
                <input type="search" name="fname" id="filmname" onChange={(fn)=>setFname(fn.target.value)}/>
                <br/>
                <label htmlFor="desc">Description</label>
                <br/>
                <input type="search" name="desc" id="desc" onChange={(d)=>setDesc(d.target.value)}/>
                <br/>
                <label htmlFor="fpost">Film Poster</label>
                <br/>
                <input type="search" name="fpost" id="fpost" onChange={(pst)=>setFpost(pst.target.value)}/>
                <br/>
                <label htmlFor="frt">Film Rate</label>
                <br/>
                <input type="search" name="frt" id="frt" onChange={(frt)=>setFrt(frt.target.value)}/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={Toggle}>
                  Close
                </Button>
                <Button variant="primary" onClick={Check}/>
                  Add the film
                </Buttton>
              </Modal.Footer>
            </Modal>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nvbar