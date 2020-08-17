import React, { Component } from 'react';
import './index.css'
import Oracle from './oracle'

class Oracles extends Component {
  render() {
    return (
      <div className="Oracles">
        <Oracle />
        <Oracle />
      </div>
    )
  }
}

export default Oracles
