import React, { Component } from 'react';
import './App.css';
import Title from './title';
import Chains from './chains';
import { Layout } from 'antd';

window.serverUrl = "http://192.168.1.179:25555/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Title'>
          <Title />
        </div>
        <div className='Chains'>
          <Chains />
        </div>
      </div>
    )
  }
}

export default App;
