import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import axios from "axios";

export default function Program() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:5000/api/course/");
      console.log(response.data);
      if (Array.isArray(response.data.data)) {
        setData(response.data.data);
      } else {
        console.error("Expected an array in response.data.data");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data)

  return (
    <div className="flex flex-col gap-2 -mt-3 w-[90vw] sm:w-[80vw] h-auto mx-auto">
      <div className="text-4xl pt-14 sm:pt-28 pl-3 sm:pl-2 heading">
        <h1 className="mb-6 sm:mb-4 text-3xl sm:text-4xl">Programs</h1>
      </div>
      {data && (
        <section className="box p-1 flex flex-col sm:flex-row gap-9 sm:gap-10 sm:mt-6 overflow-scroll scrollbar-hide">
          {data.map((value, index) => (
            <Card1 key={index} value={value} />
          ))}
        </section>
      )}
    </div>
  );
}
