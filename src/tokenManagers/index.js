import React, { Component, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip, Typography } from '@mui/material';

import Fields from '../fields'
import chainState from '../utils/chain-state'

export function TokenManager() {
  const [data, setData] = useState({});

  useEffect(()=>{
    const func = async () => {
      const data = await chainState.getTokenManagers();
      if (data) {
        setData(data);
      }
    }

    func();
    const timer = setInterval(func, 60000);
    return ()=>{
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <div style={{backgroundColor: 'rgb(231, 235, 240)', padding: '24px', borderRadius: '10px'}}>
        {/* <Typography variant='h4'>
          Token Pairs Info
        </Typography>
        <p></p> */}
        {
          data.tms && data.tms.map(tms=>{
            const headers = tms.columns;
            const rows = tms.data;
            return <div style={{padding: '0 0 20px 0'}} key={tms.title}>
            <Chip label={tms.title} />
            <p></p>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} >
                <TableHead>
                  <TableRow>
                    {
                      headers && headers.map(v=><TableCell key={v} >{v}</TableCell>)
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    rows && rows.map(v=>{
                      return <TableRow
                        key={v.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        {
                          Object.keys(v).map(k=>{
                            return <TableCell>{v[k]}</TableCell>
                          })
                        }
                      </TableRow>
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          }).reverse()
        }
      </div>
    </div>
  );
}
