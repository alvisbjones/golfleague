import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import pList from "../data/player.json"

const rows: GridRowsProp = pList

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'firstName', headerName: 'First', width: 100 },
  { field: 'lastName', headerName: 'Last', width: 100 },
  { field: 'hdcpIndex', headerName: 'Handicap', width: 50 },
  { field: 'email', headerName: 'Email', width: 100 },
  { field: 'phone', headerName: 'Phone', width: 50 },
];

export default function Playermui() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
    </div>
  );
}


