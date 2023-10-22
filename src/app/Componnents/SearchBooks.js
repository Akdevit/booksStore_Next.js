"use client";
import React, { useState } from "react";
import "../css/SearchBooks.css";
import Opstonbooks from "./Opstonbooks";
const SearchBooks = () => {
  const [searchdata, setSerchdata] = useState("");
  const [inpusearchdata, setInpusearchdata] = useState("hacking");
  const getSearchvalue = (e) => {
    setSerchdata(e.target.value);
  };
  const searchbookshandlae = () => {
    setInpusearchdata(searchdata);
  };

  return (
    <>
      <div className="search-books">
        <div className="search">
          <input
            type="search"
            className="inpute-search"
            placeholder="Search books,magazines..."
            onChange={getSearchvalue}
          />
          <button className="search-btn" onClick={searchbookshandlae}>
            Search
          </button>
        </div>
      </div>
      <Opstonbooks inpusearchdata={inpusearchdata} />
    </>
  );
};

export default SearchBooks;
