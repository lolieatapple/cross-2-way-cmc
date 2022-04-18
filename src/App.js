import React, { Component } from 'react';
import './App.css';
import { Chains } from './chains';
import { OraclePrice, OracleSmg } from './oracles';
import {TokenManager} from './tokenManagers';
import { Collapse, Space, Button } from 'antd';
const { Panel } = Collapse;

class App extends Component {
  render() {
    return (
      <>
        <div className='app'>
          <div style={{padding: '20px'}}>
            <Space>
              <Button onClick={()=>{
                window.location = "https://cross-monitor.vercel.app/"
              }}>Switch To Mainnet</Button>
              <Button onClick={()=>{
                window.location = "https://cross-monitor-testnet.vercel.app/"
              }}>Switch To Testnet</Button>
            </Space>
            <p></p>
            <Collapse defaultActiveKey={['1', '2', '3', '4']} >
              <Panel header="Blockchain Base Info" key="1">
                <Chains />
              </Panel>
              <Panel header="Oracle Storeman Info" key="2">
                <OracleSmg />
              </Panel>
              <Panel header="Oracle Prices Info" key="3">
                <OraclePrice />
              </Panel>
              <Panel header="Token Pairs Info" key="4">
                <TokenManager />
              </Panel>
            </Collapse>
          </div>
        </div>
      </>
    )
  }
}

export default App;
