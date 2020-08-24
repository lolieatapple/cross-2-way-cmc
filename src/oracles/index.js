import React, { Component } from 'react'
import './index.css'
import Fields from '../fields'
import chainState from '../utils/chain-state'

class Oracle extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getInfo = async () => {
    const data = await chainState.getOracles();
    if (data) {
      this.setState(data);
    }
  }

  componentDidMount() {
    console.log("Oracle ComponentDidMount")
    this.getInfo()
    this.timer = setInterval(this.getInfo, 5000, null)
  }

  componentWillUnmount() {
    console.log("Oracle ComponentWillUnmount")
    clearInterval(this.timer)
  }

  render() {
    const priceColumns = ['name'];
    const chainNames = Object.keys(this.state);
    let priceData = [];
    if (chainNames.length > 0) {
      priceColumns.push(...chainNames);
      priceData = Object.keys(this.state.wan.prices).map(field => {
        const obj = {name: field}
        chainNames.forEach(i => (obj[i] = this.state[i].prices[field]))
        return obj;
      })
    }

    let sgDate = [];
    const sgColumns = [];

    let prices = <div>Loading...</div>;
    let sgs = <div>Loading...</div>;
    if (priceData && priceData.length > 0) {
      prices = <Fields columns={priceColumns} data={priceData} />;
    }
    if (sgDate && sgDate.length > 0) {
      sgs = <Fields columns={sgColumns} data={sgDate} />
    }
    return (
      <div className='oracles'>
          { prices }
          { sgs }
      </div>
    )
  }
}

export default Oracle
