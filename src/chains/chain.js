import React, { Component } from 'react';
import { Tag } from 'antd';
import './chain.css';
import Oracle from '../oracle';
import TokenManager from '../tokenManager'

class Chain extends Component {
  render() {
    return (
      <div className="Chain">
        <Tag color="#2db7f5" className="tags">Mainnet</Tag>
        <Oracle />
        <TokenManager />
      </div>
    )
  }
}

export default Chain

