import React from 'react';
import NavTop from './components/navTop';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavTop />

      <div className='altura_max_bg alinhamento_flex' id='principal'>
        
      </div>


      <div className='altura_max_bg alinhamento_flex' id='frase_nedStark'>
        <blockquote class="blockquote text-center">
          <p class="mb-4"><em>"O homem que da a sentenca deve brandir a espada."</em></p>
          <footer class="blockquote-footer">Eddark Stark</footer>
        </blockquote>
      </div>

      <div className='altura_max_bg alinhamento_flex' id='frase_tyrion'>
        <blockquote class="blockquote text-end">
          <p class="mb-4"><em>"Nunca esqueca o que voce e, o resto do mundo nao esquecera. Faça disso a sua forca. Entao, nunca podera ser a sua fraqueza."</em></p>
          <footer class="blockquote-footer">Tyrion Lannister</footer>
        </blockquote>
      </div>

      <div className='altura_max_bg alinhamento_flex' id='frase_arya'>
        <blockquote class="blockquote text-start">
          <p class="mb-4"><em>"O medo golpeia mais profundamente do que as espadas."</em></p>
          <footer class="blockquote-footer">Arya Stark</footer>
        </blockquote>
      </div>

      <div className='altura_max_bg alinhamento_flex' id='frase_daenerys'>
        <blockquote class="blockquote text-start">
          <p class="mb-4"><em>"Eu sou Daenerys Targaryen e eu vou pegar o que e meu com fogo e sangue."</em></p>
          <footer class="blockquote-footer">Daenerys Targaryen</footer>
        </blockquote>
      </div>
    </>
  )
}

export default App;
