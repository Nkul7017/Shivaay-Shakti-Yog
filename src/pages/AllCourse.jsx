import React from 'react'
import course from '../../public/Course/course.png'
import HeroNavbar from '../components/HeroNavbar'
import Card1 from '../components/Card1';
import {FaSearch } from "react-icons/fa";
import Footer from '../components/Footer';
import {FaFilter } from "react-icons/fa";
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import helping1 from "../../public/helping1.png";
function AllCourse() {
  return (
   <>
   
    <div className="  ">
        <div className=" relative z-10 px-2  ">
          <HeroNavbar />
        </div>

        {/*------------------------------- Hero Section-------------------------------------------- */}
            <img
            className=" -mt-20 sm:-mt-40 w-screen h-[170px] sm:h-[470px]   "
              src={course}
              alt=""
            />
  
      </div>
      <div className='w-[88vw] sm:w-[70vw] mt-12  sm:mt-20 mx-auto '>
      <div className='relative flex justify-between w-[100%] items-center '>
          <input type="text" placeholder=' Search' className='  pl-10 placeholder-[#444444] w-[60vw] text-2xl h-[36px] rounded-[10px] text-[#444] bg-[#EEEEEE]' />
          <FaSearch className='absolute w-[20px] top-2 left-3  text-[#444444]   z-50  '/>
          <FaFilter className='w-[25px] h-[25px]  mr-10 text-[#2C3E50] '/>
          </div>

          <div className="  text-4xl pt-20 p sm:pl-2 heading  ">
          <h1 className=' mb-10  '>Most Popular</h1>
        </div>

        {/*-------------------------------- Desktop------------------------------------------- */}
        <section className=' hidden sm:flex box  p-1   gap-7 sm:gap-10 mt-6  scrollbar-hide   overflow-scroll '>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
        </section>

        {/*-------------------------------- MObile--------------------------------------------- */}
        <section className=' flex sm:hidden box  p-1  box  gap-7 sm:gap-10 mt-6  overflow-x-scroll scrollbar-hide '>
            <Card4 img={helping1} />
            <Card4 img={helping1} />
            <Card4 img={helping1} />
            <Card4 img={helping1} />
        </section>

        <div className="  text-4xl pt-12     sm:pt-28 p sm:pl-2 heading  ">
          <h1 className=' mb-10  '>All Courses</h1>
        </div>

        {/*-------------------------------- Desktop------------------------------------------- */}
        <section className=' hidden box  p-1  sm:flex gap-7 sm:gap-10 mt-6   flex-wrap  '>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
        </section>

        {/*-------------------------------- MObile--------------------------------------------- */}
        <section className=' sm:hidden box    flex gap-5 sm:gap-10 mt-6   flex-wrap  '>
        
     <Card3 img={""} type={2} />
     <Card3 img={""} type={2} />    
     <Card3 img={""} type={2} />
     <Card3 img={""} type={2} />
 
        </section>

      </div>
      <section className='mt-24'>
      <Footer/>
      </section>
   </>
  )
}

export default AllCourse
