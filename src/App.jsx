import React from 'react';
import NavTop from './components/navTop';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavTop />

      <div className='altura_max_bg alinhamento_flex' id='principal'>
        <p className='titulo_principal'>Frases memoraveis</p>
      </div>

      <div className='altura_max_bg alinhamento_flex' id='frase_nedStark'>
        <blockquote class="blockquote text-center">
          <p class="mb-4"><em>"O homem que da a sentenca deve brandir a espada."</em></p>
          <footer class="blockquote-footer">Eddark Stark</footer>
        </blockquote>
      </div>

      <div className='altura_max_bg alinhamento_flex' id='frase_tyrion'>
        <blockquote class="blockquote text-center">
          <p class="mb-4"><em>"Nunca esqueca o que voce e, o resto do mundo nao esquecera."</em></p>
          <footer class="blockquote-footer">Tyrion Lannister</footer>
        </blockquote>
      </div>
    </>
  )
}

export default App;
