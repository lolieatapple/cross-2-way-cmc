import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './titile';
import Oracles from './oracles';
import TokenManagers from './tokenManagers'

function App() {
  return (
    <div className="App">
      <Title />
      <Oracles />
      <TokenManagers />
    </div>
  );
}

export default App;
