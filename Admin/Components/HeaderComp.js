import React, {useState} from 'react';
import {Container,Nav,Navbar,NavDropdown, Offcanvas, Button} from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import menuBar from '../Images/menuBar.png'

// const HeaderComp = ({token}) => {
    // console.log(token)//give undefined

const HeaderComp = () => {
    const location = useLocation();
    const { token } = location.state || {};
    console.log("HeaderComp Token: ",token); // This correctly log the token

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
        <Button variant="default" onClick={handleShow}>
            <img alt='Menu' height='30px' width='40px' src={menuBar} />&nbsp;
        </Button>
        <Navbar.Brand href="#home">Admin Lenskart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/home" state={{token}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/categories" state={{token}}>Category</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/stylecategories" state={{token}}>Styles Category</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>

    <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Admin Lenskart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="flex-column">
            <Nav.Link as={Link} to="/admin/home" state={{ token }} onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/additem" state={{ token }} onClick={handleClose}>Add Item</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/addcategory" state={{ token }} onClick={handleClose}>Add Category</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/addstylescategory" state={{ token }} onClick={handleClose}>Add Styles Category</Nav.Link>
            <NavDropdown title="Display" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin/home/items" state={{ token }} onClick={handleClose}>Display Items</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/home/categories" state={{ token }} onClick={handleClose}>Display Category</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/home/stylecategories" state={{ token }} onClick={handleClose}>Display Styles Category</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Offcanvas.Body>
    </Offcanvas>

    <Outlet/>
    </> 
)
}

export default HeaderComp;
