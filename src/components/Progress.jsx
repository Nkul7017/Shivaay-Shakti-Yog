import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import {LuCalendarDays} from 'react-icons/lu'
import upcoming  from '../../public/dashboard/upcoming.png'

const Progress = () => {
  return (
    <div className=' progres px-2 py-8 md:px-6 md:py-8  lg:px-8 lg:py-10 lg:w-[377px] md:w-[350px] sm:w-[300px]   w-[145px] '>
      <p className=' text-[16px] lg:w-2xl bluish  '> Yoga Beginner</p>
      <ProgressBar completed={58} bgColor='#2C3E50' className='  mt-3   lg:mt-5 ' />
      <div className=' flex justify-between  mt-4 lg:mt-6 '>
        <button className=' hidden sm:block button1 text-white lg:p-2 rounded-md  text-sm lg:text-[18px]  sm:w-[120px] md:w-[140px] lg:w-[170px]   ' >Upcoming Classes</button>
        <button className=' flex items-center  justify-center sm:hidden button1 text-white   rounded-md text-sm lg:text-[18px] h-[40px] w-[74px]    ' > 
        <img src={upcoming} alt="" />
         Class</button>
        <button  className=' button1 text-white  rounded-md  w-[37px] sm:w-auto p-1  '><LuCalendarDays   size={30} /></button>
      </div>
    </div>
  )
}

export default Progress
