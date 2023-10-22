"use client";
import "../css/Nav.css";
import Image from "next/image";
import Icon from "../Images/icon.png";
import Link from "next/link";
import MenuImg from "../Images/menu.png";

const Navbaar = () => {
  const handlehamemenu = () => {
    const menuBox = document.getElementById("box");
    // menuBox.style.display = "none"
    if (menuBox.style.display === "block") {
      menuBox.style.display = "none";
    } else {
      menuBox.style.display = "block";
    }
  };

  // const libtn = ()=>{
  //   const menuBox = document.getElementById("box");
  //   menuBox.style.display = "none";
  // }

  return (
    <>
      <div className="Nav-Baar">
        <Link className="a-link" href="/">
          <div className="icon-name">
            <Image src={Icon} alt="icon.png" className="icon-image" />
            <h1 className="name-book">
              <span className="span-b">B</span>ookSnap
            </h1>
          </div>
        </Link>

        <div className="list-group" id="box">
          <ul className="ul-list">
            <Link href="/" className="a">
              <li className="li">Home</li>
            </Link>
            <Link href="/Books" className="a">
              <li className="li">Books</li>
            </Link>
            <Link href="/Contact" className="a">
              <li className="li">Contact</li>
            </Link>
            <Link href="/LogIn" className="a">
              <li className="li">Log In</li>
            </Link>
          </ul>
        </div>
        {/* hame burger menu */}
        <div className="hame-burger-menu" onClick={handlehamemenu}>
          <Image src={MenuImg} alt="menu.png" className="menu-image" />
        </div>
      </div>
    </>
  );
};

export default Navbaar;
