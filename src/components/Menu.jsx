import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">API Filmes</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/Filmes/Populares">Filmes Populares</Link>
                        <Link className="nav-link" to="/Filmes/NowPlaying">Filmes Now Playing</Link>
                        <Link className="nav-link" to="/Filmes/TopRated">Filmes Top Rated</Link>
                        <Link className="nav-link" to="/Filmes/Upcoming">Filmes Upcoming</Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Menu
