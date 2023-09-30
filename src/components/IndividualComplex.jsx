import React from 'react'
import { IoIosTime } from "react-icons/io";
import StarRating from './StarRating';
import img1 from "../../public/img/Group 385.png";
import img2 from "../../public/img/Group 386.png";
import img3 from "../../public/img/Group 387.png";
import img4 from "../../public/img/Group 388.png";
import Ellipse from "../../public/img/Ellipse 3.png";

const IndividualComplex = () => {
  return (
    <>
<div id='booking'  className=" lg:bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1093471211092193291/Group_446.png')] w-full h-96 bg-cover mt-10 ">
 
 <div className='flex flex-wrap justify-center gap-10'>
<div className='bg-white shadow-2xl lg:w-[600px] rounded-2xl'>
<div className='p-4'>

        <div>
          <h1 className="text-xl text-[#FAA200] font-bold  mt-10 ml-6 lg:text-2xl  tracking-wider ">
            Hatha Yoga 60 Days Course
          </h1>
        </div>
        
   
      

      <div className="flex justify-between ">
        <div className="flex items-center gap-1 ">
          <div>
            {/* <IoIosTime className="text-xl ml-4 "></IoIosTime> */}
          </div>
          <div>
            {/* <h6>6:00am to 7:30am</h6>
            
            <h6>Morning Sessions</h6> */}
            <h1 className="ml-6 mb-5   w-44">1 on 1 Sessions</h1>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex ml-8  h-8 ">
            <div>
              {/* <img className="w-28 " src= /> */}
              <StarRating></StarRating>
            </div>
            
          </div>
          <div className="">
            <h3 className="ml-8">Based on  Reviews</h3>
          </div>
        </div>

        </div>

        <div className="flex flex-row mt-10 lg:gap-10 ">
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px]"
          src={img1}
        />
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px]"
          src={img2}
        />
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px]"
          src={img3}
        />
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px] "
          src={img4}
        />
      </div>
      <div className='flex items-center justify-end -ml-10 mt-6'>
      <h1 className='text-2xl text-black font-bold'>INR 30,000</h1>
      <h1 className='text-sm text-black'>per person</h1>
      </div>

<div className='flex items-center justify-between '>
      <div className="flex items-center gap-1 mt-4 ml-2  lg:gap-4 ">
        <h2 className="text-[#FF754C] text-xl lg:text-xl ">Individual Deal</h2>

</div>
<div>
    <button className='bg-[#FAA200] p-2 text-white rounded-md'>BOOK NOW</button>
</div>
</div>
</div>
</div>

<div className='bg-white shadow-2xl lg:w-[600px] rounded-2xl'>
<div className='p-4'>

        <div>
          <h1 className="text-xl text-[#FAA200] font-bold  mt-10 ml-6 lg:text-2xl  tracking-wider ">
            Hatha Yoga 60 Days Course
          </h1>
        </div>
        
   
      

      <div className="flex justify-between ">
        <div className="flex items-center gap-1 ">
          <div>
            {/* <IoIosTime className="text-xl ml-4 "></IoIosTime> */}
          </div>
          <div>
            {/* <h6>6:00am to 7:30am</h6>
            <h6>Morning Sessions</h6> */}
            <h1 className="ml-6 mb-5   w-44">1 on 1 Sessions</h1>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex ml-8  h-8 ">
            <div>
             
              <StarRating></StarRating>
            </div>
            
          </div>
          <div className="">
            <h3 className="ml-8">Based on  Reviews</h3>
          </div>
        </div>

        </div>

        <div className="flex flex-row mt-10 lg:gap-10 ">
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px]"
          src={img1}
        />
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px]"
          src={img2}
        />
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px]"
          src={img3}
        />
        <img
          className="w-24 h-20 lg:w-[70px] lg:h-[70px] "
          src={img4}
        />
      </div>
      <div className='flex items-center justify-end -ml-10 mt-6'>
      <h1 className='text-2xl text-black font-bold'>INR 44,000</h1>
      <h1 className='text-sm text-black'>per person</h1>
      </div>

<div className='flex items-center justify-between '>
      <div className="flex items-center gap-1 mt-4 ml-2  lg:gap-4 ">
        <h2 className="text-[#FF754C] text-xl lg:text-xl ">Couple Deal</h2>

</div>
<div>
    <button className='bg-[#FAA200] p-2 text-white rounded-md'>BOOK NOW</button>
</div>
</div>
</div>
</div>
</div>

</div>


    </>
  )
}

export default IndividualComplex