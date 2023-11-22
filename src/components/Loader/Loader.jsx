import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-centers h-96 w-screen items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#FAA200"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
