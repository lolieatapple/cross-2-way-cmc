import React, { Component, useEffect, useState } from 'react'
import chainState from '../utils/chain-state'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export function Chains() {

  const [data, setData] = useState({});

  useEffect(()=>{
    const func = async () => {
      const data = await chainState.getChainInfo();
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

  const headers = data.columns;
  const rows = data && data.data;
  return (
    <div>
      <div style={{backgroundColor: 'rgb(231, 235, 240)', padding: '24px', borderRadius: '10px'}}>
        {/* <Typography variant='h4'>
          Blockchain Base Info
        </Typography> */}
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
    </div>
  );
}
