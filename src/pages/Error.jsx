import React from "react";
import { Link, useLocation } from "react-router-dom";

const Error = () => {
  let location = useLocation();
  return (
    <div className="flex flex-col items-center text-center justify-center mt-32">
      <h1>Page Not Found at {location.pathname}</h1>
      <div>
        <Link to="/">
        <button className="mt-10">Go Back To <span className="text-indigo-500">Home</span> </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
