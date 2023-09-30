import React, { useEffect, useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(Math.floor(Math.random() * (6 - 3)) + 3);
  }, [rating]);

  return (
    <>
    <div className="flex">
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              // onClick={() => setRating(index)}
              // onMouseEnter={() => setHover(index)}
              // onMouseLeave={() => setHover(rating)}
            >
              <span>&#9733;</span>
            </button>
          );
        })}
      </div>
      <div className="ml-1">
        <h4 className="bg-[#283143] w-10 mx-4 text-white  text-center  rounded-xl">
          {rating}.0
        </h4>
      </div>
      </div>
    </>
  );
};

export default StarRating;
