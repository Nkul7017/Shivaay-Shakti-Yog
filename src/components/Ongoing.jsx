import React, { useState } from 'react'
import Progress from './Progress'

const Ongoing = ({data}) => {
  // console.log(data);
  const [toggle,setToggle]=useState(true);
  return (
    <div>
         <div className=' pl-0   lg:pl-24 '>
          <button className={`   px-4 py-3 lg:px-6 lg:py-4 bluish   ${toggle&& "bg-[#E6F5FA] "} text-[16px] sm:text-xl `} onClick={()=>setToggle(true)} >Ongoing Courses</button>
          <button className={`    px-4 py-3 lg:px-6 lg:py-4   bluish text-[16px] sm:text-xl ${!toggle&& "bg-[#E6F5FA]"} `} onClick={()=>setToggle(false)}>Completed</button>
         </div>
       
         <div className=' ongoing flex  flex-wrap  gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-3 sm:p-5  lg:p-10  h-max   w-[100%] mx-auto '>
         {toggle&&data?.map((value)=>{
         if(value?.status==="active")
         return <>
         <Progress data={value} />
         </>}
         )}

        {!toggle&&data?.map((value)=>{
         if(value?.status==="expired")
         return <>
         <Progress data={value} />
         </>}
         )}
         </div>

       
    </div>
  )
}

export default Ongoing
