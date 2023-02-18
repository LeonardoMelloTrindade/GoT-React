import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navTop.css';
import CasasServices from '../services/casas.service'

export default function navTop() {

  const [casas, setCasas] = useState([])
  const casasServices = new CasasServices()

  useEffect(() => {
    casasServices.get().then((res) => setCasas(res.data))
  }, [])

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://fontmeme.com/fontes/fonte-game-of-thrones/">
            <img
              src="https://fontmeme.com/permalink/230216/b3840b887f5afc9f2bfc22bed4470942.png"
              alt="fonte-game-of-thrones"
              border="0"
              height={50}
              width={300}
            />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#" data-tip='Casa Stark'>
            <img
              className='tamanho_emblema'
              src='https://icons.iconarchive.com/icons/limav/game-of-thrones/128/Stark-icon.png' />
          </Nav.Link>

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
      </Container>
    </Navbar>
  )
}