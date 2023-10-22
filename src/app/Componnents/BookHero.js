import React from "react";
import "../css/BooksHero.css"
import Image from "next/image";
import Booksimg from "../Images/books.png"
const BookHero = () => {
  return (
    <>
     <div className="books-hero">
        <div className="books-hero-children">
             
             <div className="books-hero-text">
                <h1 className="b-hero-text">Books are a uniquely portable magic</h1>
                <p className="h-b-hero-text">Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.</p>
             </div>

             <div className="books-hero-image">
                 <Image src={Booksimg} alt="books.jpg" className="books-hero-image"/>
             </div>
              
        </div>
     </div>
    </>
  );
};

export default BookHero;
