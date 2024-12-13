import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const imageData = [
  "https://images.pexels.com/photos/13849063/pexels-photo-13849063.jpeg",
  "https://images.pexels.com/photos/8980974/pexels-photo-8980974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7353048/pexels-photo-7353048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4151869/pexels-photo-4151869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5386371/pexels-photo-5386371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3618721/pexels-photo-3618721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/348489/pexels-photo-348489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2121068/pexels-photo-2121068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "/assets/Programs/1/banner3.jpg",
  "/assets/Programs/1/banner1.jpg",
  "/assets/Programs/2/banner1.jpg",
  "/assets/Programs/1/banner4.jpg"
];

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group absolute top-[50%] w-full flex justify-between items-center ">
      <button onClick={previous} className="bg-primary02 text-black p-1 rounded-full">
        <FaChevronLeft size={24} />
      </button>
      <button onClick={next} className="bg-primary02 text-black p-1 rounded-full">
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

const MobileGallery = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <h1 className='px-8 pb-4 heading text-3xl pt-8 md:pt-0'>Shivaay Shakti Gallery</h1>
      <div className="relative">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={false}
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside={true}
          arrows={false} 
        >
          {imageData.map((imgSrc, index) => (
            <div key={index} className='px-8'>
              <img src={imgSrc} alt={`Slide ${index + 1}`} className="w-full h-[350px] rounded-xl" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MobileGallery;
