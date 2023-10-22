import React, { useState } from "react";
import "../css/Opstonbooks.css";
import BooksShow from "./BooksShow";
const Opstonbooks = ({inpusearchdata}) => {
  const [filtervalue, setFilterValue] = useState("ebooks");
  const [printtypee, setPrinttypee] = useState("all");
  const [projectionn, setProjectionn] = useState("lite");
  const [sortingg, setSortingg] = useState("newest");

  const outputFileTracing = (e) => {
    setFilterValue(e.target.value);
  };

  const printtype = (e) => {
    setPrinttypee(e.target.value);
  };
  const projection = (e) => {
    setProjectionn(e.target.value);
  };
  const sorting = (e) => {
    setSortingg(e.target.value);
  };
  return (
    <>
      <div className="openstion">
        <div className="openstion-books">
          <div className="Filtering-opstion">
            <label for="Filtering">
              <b>Filtering</b>
            </label>

            <select id="Filtering" onChange={outputFileTracing}>
              <option value="ebooks">ebooks</option>
              <option value="partial">partial</option>
              <option value="full">full</option>
              <option value="free-ebooks">free-ebooks</option>
              <option value="paid-ebooks">paid-ebooks</option>
            </select>
          </div>

          <div className="Filtering-opstion">
            <label for="Filtering">
              <b>Print Type</b>
            </label>

            <select id="Filtering" onChange={printtype}>
              <option value="all">all</option>
              <option value="books">books</option>
              <option value="magazines">magazines</option>
            </select>
          </div>

          <div className="Filtering-opstion">
            <label for="Filtering">
              <b>Projection</b>
            </label>

            <select id="Filtering" onChange={projection}>
              <option value="lite">lite</option>
              <option value="full">full</option>
            </select>
          </div>

          <div className="Filtering-opstion">
            <label for="Filtering">
              <b>Sorting</b>
            </label>

            <select id="Filtering" onChange={sorting}>
              <option value="newest">newest</option>
              <option value="relevance">relevance</option>
            </select>
          </div>
        </div>
      </div>
      <BooksShow
        filtervalue={filtervalue}
        printtypee={printtypee}
        projectionn={projectionn}
        sortingg={sortingg}
        inpusearchdata={inpusearchdata}
      />
    </>
  );
};

export default Opstonbooks;
