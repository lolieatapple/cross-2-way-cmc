import React, { Component } from 'react';
import './index.css';
import $ from 'jquery';

class Oracle extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getInfo = () => {
    this.serverRequest = $.get((window.serverUrl + 'oracles'), (result) => {
      this.setState({
        blockNumber : result.blockNumber
      })
    })
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.getInfo()
    this.timer = setInterval(this.getInfo, 5000, null)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
    clearInterval(this.timer)
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="Oracle">
        <div>
          pricesList : pricesList
        </div>
        <div>
          owner : owner
        </div>
        <div>
          admin : admin
        </div>
        <div>
          storeManGroups : storeManGroups
        </div>
        <div>
          isDebtClean : isDebtClean
        </div>
        <div>
          upgradeTo : upgradeTo
        </div>
      </div>
    )
  }
}

export default Oracle
