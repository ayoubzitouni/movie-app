import React from 'react'
import { Container, Navbar } from 'react-bootstrap'






const Nvbar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Freeflix
          </Navbar.Brand>
          <Navbar.Text>
            Filter
          </Navbar.Text>
          <Navbar.Brand>
            Add a film
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nvbar