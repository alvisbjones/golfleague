
// import 'react-tabulator/lib/styles.css';

import { TabulatorFull as Tabulator } from "tabulator-tables";
import { useEffect, useRef } from "react";
import "tabulator-tables/dist/css/tabulator.min.css";
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import playerList from "../data/player.json"

const TableViewer = () => {
  const tableRef = useRef();

  useEffect(() => {
    let data = [
      { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
      { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
      {
        id: 3,
        name: "Christine Lobowski",
        age: "42",
        col: "green",
        dob: "22/05/1982"
      },
      {
        id: 4,
        name: "Brendon Philips",
        age: "125",
        col: "orange",
        dob: "01/08/1980"
      },
      {
        id: 5,
        name: "Margret Marmajuke",
        age: "16",
        col: "yellow",
        dob: "31/01/1999"
      }
    ];

    let columns = [
      { title: "Name", field: "name", width: 150 },
      { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
      { title: "Favourite Color", field: "col" },
      {
        title: "Date Of Birth",
        field: "dob",
        sorter: "date",
        hozAlign: "center"
      }
    ];

    let tabulator = new Tabulator("#table", {
      data: data,
      columns: columns,
      layout: "fitColumns"
    });

    tableRef.current = tabulator;
  }, []);

  const getData = () => {
    console.log(tableRef.current.getData());
  };

  return (
    <>
      <div id="table" />
      <button onClick={() => getData()}>getData</button>
    </>
  );
};

export default TableViewer;
