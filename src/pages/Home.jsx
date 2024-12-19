import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Helping from "../components/Helping";
import Article from "../components/Article";
import NewHero from "../components/NewHero";
import Program from  "../components/Program";
// import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import Mobilegallery from "../components/Mobilegallery";
import TrainerSection from "../components/Trainer";

function Home() {
  return (
    <div  className=" = overflow-hidden " >
      <NewHero />
      <Article/>
      <Program/>
<TrainerSection />
      <div className="hidden md:block">
      <Gallery />
      </div>
      <div className="md:hidden">
        <Mobilegallery />
      </div>
      <Helping />
      {/* <Testimonial/> */}
      <Footer />
    </div>
  );
}

export default Home;
