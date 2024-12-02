import { useEffect, useState } from "react";
import helping from "../../public/newsart.png";
import Flickity from "react-flickity-component";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Article() {
  const [data, setData] = useState([
    {
      heading: "Traditional yoga vs Modern yoga",
      description:
        "From Yogas chitta vritti nirodhah to Snake Yoga, the practice of yoga has evolved significantly over the years. In some cases, it has been altered so extensively that it has lost much of its original essence. Yet, the name Yoga carries such profound depth that, in every form it takes, it continues to find devoted followers.",
      articleimg: "/article/traditional.png",
      src: "/article1",
    },
    {
      heading: "Finding the origin of Sūryanamaskāra",
      description:
        "The asana sequence known as Sūryanamaskāra literally means salute to the sun (surya = sun, namaskara = salute). Evidence suggests that this sequence has predominantly modern origins. In his book The Yoga Body, Mark Singleton traces the evolution of Sūryanamaskāra. He argues that the Sun Salutation, as practiced today, is a mixture of yoga as medical gymnastics and body-conditioning on the one hand, and state-of-the-art dumbbell work and freehand European bodybuilding techniques on the other” (Singleton, 2010, p. 124).",
      articleimg:
        "https://www.healthifyme.com/blog/wp-content/uploads/2020/10/Surya-Namaskar-1.jpg",
      src: "/article2",
    },
  ]);
  const flickityOptions = {
    initialIndex: 2,
    autoPlay: 3500,
    pauseAutoPlayOnHover: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
    cellAlign: "center",
    freeScroll: true,
    selectedAttraction: 0.005,
    draggable: false,
    friction: 0.23,
  };

  return (
    <div className=" w-[100vw] sm:w-[93vw] mx-auto overflow-scroll pt-12   scrollbar-hide  ">
      <h1 className=" pl-8 sm:pl-28 heading text-3xl sm:text-4xl  sm:pt-8 pb-10  sm:pb-16  ">
        News and Articles
      </h1>
      <Flickity
        touch-action={"none"}
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
      >
        {data.map((value, index) => (
          <Link
            to={value?.src}
            key={index}
            className="carousel-cell h-[400px] w-[88vw] sm:w-[70vw] mx-12  relative overflow-hidden"
          >
            <div className="absolute w-[100%] md:w-[50%] rounded-2xl h-[100%] left-0 top-0 bg-[#4CAF7440] text-white grid place-content-center ">
              <div className=" w-[80%] sm:w-[70%] mx-auto space-y-2 sm:space-y-6">
                <p className=" text-2xl  font-bold sm:text-4xl ">
                  {value?.heading}
                </p>
                <p className="text-[18px] w-[490px]">{value?.description}</p>
              </div>
            </div>
            <img
              src={value?.articleimg}
              alt=""
              className="h-[400px] w-[70vw] object-cover   rounded-2xl "
            />
          </Link>
        ))}
      </Flickity>
    </div>
  );
}
