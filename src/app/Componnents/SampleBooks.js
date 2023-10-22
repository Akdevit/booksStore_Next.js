"use client";
import { useEffect, useState } from "react";
import "../css/SampleBooks.css";
import Image from "next/image";
import BooksLodding from "./BooksLodding";
import Link from "next/link";
const SampleBooks = ({ catogreyname }) => {
  const [data, setData] = useState([""]);
  const [lodding, setLodding] = useState(true);

  useEffect(() => {
    setLodding(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${catogreyname}:keyes&key=AIzaSyCfRcGfCU5s_FqYDfbkcUZCTSMMRnEy50M`
    )
      .then((Response) => Response.json())
      .then((deta) => {
        // console.log(deta);
        setData(deta.items);
        setLodding(false);
      });
  }, [catogreyname]);

  return (
    <>
      <h1 className="text-sample">
        <span className="sampletext">T</span>randing{" "}
        <span className="sampletext">B</span>ooks
      </h1>
      <div className="SampleBooks">
        {lodding ? (
          <>
            <BooksLodding />
          </>
        ) : (
          data.map((Response) => {
            // console.log(Response.id)
            let Thumbnail =
              Response.volumeInfo &&
              Response.volumeInfo.imageLinks.smallThumbnail;

            let title = Response.volumeInfo && Response.volumeInfo.title;

            return (
              <>
                <Link className="a-link" href={`PageDetails/${Response.id}`}>
                  <div className="samp-card" key={Response.id}>
                    <div className="image-card">
                      <Image
                        src={Thumbnail}
                        alt="image-card.jpg"
                        width={100}
                        height={100}
                        className="image-thumbnel"
                      />
                    </div>
                    <h1 className="sample-title">{title}</h1>
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

export default SampleBooks;
