import React from "react";
import "../css/Footer.css";
import Image from "next/image";
import LogoFooter from "../Images/icon.png";
import readBook from "../Images/22896101_6721774-removebg-preview.png";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="foter-sect">
          <div className="logo-name-footer">
            <div className="logo-footer-text">
              <Image src={LogoFooter} alt="icon.png" className="icon-png" />
              <h1 className="text-name">BookSnap</h1>
            </div>

            <div className="menu">
              <ul className="ul-list-footer">
                <a href="/" className="a">
                  <li className="li">Home</li>
                </a>
                <a href="/Books" className="a">
                  <li className="li">Books</li>
                </a>
                <a href="/Contact" className="a">
                  <li className="li">Contact</li>
                </a>
                <a href="/LogIn" className="a">
                  <li className="li">Log In</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="readbookname">
            <Image src={readBook} alt="readBook.png" className="readBookimage"/>
         </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
