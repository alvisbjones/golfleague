import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import pList from "../data/player.json"

const GetPlayerList = () =>{
  return pList
}

const PlayerList = () => {
  const [rowData] = useState(GetPlayerList());

  const [columnDefs] = useState([
    { field: 'firstName', Width: 50,sortable: true, filter: true },
    { field: 'lastName', minWidth: 150,sortable: true, filter: true  },
    { field: 'hdcpIndex', sortable: true  },
    { field: 'email', sortable: true, filter: true  },
    { field: 'phone', sortable: true  },
  ]);


  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 800 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default PlayerList;