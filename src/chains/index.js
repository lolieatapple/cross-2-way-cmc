import React, { Component } from 'react';
import './index.css';
// import Chain from './chain';
import { Table, Row, Col } from 'antd';
import { List } from 'antd/lib/form/Form';

class Chains extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    // const columns = [
    //   {
    //     title: 'Name',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: text => <a>{text}</a>,
    //   },
    // ];
    const chains = ['wan', 'eth', 'btc', 'eos'];
    const configFields = ['id', 'deposit', 'status'];

    const columns = [{
      title: 'sid',
      key: 'sid',
      dataIndex: 'wan',
      render: obj => {
        const keys = Object.keys(obj);
        const items = keys.map(i => {
          return <div>{i}</div>
        })
        return <div className='iid'>{items}</div>
      }
    }];
    chains.forEach(item => {
      columns.push({
        title: item,
        key: item,
        dataIndex: item,
        render: obj => {
          const keys = Object.keys(obj);
          const items = keys.map(i => {
            if (i === 'id') {
              // if (item === 'wan') {
              return <div className='iid'>{obj[i]}</div>
              // }
            } else {
              return <div>{obj[i]}</div>
            }
          })
          return <div>{items}</div>
        }
      })
    })

    console.log("columns:" + JSON.stringify(columns))

    const data = [
      {
        wan: {
          id: '1', 
          deposit: 500,
          status: 'ready',
        },
        eth: {
          id: '1', 
          deposit: 500,
          status: 'ready',
        },
        btc: {
          id: '1', 
          deposit: 500,
          status: 'ready',
        },
        eos: {
          id: '1', 
          deposit: 500,
          status: 'ready',
        },
      },
      {
        wan: {
          id: '2',
          deposit: 300,
          status: 'init',
        },
        eth: {
          id: '2', 
          deposit: 300,
          status: 'init',
        },
        btc: {
          id: '2', 
          deposit: 300,
          status: 'init',
        },
        eos: {
          id: '2', 
          deposit: 300,
          status: 'init',
        },
      },
    ];

    const simpleCols = [
      {
        title: 'owner',
        key: 'owner',
        dataIndex: 'owner',
      },
      {
        title: 'impl',
        key: 'impl',
        dataIndex: 'impl',
      },
      {
        title: 'implOwner',
        key: 'implOwner',
        dataIndex: 'implOwner',
      },
   ]

    return (
      <div className='bd'>
        <div className='hf'>
          <p>Oracle</p>
          <Table className='tb' columns={columns} dataSource={data} pagination={false} />
          <p>---</p>
          <Table className='tb' columns={columns} dataSource={data} pagination={false} />
        </div>
        <div className='hf'> 
          <p>TokenManager</p>
          <Table className='tb' columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    )
  }
}

export default Chains