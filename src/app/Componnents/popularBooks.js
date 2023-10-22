"use client";
import React, { useEffect, useState } from "react";
import "../css/popularBooks.css";
import Image from "next/image";
import BooksLodding from "./BooksLodding";
import Link from "next/link";
const PopularBooks = () => {
  const [data, setData] = useState([""]);
  const [lodding, setLodding] = useState(true);
  useEffect(() => {
    setLodding(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=programming:keyes&key=AIzaSyCfRcGfCU5s_FqYDfbkcUZCTSMMRnEy50M`
    )
      .then((res) => res.json())
      .then((deta) => {
        // console.log(deta.items);
        setData(deta.items);
        setLodding(false);
      });
  }, []);

  return (
    <>
      <h1 className="popular-text">
        <span className="sampletext">P</span>rogramming{" "}
        <span className="sampletext">B</span>ooks
      </h1>

      <div className="popularBooks">
        {lodding ? (
          <>
            <BooksLodding />
          </>
        ) : (
          data.map((Response) => {
            let Thumbnail =
              Response.volumeInfo &&
              Response.volumeInfo.imageLinks.smallThumbnail;

            let title = Response.volumeInfo && Response.volumeInfo.title;
            return (
              <>
                <Link className="a-link" href={`PageDetails/${Response.id}`}>
                  <div className="Popular-books-card" key={Response.id}>
                    <div className="image-card">
                      <Image
                        src={Thumbnail}
                        alt="books.jpg"
                        width={100}
                        height={100}
                        className="books-card-image"
                      />
                    </div>
                    <div className="text-d">
                      <h1 className="title-books">{title}</h1>
                    </div>
                  </div>
                </Link>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default PopularBooks;
