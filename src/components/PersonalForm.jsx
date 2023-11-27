import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import AOS from "aos";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
AOS.init({
  duration: 1200,
});

function PersonalForm({toggle1,setToggle1,data,type}) {
const navigate=useNavigate();
  const [purchasedData,setPurchasedData]=useState({
  user_id:JSON.parse(localStorage.getItem('user'))?._id,
  status:"active",
  preferred_timing:"",
  duration:"",
  price:"",
  starting_date:"",
  index:null,
  message:""
  })
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days-1);
    return result.toISOString().split('T')[0];
  };
  async function handlesubmit()
  {
   if(localStorage.getItem('user'))
   {
    setPurchasedData({...purchasedData,message:""})
    if(purchasedData.preferred_timing!=="" &&purchasedData.duration!==""  &&purchasedData.price!==""&&purchasedData.starting_date!=="")
    {
      const b=purchasedData.duration.split(" ");
      if(b[1]==="Month")
      {
       b[0]=parseInt(b[0])*30;
      }
      const expirationDate = addDays(purchasedData.starting_date,parseInt(b[0]));
      delete purchasedData.index;
      delete purchasedData.message;
      purchasedData.expiration_date=expirationDate;
      purchasedData.course_name=data?.name;
      purchasedData.course_type=type;
      try{
       const response=await axios.post('https://shivaay-shakti-backend-1.onrender.com/api/purchase',purchasedData,{
        headers:{
          Authorization:localStorage.getItem('jwt')
        }
       })
       if(response?.data?.success===true)
       {
        setToggle1(false);
        setTimeout(() => {
          navigate('/UserDashboard',{replace:true})
        },1);
       }
      }
      catch(e)
      {
      setToggle1(false);
      }
    }
    else{
      setPurchasedData({...purchasedData,message:"* All Field Are Mandatory"})
    }}
    else{
  navigate('/login',{replace:true});
    }
  }
  return (
    <>
    <Popup
          open={toggle1}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            closeOnEscape={false}
            contentStyle={{
               placeContent:"center",
            backgroundImage:"url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
    <div className='  w-[100%] h-[100%] p-3 sm:p-4 md:p-8 lg:py-16 lg:px-24   '>
        <div className=' relative w-[100%] h-[100%]'>
    <div className='  flex justify-between   '> 
     <h1 className=' text-2xl  lg:text-4xl heading'>{data?.name} {data?.course_duration_days1} Days Course</h1>
     <div className="cursor-pointer   " title="close" onClick={() => {setToggle1(false); }}>
                          <HiXMark size={40} />
                        </div> 
     </div>
     <div className='flex flex-col  mt-3 lg:hidden  '>
        <div className='flex items-center gap-2 '>
        <Stack spacing={1}>
      <Rating name="half-rating-read"  defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-sm para  font-extrabold '>4.5</p>
        </div>
        <p className=' text-xs   para font-bold'>based on 78 reviews</p>
        </div>
     <div className=' flex justify-between mt-5  lg:mt-8 ga-x-10 sm:gap-x-14 md:gap-x-20  lg:gap-x-36 gap-y-4 flex-wrap '>
      
      <div className=' flex flex-col gap-5  '>
        <div className=' flex gap-2 font-extrabold items-center' style={{color:"#283143"}}>
        <AiOutlineUser size={24} className='  text-[#2C3E50] ' />
     <h1 className=' bluish text-xl lg:text-2xl '>Personal Training Sessions</h1>
        </div>

        <div className=' flex flex-col mt-1 lg:mt-4  '>
        <p className=' bluish text-[16px]  lg:text-xl'>Preferred time Slot:</p>
        <input name="preferred_timing" type="time" value={purchasedData.preferred_timing} onChange={(e)=>setPurchasedData({...purchasedData,[e.target.name]:e.target.value})} className='h-10 mt-2' />
        </div>
        <div className=' flex flex-col '>
        <p className=' bluish  text-[16px]  lg:text-xl'>Starting Date:</p>
        <input name="starting_date" min={new Date().toISOString().split('T')[0]} type="date" value={purchasedData.starting_date} onChange={(e)=>{setPurchasedData({...purchasedData,[e.target.name]:e.target.value})}} className='h-10 mt-2' />
        </div>
        <div >
<p className=' text-xl lg:text-2xl   heading ' style={{color:"#283143"}}>Select Duration</p>
<div className=' mt-4 flex flex-wrap gap-2 lg:gap-10'>
{
 data&&data.personal_duration?.map((value,i)=>
    <>
    <div>
        <button onClick={()=>{
          setPurchasedData({...purchasedData,duration:value?.timing,price:value?.price,index:i})
        }} className={`${purchasedData.index===i?"button3":"button2"}`} >{value?.timing}</button>
        <p className=' text-center mt-2 para  font-semibold text-xl lg:text-2xl '  style={{color:"#283143"}}>₹ {value?.price}</p>
    </div>
    </>)
    }
</div>
    <p className=' font-semibold mt-2 text-sm text-red-500'>{purchasedData.message}</p>
     </div>

      </div>
      
        <div className='hidden mr-40 lg:block '>
        <div className='lg:flex gap-2 '>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-xl para font-extrabold '>4.5</p>
        </div>
        <p className='  float-right para font-bold'>based on 80 reviews</p>
        </div>
     </div>

   
     <button  onClick={handlesubmit} className='absolute bottom-0 button3 right-4'>Proceed</button>
    </div>
    </div>
          </Popup>


    </>
  )
  }
export default PersonalForm
