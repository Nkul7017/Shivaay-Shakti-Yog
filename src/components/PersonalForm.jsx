import React from 'react'
import Popup from 'reactjs-popup';
import AOS from "aos";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "aos/dist/aos.css";
import TymPicker from './TymPicker';
import DtePicker from './DtePicker';
import { Link } from 'react-router-dom';
AOS.init({
  duration: 1200,
});

function PersonalForm({toggle1,setToggle1,data}) {
  return (
    <>
    <Popup
          open={toggle1}
            onClose={toggle1}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
        //    border:"none",
            //   display:"grid",
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
        <TymPicker/>
        </div>
        <div className=' flex flex-col '>
        <p className=' bluish  text-[16px]  lg:text-xl'>Starting Date:</p>
        <DtePicker/>
        </div>
        <div >
<p className=' text-xl lg:text-2xl   heading ' style={{color:"#283143"}}>Select Duration</p>
<div className=' mt-4 flex flex-wrap gap-2 lg:gap-10'>
{
 data&&data.personal_duration?.map(value=>
    <>
    <div>
        <button className=' button2'>{value?.timing}</button>
        <p className=' text-center mt-2 para  font-semibold text-xl lg:text-2xl '  style={{color:"#283143"}}>₹ {value?.price}</p>
    </div>
    </>)
    }
</div>
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

   
     <Link to="/Login" className='absolute bottom-0 button3 right-4'>Proceed</Link>
    </div>
    </div>
          </Popup>


    </>
  )
  }
export default PersonalForm
