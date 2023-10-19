import React from 'react'
import Card1 from './Card1'
import {FaSearch } from "react-icons/fa";
export default function Program() {
  return (
   <>
   <div className='  flex flex-col gap-2 -mt-3 w-[90vw]  sm:w-[80vw] h-auto mx-[auto] '>
   <div className="  text-4xl pt-28  pl-3 sm:pl-2 heading  ">
          <h1 className=' mb-10  '>Programs</h1>
          <div className='relative'>
          <input type="text" placeholder=' Search' className='  pl-10 placeholder-[#444444] w-[50vw] text-2xl h-[36px] rounded-[10px] text-[#444] bg-[#EEEEEE]' />
          <FaSearch className='absolute w-[20px] top-2 left-3  text-[#444444]   z-50  '/>
          </div>
        </div>
        <section className=' box  p-1  flex gap-7 sm:gap-24 mt-6  overflow-scroll scrollbar-hide  '>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
        </section>
        </div>
   </>
  )
}
