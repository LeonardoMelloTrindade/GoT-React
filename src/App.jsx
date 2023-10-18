import React from 'react';
import NavTop from './components/navTop';
import Characters from './data/characters';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavTop />

      <div className='altura_max_bg alinhamento_flex' id='principal'>

      </div>

      {Characters.map((character, index ) => {
        return (
          <div className='altura_max_bg alinhamento_flex align-items-center' key={index} style={{backgroundImage: `url(${character.image})`}}>
            <blockquote className="blockquote text-center">
              <p className="mb-4 sentence"><em>"{character.sentence}"</em></p>
              <footer className="blockquote-footer">{character.name}</footer>
            </blockquote>
          </div>
        )
      })}
    </>
  )
}

export default App;
