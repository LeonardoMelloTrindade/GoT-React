import axios from 'axios';

export default class Services {


  async getHouses() {
    return axios.get('http://localhost:3000/houses');
  }
  async getCharacter() {
    return axios.get('http://localhost:3000/characters');
  }
 

}