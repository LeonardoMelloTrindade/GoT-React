import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Houses from "../data/houses";
import "./navTop.css";

export default function navTop() {
  return (
    <>
      <Navbar key="md" bg="dark" expand="md" className="mb-3 navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img
              src="https://fontmeme.com/permalink/230221/beca1345b03275b4de7a8f4f13cc024a.png"
              alt="fonte-game-of-thrones"
              border="0"
              height={50}
              width={350}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Principais casas de Westeros
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div>
                  {Houses.map((house, index) => {
                    return (
                      <Nav.Link
                        key={index}
                        href="#"
                        className="d-md-none"
                      >
                        <img
                          className="tamanho_emblema_hamburguer"
                          src={`https://icons.iconarchive.com/icons/limav/game-of-thrones/128/${house}-icon.png`}
                        />
                        <span className="ms-2">{house}</span>
                      </Nav.Link>
                    );
                  })}
                </div>
                <div className="d-flex flex-row">
                  {Houses.map((house, index) => {
                    return (
                      <OverlayTrigger
                        key={index}
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={<Tooltip>{house}</Tooltip>}
                      >
                        <Nav.Link
                          href="#"
                          key={house}
                          className="d-none d-md-block"
                        >
                          <img
                            className="tamanho_emblema"
                            src={`https://icons.iconarchive.com/icons/limav/game-of-thrones/128/${house}-icon.png`}
                          />
                        </Nav.Link>
                      </OverlayTrigger>
                    );
                  })}
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
