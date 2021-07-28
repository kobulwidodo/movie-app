import React from 'react'
import logo from '../../img/logo-movie.svg'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigatebar = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    Movies App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Movies</Nav.Link>
                        <Nav.Link href="#link">TV Show</Nav.Link>
                        <Nav.Link href="#link">Person</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigatebar
