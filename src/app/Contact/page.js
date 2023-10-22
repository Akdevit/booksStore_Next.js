import React from "react";
import "../css/Contact.css";
import Image from "next/image";
import Contactimg from "../Images/contact.png";
const Page = () => {
  return (
    <>
      <div className="contact-container">

        <div className="input-container">
          <div className="inputes">
            <h1 className="contact-name">Contact Us</h1>
            <input type="text" className="name" placeholder="Name" />
            <input type="Email" className="name" placeholder="Email" />
            <textarea className="textarea" placeholder="Message" />
            <button className="sub-contact">Submit</button>
          </div>
        </div>

        <div className="contact-image">
          <Image
            src={Contactimg}
            alt="contact-image.png"
            className="img-contact"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
