import React, { useEffect, useState } from 'react';
import NavTop from './components/navTop';
import Services from './services/casas.service';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [characters, setCharacters] = useState([])
  const services = new Services()

  useEffect(() => {
    services.getCharacter().then((res) => setCharacters(res.data))
  }, [])

  return (
    <>
      <NavTop />

      <div className='altura_max_bg alinhamento_flex' id='principal'>

      </div>

      {characters.map(character => {
        return (
          <div className='altura_max_bg alinhamento_flex' key={character._id}>
            <blockquote className="blockquote text-center">
              <p className="mb-4"><em>"{character.frase}"</em></p>
              <footer className="blockquote-footer">{character.nome}</footer>
            </blockquote>
          </div>
        )
      })}
    </>
  )
}

export default App;
