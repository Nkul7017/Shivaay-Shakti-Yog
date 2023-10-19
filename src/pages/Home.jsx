import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Helping from "../components/Helping";
import Article from "../components/Article";
import NewHero from "../components/NewHero";
import Program from  "../components/Program";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div  className=" = overflow-hidden " >
      <NewHero />
      <Article/>
      <Program/>
      <Gallery />
      <Helping />
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default Home;
