import "./page.module.css";
import HomeHero from "./Componnents/HomeHero";
// import SampleBooks from "./Componnents/SampleBooks";
import Catogrey from "./Componnents/Catogrey";
import Homesect from "./Componnents/Homesect";
import PopularBooks from "./Componnents/popularBooks";
import Footer from "./Componnents/Footer";
export default function Home() {
  return (
    <>
      <HomeHero />
      <Catogrey/>
      {/* <SampleBooks/> */}
      <Homesect/>
      <PopularBooks/>
      <Footer/>
    </>
  );
}
