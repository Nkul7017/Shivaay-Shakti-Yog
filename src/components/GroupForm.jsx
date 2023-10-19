import React from 'react'
import Popup from 'reactjs-popup';
import AOS from "aos";
import { HiXMark } from "react-icons/hi2";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import img1 from '../../public/Program/Group/group_form_icon/1.png'
import img2 from '../../public/Program/Group/group_form_icon/2.png'
import img3 from '../../public/Program/Group/group_form_icon/3.png'
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
AOS.init({
  duration: 1200,
});

function GroupForm({toggle1,setToggle1}) {
    const data=[
        {icon:img1,heading:"Group Sessions",content:"60 yogis"},
        {icon:img2,heading:"6:00am to 7:30am",content:"Morning Sessions"},
        {icon:img3,heading:"Starting",content:"20/03/2023"},
    ]
    const data1=[
      {duration:"1Day",price:"₹ 1,000"},
      {duration:"3 Months",price:"₹ 15,000"},
      {duration:"9 Months",price:"₹ 25,000"},
    ]
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
    <div className='  w-[100%] h-[100%] p-6 sm:p-6 md:p-10 lg:p-24   '>
        <div className=' relative w-[100%] h-[100%]'>
    <div className='  flex justify-between   '> 
     <h1 className=' text-2xl  lg:text-4xl heading'>Hatha Yoga 60 Days Course</h1>
     <div className="cursor-pointer   " title="close" onClick={() => {setToggle1(false); }}>
                          <HiXMark size={40} />
                        </div> 
     </div>
     <div className='flex flex-col lg:hidden mt-3   '>
        <div className='flex  gap-2 items-center '>
        <Stack spacing={1}   >
      <Rating name="half-rating-read"  defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-sm  para  font-extrabold '>4.2</p>
        </div>
        <p className=' text-xs  para font-bold'>based on 78 reviews</p>
        </div>
     <div className=' flex mt-6 lg:mt-8 gap-x-10 sm:gap-x-14 md:gap-x-20  lg:gap-x-36 gap-y-4 flex-wrap '>
        {
        data.map(value=>
            <>
             <div className=' flex gap-3 '>
                {/* <img src="" alt="" /> */}
                <p><img src={value.icon} className='mt-1'  alt="" /></p>
                <div>
                    <p className=' text-[#283143] text-[16px] para  font-extrabold ' >{value.heading}</p>
                    <p className=' heading text-xl lg:text-2xl  '>{value.content}</p>
                </div>
             </div>
            </>)
        }
        <div className='hidden lg:block '>
        <div className='lg:flex gap-2 '>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
    </Stack>
    <p className='text-xl para font-extrabold '>4.5</p>
        </div>
        <p className='  float-right para font-bold'>based on 78 reviews</p>
        </div>
     </div>

     <div className='mt-14'>
<p className=' text-xl lg:text-2xl   heading ' style={{color:"#283143"}}>Select Duration</p>
<div className=' mt-4 flex flex-wrap gap-3 lg:gap-10'>
    {
 data1.map(value=>
    <>
    <div>
        <button className=' button2'>{value.duration}</button>
        <p className=' text-center mt-2 para  font-semibold text-xl lg:text-2xl '  style={{color:"#283143"}}>{value.price}</p>
    </div>
    </>)
    }
</div>
     </div>
     <Link to="/Login" className='absolute bottom-0 button3 right-4'>Proceed</Link>
    </div>
    </div>
          </Popup>


    </>
  )
  }
export default GroupForm
