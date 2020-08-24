import React, { Component } from 'react';
import './App.css';
import Chains from './chains';
import Oracles from './oracles';
import TokenManagers from './tokenManagers';

class App extends Component {
  render() {
    return (
      <>
        <div className='app'>
          <div className='title'>
            <div>cross chain oracle tokenManager contract states</div>
          </div>
        <div className='main'>
          <Chains />
          <Oracles />
          <TokenManagers />
        </div>
        </div>
      </>
    )
  }
}

export default App;
