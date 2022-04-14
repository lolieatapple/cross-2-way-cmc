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

export function Oracles() {
  const [data, setData] = useState({});

  useEffect(()=>{
    const func = async () => {
      const data = await chainState.getOracles();
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

  const headers = data.prices && data.prices.columns;
  const rows = data && data.prices && data.prices.data;
  return (
    <div>
      <div style={{backgroundColor: 'rgb(231, 235, 240)', padding: '24px', borderRadius: '10px'}}>
        <Typography variant='h6'>
          Prices
        </Typography>
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
                        return <TableCell key={k}>{v[k]}</TableCell>
                      })
                    }
                  </TableRow>
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <p></p>
      <div style={{backgroundColor: 'rgb(231, 235, 240)', padding: '24px', borderRadius: '10px'}}>
        <Typography variant='h6'>
          Storeman Group Info
        </Typography>
        <p></p>
        {
          data.sgs && data.sgs.map(smg=>{
            const headers = smg.columns;
            const rows = smg.data;
            return <div style={{padding: '0 0 20px 0'}}>
            <Chip label={smg.title} />
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
                            return <TableCell key={k}>{v[k]}</TableCell>
                          })
                        }
                      </TableRow>
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          })
        }
      </div>
    </div>
  );
}
