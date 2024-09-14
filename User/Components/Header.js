import React, {useState} from 'react'
import {Nav,Navbar, Button, Container} from 'react-bootstrap'
import LoginModal from './LoginModal';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Lenskart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="primary" onClick={handleShow}>Login/Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={show} handleClose={handleClose} />
    </>
  )
}

export default Header
