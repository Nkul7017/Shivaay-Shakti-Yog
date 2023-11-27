import { useEffect, useState } from "react";
import helping from "../../public/newsart.png";
import Flickity from "react-flickity-component";
import axios from "axios";
export default function Article() {
  const [data,setData]=useState([]);
 async function getdata()
 {
 try{
 const response=await axios.get("https://shivaay-shakti-backend-1.onrender.com/api/article");
 if(response?.data?.success===true)
 {
  setData(response?.data?.dta);
 }
 }
 catch(e)
 {
 console.log(e);
 }
 }
  useEffect(()=>{
    getdata();
  },[])
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
      <h1 className=" pl-8 sm:pl-28 heading text-4xl  sm:pt-8 pb-10  sm:pb-16  ">
        News and Articles
      </h1>
      <Flickity
        touch-action={"none"}
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions} 
      >
       {data.map((value,index)=>
        <div key={index} className="carousel-cell h-[400px] w-[88vw] sm:w-[70vw] mx-12 relative overflow-hidden">
          <div className="absolute w-[100%] md:w-[50%] rounded-2xl h-[99%] left-0 top-0 bg-[#4CAF7440] text-white grid place-content-center ">
            <div className=" w-[80%] sm:w-[70%] mx-auto space-y-2 sm:space-y-6">
              <p className="text-4xl ">{value?.heading}</p>
              <p>{value?.description}</p>
            </div>
          </div>
          <img
            src={value?.articleimg}
            alt=""
            className="h-[400px] w-[70vw] object-cover   rounded-2xl "
          />
        </div>
          )} 
      </Flickity>
    </div>
  );
}
