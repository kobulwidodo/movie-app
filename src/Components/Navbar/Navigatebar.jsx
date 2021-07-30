import React from 'react'
import logo from '../../img/logo-movie.svg'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigatebar = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />
                    Movies App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/movies">Movies</Nav.Link>
                        <Nav.Link href="/tv-shows">TV Show</Nav.Link>
                        <Nav.Link href="/person">Person</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigatebar
