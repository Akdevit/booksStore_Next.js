import "../css/HomeHero.css";
import Image from "next/image";
import ReadImage from "../Images/read-book.png";
import Link from "next/link";
const HomeHero = () => {
  return (
    <>
      <div className="HomeHeroContainer">
        <div className="text-image">
          <div className="text-btn">
            <h1 className="text-b">
              Immerse Yourself in Digital Worlds of Words.
            </h1>
            <p className="text">
              Elevate your reading journey with our handpicked e-books, where
              every page invites you to explore new worlds and ideas.
            </p>

            <div className="buttions-with">
              <Link href="/LogIn" className="a-link">
                <button className="Log-in" title="Login Button">
                  Log in
                </button>
              </Link>
              <Link href="/Books" className="a-link">
                {" "}
                <button
                  className="explore-m-b"
                  title="Explore more books Button"
                >
                  Explore books
                </button>
              </Link>
            </div>
          </div>

          <div className="images">
            <Image src={ReadImage} alt="read-books.png" className="read-book" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
