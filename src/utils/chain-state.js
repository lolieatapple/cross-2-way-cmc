const axios = require('axios');

// const url = 'http://localhost:3200/';
const url = 'http://localhost:13200/';

class ChainState {
  getChainInfo = async () => {
    try {
      const data = (await axios.get(`${url}chains`)).data;
      return data;
    } catch (error) {
      console.log('request chains error: ' + error);
      return null;
    }
  }

  getOracles = async () => {
    try {
      const data = (await axios.get(`${url}oracles`)).data;
      return data;
    } catch (error) {
      console.log('request oracles error: ' + error);
      return null;
    }
  }

  getTokenManagers = async () => {
    try {
      const data = (await axios.get(`${url}tms`)).data;
      return data;
    } catch (error) {
      console.log('request token managers error: ' + error);
      return null;
    }
  }
}


const chainState = new ChainState();

export default chainState;
