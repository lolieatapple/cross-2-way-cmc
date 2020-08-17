import React, { Component } from 'react';
import { Tag } from 'antd';
import './index.css';

class Title extends Component {
  render() {
    return (
      <div className="Title">
        <div> Oracle TokenManager Monitor </div>
        <Tag color="#2db7f5" className="tags">Mainnet</Tag>
      </div>
    )
  }
}

export default Title
