import React, { Component } from 'react';
import './index.css';
import Fields from '../fields'
import chainState from '../utils/chain-state'

class TokenManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getInfo = async () => {
    const data = await chainState.getTokenManagers();
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
  // TODO: update remove tokenPair
  render() {
    const chainNames = Object.keys(this.state);
    const tmColumns = ['name'];
    let tmsTmp = [];
    if (chainNames.length > 0) {
      tmColumns.push(...chainNames);
      const ids = Object.keys(this.state.WanChain.tokenPairs);
      ids.forEach(id => {
        const fields = Object.keys(this.state.WanChain.tokenPairs[id]);
        const data = fields.map(field => {
          const obj = {name: field}
          chainNames.forEach(i => {
            if (this.state[i].tokenPairs[id]) {
              obj[i] = this.state[i].tokenPairs[id][field]
            } else {
              obj[i] = 'empty'
            }
          })
          return obj;
        })
        tmsTmp.push(<Fields title={`TokenPairID: ${id}`} columns={tmColumns} data={data} />)
      })
    }
    let tms = <div>Loading...</div>
    if (tmsTmp.length > 0) {
      tms = tmsTmp
    }
    return (
      <div className="tms">
        { tms }
      </div>
    )
  }
}

export default TokenManager