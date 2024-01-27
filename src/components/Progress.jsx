import React, { useEffect, useState } from 'react'
import PersonalPopup from './PersonalPopup';
import GroupPopup from './GroupPopup';
import Progress1 from './Progress1';
const Progress = ({data,index}) => {
  const [toggle,setToggle]=useState(false)
  const [toggle1,setToggle1]=useState(false)
  return (
    <>
   { data?.course_type==="group" &&
   <>
    <button onClick={()=>setToggle(true)} className=' cursor-pointer progres px-2 py-4  sm:py-6 md:px-6 md:py-8  lg:px-8 lg:py-10 lg:w-[377px] md:w-[350px] sm:w-[300px] min-h-[150px] sm:min-h-[220px] md:min-h-[220px]  lg:min-h-[250px]   w-[145px] '>
      <img src={`/assets/Programs/${data?.course_id}/Group.jpg`} className=' min-h-[100px] w-full max-h-[100px] rounded-md object-cover' alt="" />
      <p className=' text-[10px] sm:text-[16px] lg:w-2xl bluish mt-1 sm:mt-3 '>{data?.course_name}</p>
      <Progress1 data={data} />
      
      <GroupPopup data={data} toggle={toggle} setToggle={setToggle} />
    </button>
    </>}
    { data?.course_type==="personal" &&
    <>
    <button onClick={()=>setToggle1(true)} className='  cursor-pointer progres px-2 py-4  sm:py-6 md:px-6 md:py-8  lg:px-8 lg:py-10 lg:w-[377px] md:w-[350px] sm:w-[300px] min-h-[150px] sm:min-h-[220px] md:min-h-[220px]  lg:min-h-[250px]   w-[145px] '>
      <img src={`/assets/Programs/${data?.course_id}/Personal.jpg`} className=' min-h-[100px] w-full max-h-[100px] rounded-md object-cover ' alt="" />
      <p className=' text-[10px] sm:text-[16px] lg:w-2xl bluish mt-1 sm:mt-3 '>{data?.course_name}</p>
           <Progress1 data={data} />
    </button>
    <PersonalPopup data={data} toggle1={toggle1} setToggle1={setToggle1}  />
    </>
    }
    </>
  )
}

export default Progress
