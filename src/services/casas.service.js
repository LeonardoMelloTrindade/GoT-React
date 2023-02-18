import axios from 'axios';

export default class CasasServices {
  

  async get() {
    return axios.get('http://localhost:3000/casas');
  }

  
}