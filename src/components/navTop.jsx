import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navTop.css';

export default function navTop() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <a href="https://fontmeme.com/fontes/fonte-game-of-thrones/">
            <img
              src="https://fontmeme.com/permalink/230216/b3840b887f5afc9f2bfc22bed4470942.png"
              alt="fonte-game-of-thrones"
              border="0"
              height={50}
              width={300}
            />
          </a>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#" data-tip='Casa Stark'>
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Stark-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Lannister-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Targaryen-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Baratheon-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Greyjoy-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Martell-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Tyrell-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Tully-icon.png' />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Arryn-icon.png' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}