import React, { Component } from 'react';
import { Tag } from 'antd';
import './title.css';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <div> Oracle TokenManager Monitor </div>
        <Tag color="#2db7f5" className="tags">Mainnet</Tag>
      </div>
    )
  }
}

export default Title
