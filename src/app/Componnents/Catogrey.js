"use client";
import { useState } from "react";
import "../css/Catogrey.css";
import Image from "next/image";
import SampleBooks from "./SampleBooks";
/* catogry images */
import MysteryImg from "../Images/block.png";
import ScienceImg from "../Images/science.png";
import RomanceImg from "../Images/love-books.png";
import FantasyImg from "../Images/castle.png";
import SelfHelpImg from "../Images/help.png";
import AdventureImg from "../Images/map.png";
import Programming from "../Images/program.png";
import Math from "../Images/think.png";
import Politician from "../Images/politician.png";
import Sciencefiction from "../Images/alien.png";
import ChefImg from "../Images/food-cover.png";
const Catogrey = () => {
  const [catogreyname, setCatogreyname] = useState("history+science+coding");
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const slide = (shift) => {
    let scrl = document.getElementById("scrl");
    scrl.scrollLeft += shift;
    setscrollX(scrollX); // Updates the latest scrolled postion
  };

  /* ............... Catogrey data................. */
  const catogreydata = [
    {
      Image: MysteryImg,
      Name: "Mystery",
    },
    {
      Image: ScienceImg,
      Name: "Science",
    },
    {
      Image: RomanceImg,
      Name: "Romance",
    },
    {
      Image: FantasyImg,
      Name: "Fantasy",
    },

    {
      Image: SelfHelpImg,
      Name: "SelfHelp",
    },

    {
      Image: AdventureImg,
      Name: "Adventure",
    },
    {
      Image: Programming,
      Name: "Programming",
    },
    {
      Image: Math,
      Name: "Math",
    },
    {
      Image: Politician,
      Name: "Politician",
    },
    {
      Image: Sciencefiction,
      Name: "Sciencefiction",
    },
    // {
    //   Image: Picturebook,
    //   Name: "Picturebook",
    // },
    {
      Image: ChefImg,
      Name: "Coocking",
    },
  ];
  //  alert(catogreyname)

  return (
    <>
      <div className="catogrey-main">
        <div className="next-btn">
          <button className="btn-next-pre" onClick={() => slide(-150)}>
            Preview
          </button>
          <button className="btn-next-pre" onClick={() => slide(+150)}>
            next
          </button>
        </div>

        <div className="catogrey" id="scrl">
          {catogreydata.map((rescato) => {
            return (
              <>
                <div
                  className="cato-name-im"
                  onClick={() => setCatogreyname(rescato.Name)}
                >
                  <Image
                    src={rescato.Image}
                    alt="image.png"
                    className="image-ad"
                    width={100}
                    height={100}
                  />
                  <h2 className="name-catogry">{rescato.Name}</h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <SampleBooks catogreyname={catogreyname} />
    </>
  );
};

export default Catogrey;
