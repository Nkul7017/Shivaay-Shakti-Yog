import React, { useEffect, useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import {LuCalendarDays} from 'react-icons/lu'
import upcoming  from '../../public/dashboard/upcoming.png'
import PersonalPopup from './PersonalPopup';
import GroupPopup from './GroupPopup';
import { differenceInDays } from 'date-fns';
const Progress = ({data}) => {
  const [toggle,setToggle]=useState(false)
  const [toggle1,setToggle1]=useState(false)
  const [prog,setProg]=useState(0);

  useEffect(() => {
    if (data?.course_type === "group" && data?.starting_date && data?.expiration_date) {
const total=differenceInDays( new Date(data?.expiration_date),new Date(data?.starting_date))+1;
  const current=differenceInDays( new Date(),new Date(data?.starting_date))+1;
console.log(Math.ceil((current/total)*100))
const progress=Math.min((Math.ceil((current/total)*100)),100);
setProg(progress);
    }
  }, [data]);
  return (
    <>
   { data?.course_type==="group" &&
   <>
    <button onClick={()=>setToggle(true)} className=' cursor-pointer progres px-2 py-4  sm:py-6 md:px-6 md:py-8  lg:px-8 lg:py-10 lg:w-[377px] md:w-[350px] sm:w-[300px] min-h-[150px] sm:min-h-[220px] md:min-h-[220px]  lg:min-h-[250px]   w-[145px] '>
      <img src={`/assets/Programs/${data?.course_id}/Group.png`} className=' min-h-[100px] rounded-md object-fill' alt="" />
      <p className=' text-[16px] lg:w-2xl bluish mt-1 sm:mt-3 '>{data?.course_name}</p>
      <ProgressBar completed={prog} bgColor='#2C3E50' className=' mt-1  sm:mt-3   lg:mt-5 ' />
      <GroupPopup data={data} toggle={toggle} setToggle={setToggle} />
    </button>
    </>}
    { data?.course_type==="personal" &&
    <>
    <button onClick={()=>setToggle1(true)} className='  cursor-pointer progres px-2 py-4  sm:py-6 md:px-6 md:py-8  lg:px-8 lg:py-10 lg:w-[377px] md:w-[350px] sm:w-[300px] min-h-[150px] sm:min-h-[220px] md:min-h-[220px]  lg:min-h-[250px]   w-[145px] '>
      <img src={`/assets/Programs/${data?.course_id}/Personal.png`} className=' min-h-[100px] rounded-md object-cover sm:object-fill' alt="" />
      <p className=' text-[16px] lg:w-2xl bluish mt-1 sm:mt-3 '>{data?.course_name}</p>
      <ProgressBar completed={prog} bgColor='#2C3E50' className=' mt-1  sm:mt-3   lg:mt-5 ' />
    </button>
    <PersonalPopup data={data} toggle1={toggle1} setToggle1={setToggle1}  />
    </>
    }
    </>
  )
}

export default Progress
