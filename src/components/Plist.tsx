
// import 'react-tabulator/lib/styles.css';

import { TabulatorFull as Tabulator } from "tabulator-tables";
import { useEffect, useRef } from "react";
import "tabulator-tables/dist/css/tabulator.min.css";
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import pList from "../data/player.json"

const GetPlayerList = () =>{
  return pList
}

const Plist = () => {
  const tableRef = useRef();
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

    tableRef.current = table;
  });
 

  return (
    <>
    <div>
    <button id="download-pdf">Download PDF</button>
    <button id="download-html">Download HTML</button>
    </div>
    <div id="playerlist" />
    </>
  );
}

export default Plist;


