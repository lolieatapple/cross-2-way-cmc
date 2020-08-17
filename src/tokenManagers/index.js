import React, { Component } from 'react';
import './index.css'
import TokenManager from './tokenManager'

class TokenManagers extends Component {
  render() {
    return (
      <div className="TokenManagers">
        <TokenManager />
        <TokenManager />
      </div>
    )
  }
}

export default TokenManagers