import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/Images/Rectangle46.png";
import comma from "../assets/Images/comma.png";
import comma2 from "../assets/Images/comma2.png";

const arry = [
  {
    img: '../testimonial/priyangni.jpg',
    name: "Priyangini Sharma ",
    designation: "Stress Management",
    ptag: "Using stress management techniques has changed my life. Daily meditation and exercise have made me feel better and more focused. Now, I handle challenges more easily. I highly recommend it to anyone feeling stressed.",
  },
  {
    img: img1,
    name: "Shalini Bisht",
    designation: "Stress Management",
    ptag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus magna sit amet urna molestie venenatis. Aenean suscipit semper nisl, et luctus diam euismod ut. Mauris ac maximus sem, vitae aliquam tortor. Integer urna nisi, convallis sit amet ante rutrum, consectetur gravida lorem.",
  },
  {
    img: img1,
    name: "Priya Singh",
    designation: "Weight Loss",
    ptag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus magna sit amet urna molestie venenatis. Aenean suscipit semper nisl, et luctus diam euismod ut. Mauris ac maximus sem, vitae aliquam tortor. Integer urna nisi, convallis sit amet ante rutrum, consectetur gravida lorem. ",
  },
  {
    img: img1,
    name: "Vaibhav Negi",
    designation: "Weight Loss",
    ptag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus magna sit amet urna molestie venenatis. Aenean suscipit semper nisl, et luctus diam euismod ut. Mauris ac maximus sem, vitae aliquam tortor. Integer urna nisi, convallis sit amet ante rutrum, consectetur gravida lorem. ",
  },
];

export default function Testimonial() {
  return (
    <section className="py-16 sm:py-6 ">
      <p className="text-4xl  pl-8 sm:pl-40 heading mb-2 ">Testimonials</p>
      <div className="container  text-justify w-[90vw] md:w-[85vw] lg:w-[90vw]   mx-auto   ">
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={true}
          emulateTouch={false}
          swipeable={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
        >
          {arry.map((testimonial, index) => (
            <div
              className="mt-8  w-[84vw] mx-auto sm:w-[80vw] h-[600px]  sm:h-[550px]    lg:h-[500px]  flex items-center    "
              key={index}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

const TestimonialCard = ({ img, name, ptag, designation }) => (
  <>
    <div className="hidden md:flex rounded-lg  mb-4 h-[300px] md:h-[350px] lg:h-[400px] ">
      <div className=" bg-[#E6F5FA] flex-none  w-[230px] lg:w-[340px] relative z-10 self-center h-[50%] lg:h-[74%] rounded-lg shadow-md  ">
        <img
          src={img}
          alt={name}
          className="w-full -mt-16 lg:-mt-16 ml-4 h-[300px] lg:h-[400px] rounded-lg shadow-sm "
        />
      </div>
      <div className=" bg-[#E6F5FA] flex  flex-col px-12 lg:px-28  self-center h-[50%] lg:h-[74%]     rounded-lg   justify-center relative">
        <p className=" text-left text-3xl heading mb-1  lg:mb-2 ">{name}</p>
        <p className=" para text-left text-xl mb-2 lg:mb-4">{designation}</p>
        <p className="lg:text-[16px] para text-[10px]  text-justify">{ptag}</p>
        <div className="block top-18 left-5 w-5 lg:w-8  lg:top-[45%] lg:left-12 z-50 absolute">
          <img src={comma2} alt="comma" />
        </div>
        <div className="block h-2 w-5 bottom-6 lg:w-8 right-5 lg:top-[80%] lg:right-10 z-50 absolute">
          <img src={comma} alt="comma" />
        </div>
      </div>
    </div>

    <div className=" md:hidden border rounded-lg flex flex-col justify-center items-center  bg-[#B7DFC7]  shadow-md   py-4   ">
      <div className=" h-[50%]     ">
        <img src={img} alt={name} className="w-full   rounded-md  shadow-sm " />
      </div>
      <div className="p-4 flex flex-col justify-end   sm:pt-8 h   text-[#444444]   ">
        <p className=" heading text-left text-[24px] mb-2 ">{name}</p>
        <p className="heading text-left text-[16px] mb-4">{designation}</p>
        <p className=" para text-[12px] text-justify ">{ptag}</p>
      </div>
    </div>
  </>
);
