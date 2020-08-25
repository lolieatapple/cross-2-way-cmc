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
    this.timer = setInterval(this.getInfo, 500000, null)
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

    const sgColumns = ['name'];
    const sgsTmp = [];
    if (chainNames.length > 0) {
      sgColumns.push(...chainNames);
      const groupIds = Object.keys(this.state.wan.sgs);
      groupIds.forEach(id => {
        const fields = Object.keys(this.state.wan.sgs[id]);
        const data = fields.map(field => {
          const obj = {name: field}
          chainNames.forEach(i => {
            if (this.state[i].sgs[id] && this.state[i].sgs[id].gpk1 !== null) {
              obj[i] = this.state[i].sgs[id][field]
            } else {
              obj[i] = 'empty'
            }
          })
          return obj;
        })
        console.log(JSON.stringify(data));
        sgsTmp.push(<Fields columns={sgColumns} data={data} />);
      })
    }

    let prices = <div>Loading...</div>;
    let sgs = <div>Loading...</div>;
    if (priceData && priceData.length > 0) {
      prices = <Fields columns={priceColumns} data={priceData} />;
    }
    if (sgsTmp.length > 0) {
      sgs = sgsTmp
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
