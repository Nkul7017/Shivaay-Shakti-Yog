import React from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";

function Classes({ data, loader }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <h1 className="text-xl font-extrabold title-font lg:pl-36 lg:mt-14 text-yellow-600">
            BOOK NOW
          </h1>
          <h1 className="lg:text-[40px] text-2xl font-extrabold title-font  lg:pl-36 text-gray-900 mb-10">
            Upcoming Classes
          </h1>

          {/* FOR mob CARD */}
          {loader && <Loader />}
          {!loader && (
            <>
              <div className="lg:px-28 sm:hidden">
                <div className="flex justify-center">
                  <div className="p-10   w-[370px] lg:w-[1000px]   lg:ml-[250px]">
                    <Slider {...settings}>
                      {data.map((item, index) => {
                        // console.log(item);
                        return (
                          <div className=" lg:p-5 lg:ml-10 ">
                            <div className=" border-2  lg:w-[320px]  border-opacity-60 rounded-3xl ">
                              <img
                                className=" w-full h-48 rounded-2xl rounded-b-none object-cover object-center"
                                src={item.image}
                                alt="blog"
                              />
                              <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
                                  {item.name}
                                </h1>
                                <p className="title-font text-lg font-light text-gray-900 mb-1">
                                  Group Sessions
                                </p>
                                <p className="leading-relaxed mb-1 text-lg">
                                  Batch Size: {item.batchSize}
                                  <br />
                                  Duration: {item.duration} Days
                                  <br />
                                  {/* Start Date: {item?.startDate?.slice(0, 10)} */}
                                  {/* <br /> */}
                                  Price: ₹ {item.price}
                                </p>
                              </div>
                            </div>
                            <div className="text-center mt-5 lg:-ml-7">
                              <Link to={`/category/group-session/${item?._id}`}>
                                <button className="inline-flex text-white bg-[#293241] rounded-full border-0 py-2 px-6 focus:outline-none  text-lg">
                                  View Details
                                </button>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                    {/* <div className="p-2 w-full flex justify-center py-5">
                <a href=" " target="_blank" className="  text-white bg-[#FF975C] border-0 py-2 px-5 focus:outline-none rounded-[93px] text-sm">Read More</a>
              </div> */}
                  </div>
                </div>
              </div>

              {/* FOR destop card */}

              <div className="sm:flex flex-wrap lg:px-12 justify-evenly gap-2 hidden">
                {data.map((item, index) => {
                  // console.log(item);
                  return (
                    <div className=" lg:p-4 lg:ml-10 ">
                      <div className=" border-2  lg:w-[310px]  border-opacity-60 rounded-3xl ">
                        <img
                          className=" w-full h-48 rounded-2xl rounded-b-none object-cover object-center"
                          src={item.image}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-1 h-14">
                            {item.name}
                          </h1>
                          <p className="title-font text-lg font-light text-gray-900 mb-1">
                            Group Sessions
                          </p>
                          <p className="leading-relaxed mb-1 text-lg">
                            Batch Size: {item.batchSize}
                            <br />
                            Duration: {item.duration} Days
                            {/* <br /> */}
                            {/* Start Date: {item?.startDate?.slice(0, 10)} */}
                            <br />
                            Price: ₹ {item.price}
                          </p>
                        </div>
                      </div>
                      <div className="text-center mt-5 lg:-ml-7">
                        <Link to={`/category/group-session/${item?._id}`}>
                          <button className="inline-flex text-white bg-[#293241] rounded-full border-0 py-2 px-6 focus:outline-none  text-lg">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Classes;
