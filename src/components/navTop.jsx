import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import CasasServices from '../services/casas.service';
import './navTop.css';


export default function navTop() {

    const [casas, setCasas] = useState([])
    const casasServices = new CasasServices()

    useEffect(() => {
        casasServices.get().then((res) => setCasas(res.data))
    }, [])

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="dark" expand={expand} className="mb-3 navbar-dark">
                    <Container fluid>
                        <Navbar.Brand href="#"> <img
                            src="https://fontmeme.com/permalink/230219/71b03d40502f0315c6ebab603c9c5c98.png"
                            alt="fonte-game-of-thrones"
                            border="0"
                            height={50}
                            width={300}
                        /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            bg="dark"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Principais casas de Westeros
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {casas.map(casa => {
                                        return (
                                            <Nav.Link key={casa.nome} href="#">
                                                <img
                                                    className='tamanho_emblema'
                                                    src={`https://icons.iconarchive.com/icons/limav/game-of-thrones/128/${casa.nome}-icon.png`} />
                                            </Nav.Link>
                                        )
                                    })}

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}