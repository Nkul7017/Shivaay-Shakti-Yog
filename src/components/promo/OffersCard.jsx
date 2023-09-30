import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";

const OffersCard = () => {
  const [offers, setOffers] = useState([]);

  const getOffers = () => {
    axios.get("https://shivayshaktibackend.onrender.com/offers").then((res) => {
      setOffers(res.data.filter((item) => item.showAd == true));
    });
  };

  useEffect(() => {
    getOffers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="overflow-x-hidden mt-20">
        <div className="p-6  hidden sm:flex sm:flex-col  ">
          {/* <h2>Auto Play</h2> */}
          <Slider {...settings}>
            {offers.map((item) => {
              return (
                <div className="OfferBg h-64 ">
                  <div className="mt-16 pl-[100px]">
                    <h3 className="text-[20px] font-extrabold">
                      {item?.discount} % Discount
                    </h3>
                  </div>

                  <div className="pl-[120px] mt-6">
                    <h1>{item.couponName}</h1>
                  </div>
                </div>
              );
            })}
            {offers.map((item) => {
              return (
                <div className="OfferBg h-64 ">
                  <div className="mt-16 pl-[100px]">
                    <h3 className="text-[20px] font-extrabold">
                      {item?.discount} % Discount
                    </h3>
                  </div>

                  <div className="pl-[120px] mt-6">
                    <h1>{item.couponName}</h1>
                  </div>
                </div>
              );
            })}
            {offers.map((item) => {
              return (
                <div className="OfferBg h-64 ">
                  <div className="mt-16 pl-[100px]">
                    <h3 className="text-[20px] font-extrabold">
                      {item?.discount} % Discount
                    </h3>
                  </div>

                  <div className="pl-[120px] mt-6">
                    <h1>{item.couponName}</h1>
                  </div>
                </div>
              );
            })}
            {offers.map((item) => {
              return (
                <div className="OfferBg h-64 ">
                  <div className="mt-16 pl-[100px]">
                    <h3 className="text-[20px] font-extrabold">
                      {item?.discount} % Discount
                    </h3>
                  </div>

                  <div className="pl-[120px] mt-6">
                    <h1>{item.couponName}</h1>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="p-6 gap-6 sm:hidden">
          <Slider {...settings1}>
            {offers.map((item) => {
              return (
                <div className="OfferBg h-40 ">
                <div className="mt-10 pl-[80px]">
                    <h3 className="text-[13px] font-extrabold">
                      {item?.discount} % Discount
                    </h3>
                  </div>

                  <div className="pl-[80px] text-[12px] mt-3">
                    <h1>{item.couponName}</h1>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OffersCard;
