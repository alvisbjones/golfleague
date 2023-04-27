
//import { TabulatorFull as Tabulator } from "tabulator-tables";
//import {Tabulator} from 'https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js'
import {Tabulator} from "tabulator-tables";
//import {Tabulator} from 'https://unpkg.com/tabulator-tables/dist/js/tabulator_esm.min.js';
//import pkg from "tabulator-tables";
//const {Tabulator} = pkg;
import { useEffect, useRef } from "react";
import "tabulator-tables/dist/css/tabulator.min.css";
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import players from "../data/player.json"

const GetPlayerList = () =>{
  return players
}

const PlayerList = () => {
  //const tableRef = useRef();
  useEffect(() => {
    let data = GetPlayerList();

    let columns = [
      { title: "First Name", field: "firstName", width: 150 },
      { title: "Last Name", field: "lastName", width: 150},
      { title: "Handicap", field: "hdcpIndex" },
      { title: "Email", field: "email" },
      { title: "Phone", field: "phone" }
    ];

    let table = new Tabulator("#playerlist", {
      height: 500,
      data: data,
      columns: columns,
      layout: "fitDataFill"
    });

    // tableRef.current = table;
  });
 

  return (
    <>
    <div>
    </div>
    <div id="playerlist" />
    </>
  );
}

export default PlayerList;


