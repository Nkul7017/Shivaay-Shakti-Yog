import React, { useEffect, useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { differenceInDays, format, parse, startOfDay } from 'date-fns';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Progress1({ data }) {
  const [progress, setProgress] = useState(0);
   const navigate=useNavigate()
   async function changestatus(_id)
   {
    try {
      const response=await axios.put(`http://localhost:5000/api/purchase/status/${_id}`,{
        status:"expired",
      },
      {headers:{
        Authorization:localStorage.getItem('jwt')
      }}
      )
      if(response?.status===200)
      {
        navigate("/");
      }
   } catch (error) {
     console.log(error)
   }
   }
  useEffect(() => {
    if (data?.course_type === "group" && data?.starting_date && data?.expiration_date) {
      const total = differenceInDays(new Date(data?.expiration_date), new Date(data?.starting_date)) + 1;
      const current = differenceInDays(new Date(), new Date(data?.starting_date)) + 1;
      console.log(data?.status);
      console.log(Math.ceil((current / total) * 100))
      if((Math.ceil((current / total) * 100))>=100 && data?.status==="active")
      {
        changestatus(data?._id);
      }
      else
      setProgress(Math.min((Math.ceil((current / total) * 100)), 100));
    }
    if (data?.course_type === "personal") {
      console.log(data?.course_name)
      let days1 = data?.days.map((dateString) => startOfDay(parse(dateString, 'yyyy-MM-dd', new Date())));
      console.log(days1)
      console.log(new Date())
      let index = days1.findIndex((element) => new Date() < element);
      console.log(index);
      index>=0?index:0;
      if(Math.ceil((index/data?.days?.length)*100)>=100 && data?.status==="active")
      {
        changestatus(data_id);
      }
      else{
console.log(Math.min((Math.ceil((index/data?.days?.length)*100)), 100))
        setProgress(Math.min((Math.ceil((index/data?.days?.length)*100)), 100));
      }
  }},[data]);

  return (
    <>
      <ProgressBar labelSize='9px'   completed={progress} bgColor='#2C3E50' className=' mt-1 sm:mt-3 lg:mt-5'  />
    </>
  );
}

export default Progress1;
