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
  //selection stuff


  
  // selection stuff
  const [rowData] = useState(GetPlayerList());

  const [columnDefs] = useState([
    { field: 'firstName', Width: 10,sortable: true, filter: true, resizable: true },
    { field: 'lastName', Width: 10,sortable: true, filter: true, resizable: true },
    { field: 'hdcpIndex', Width: 15,sortable: true, type: 'numericColumn', resizable: true  },
    { field: 'email', sortable: true, filter: true  },
    { field: 'phone', sortable: true  },
  ]);


  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default PlayerList;


/*
//tabledata = loadNames();
console.log('fetchPlayers')
async function fetchPlayers() {
    try {
      const response = await fetch('https://alvisbjones.github.io/jsonfiles/player.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error(`Could not get players: ${error}`);
    }
  }
console.log('before call to fetchPlayers')
const promise = fetchPlayers();
promise.then((players) => {
    console.log('before table build')
    let table = new Tabulator("#player-table", {
 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	data: players,
    layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"First", field:"firstName", width:100},
	 	{title:"Last", field:"lastName", width:100},
	 	{title:"Email", field:"email",width:100},
	 	{title:"Phone", field:"phone",width:100},
        {title:"Gender", field:"gen",width:20}
 	],});
  */