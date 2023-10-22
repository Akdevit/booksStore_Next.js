import React, { useEffect, useState } from "react";
import "../css/BooksShow.css";
import Image from "next/image";
import BooksLodding from "./BooksLodding";
import Footer from "./Footer";
import Link from "next/link";
const BooksShow = ({
  filtervalue,
  printtypee,
  projectionn,
  sortingg,
  inpusearchdata,
}) => {
  const [books, setBooks] = useState([""]);
  const [lodding, setLodding] = useState(true);
  const [totalitems, setTotalitems] = useState(0);
  const [pagenum, setPagenum] = useState(0);
  let key =0
  useEffect(() => {
    setLodding(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${inpusearchdata}&filter=${filtervalue}&printType=${printtypee}&projection=${projectionn}&orderBy=${sortingg}&key=AIzaSyCfRcGfCU5s_FqYDfbkcUZCTSMMRnEy50M&maxResults=40&startIndex=${pagenum}`
    )
      .then((res) => res.json())
      .then((deta) => {
        // console.log(deta.totalItems);
        setTotalitems(deta.totalItems);
        setBooks(deta.items);
        setLodding(false);
      });
  }, [pagenum, filtervalue, printtypee, projectionn, sortingg,inpusearchdata]);

  /* .................. Onclick next peiview page ...................... */
  const incresspagenum = () => {
    // updateurldatacatogry()
    if (pagenum === totalitems) {
      setPagenum(0);
    }
    setPagenum(pagenum + 1);
    window.scrollTo({ top: 600, left: 0, behavior: "smooth" });
  };

  const deincresepagenum = () => {
    // updateurldatacatogry()
    setPagenum(pagenum - 1);

    if (pagenum == 0) {
      setPagenum(0);
    } else {
      window.scrollTo({ top: 600, left: 0, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="booksShow">
        {lodding ? (
          <>
            <BooksLodding />
          </>
        ) : (
          books?.map((res) => {
            let Thumbnail =
              res.volumeInfo && res.volumeInfo.imageLinks.smallThumbnail;

            let title = res.volumeInfo && res.volumeInfo.title;
            return (
              <>
              <Link className="a-link" href={`PageDetails/${res.id}`}>
              <div className="card-books" key={key}>
                  <div className="image-box">
                    <Image
                      src={Thumbnail}
                      width={100}
                      height={100}
                      alt="image.jpg"
                      className="bookshowimage"
                    />
                  </div>
                  <h1 className="text-name-show-book">{title}</h1>
                </div>
              </Link>
                
              </>
            );
          })
        )}
      </div>
      <div className="pagination">
        <div className="pagi-btn">
          <button
            className="pagination-button decressed"
            onClick={() => deincresepagenum()}
          >
            priview
          </button>
          <p className="pages">
            {pagenum}/{totalitems}
          </p>
          <button
            className="pagination-button"
            onClick={() => incresspagenum()}
          >
            next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BooksShow;
