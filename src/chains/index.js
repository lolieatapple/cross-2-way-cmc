import React, { Component } from 'react'
import './index.css'
import Fields from '../fields'
import chainState from '../utils/chain-state'

class Chains extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getInfo = async () => {
    const data = await chainState.getChainInfo();
    if (data) {
      this.setState(data);
    }
  }

  componentDidMount() {
    console.log("Chains ComponentDidMount")
    this.getInfo()
    this.timer = setInterval(this.getInfo, 150000, null)
  }

  componentWillUnmount() {
    console.log("Chains ComponentWillUnmount")
    clearInterval(this.timer)
  }

  render() {
    const chainInfoColumns = ['name'];
    const chainsNames = Object.keys(this.state);
    if (chainsNames.length > 0) {
      chainInfoColumns.push(...chainsNames);
      const chainInfoData = Object.keys(this.state.wan).map(field => {
        const obj = {name: field}
        chainsNames.forEach(i => (obj[i] = this.state[i][field]))
        return obj;
      })
      return (
        <div className='chains'>
          <Fields columns={chainInfoColumns} data={chainInfoData} />
        </div>
      )
    } else {
      return (
        <div className='chains'>
          Loading...
        </div>
      )
    }
  }
}

export default Chains
