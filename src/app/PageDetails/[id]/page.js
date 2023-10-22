"use client";
import React, { useEffect, useState } from "react";
import "@/app/css/PageDetails.css";
import Image from "next/image";
const Page = ({ params }) => {
  let id = params.id;
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pubdate, setPubdate] = useState("");
  const [contentVersion, setContentVersion] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [buylink, setBuylink] = useState("");
  const [infoLink, setInfoLink] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [pdf, setPdf] = useState("");
  const [lodding, setLodding] = useState(true);

  useEffect(() => {
    setLodding(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?projection=lite&key=AIzaSyCfRcGfCU5s_FqYDfbkcUZCTSMMRnEy50M`
    )
      .then((Response) => Response.json())
      .then((resdata) => {
        // console.log(resdata.accessInfo.pdf.acsTokenLink);
        setPdf(resdata.accessInfo.pdf.acsTokenLink);
        setBuylink(resdata.saleInfo.buyLink);
        setPreviewLink(resdata.volumeInfo.previewLink);
        setInfoLink(resdata.volumeInfo.infoLink);
        setDescription(resdata.volumeInfo.description);
        setCountry(resdata.saleInfo.country);
        setSubtitle(resdata.volumeInfo.subtitle);
        setContentVersion(resdata.volumeInfo.contentVersion);
        setPubdate(resdata.volumeInfo.publishedDate);
        setPublisher(resdata.volumeInfo.publisher);
        setAuthor(
          resdata.volumeInfo.authors
            ? resdata.volumeInfo.authors
            : resdata.volumeInfo.authors
        );
        setTitle(resdata.volumeInfo && resdata.volumeInfo.title);
        setImage(resdata.volumeInfo && resdata.volumeInfo.imageLinks.thumbnail);
        setLodding(false);
      });
  }, [id]);

  return (
    <>
      <div className="page-details-cointers">
        {lodding ? (
          <>
            <h1>Lodding.....</h1>
          </>
        ) : (
          <>
            <div className="pagedetails-image-title">
              <Image
                src={image}
                width={100}
                height={100}
                alt="image.jpg"
                className="imagepageauthor-img"
              />
              <h1 className="image-title">{title ? title : ""}</h1>
              <p className="image-subtitles">{subtitle ? subtitle : ""}</p>
            </div>
            <div className="pagedetails-more-details">
              <h1 className="authore-name">
                <span className="autho">Authors:</span>
                {author ? author : ""}
              </h1>
              <h1 className="publisher">
                <span className="publi">publisher:</span>
                {publisher ? publisher : ""}
              </h1>
              <h1 className="publishdate">
                <span className="publidate">publishedDate:</span>
                {pubdate ? pubdate : ""}
              </h1>
              <h1 className="contentversion">
                <span className="contentver">contentVersion:</span>
                {contentVersion ? contentVersion : ""}
              </h1>
              <h1 className="conuntry-name">
                <span className="country">country:</span>
                {country ? country : ""}
              </h1>
              <p className="description">{description}</p>
              <div className="link-btn">
                <button className="previw-link">
                  <a className="a-link" href={previewLink ? previewLink : null}>
                    {previewLink ? "PriviewLink" : "Not PriviewLink"}
                  </a>
                </button>
                <button className="previw-link">
                  <a className="a-link" href={infoLink ? infoLink : null}>
                    {infoLink ? "infoLink" : "Not infoLink"}
                  </a>
                </button>
              </div>
              <div className="btn-down-buy">
                <button className="buy-button">
                  <a className="a-link" href={buylink ? buylink : null}>
                    {buylink ? "buyLink" : "Not buyLink"}
                  </a>
                </button>
                <button className="downloade-button">
                  <a className="a-link" href={pdf ? pdf : null}>
                    {pdf ? "PDF Downloade" : "Not PDF"}
                  </a>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
