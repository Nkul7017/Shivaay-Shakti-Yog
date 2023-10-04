import React from 'react'
import Popup from 'reactjs-popup';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});
import { HiXMark } from "react-icons/hi2";
function Confirmation({toggle1,setToggle,setToggle1}) {
  return (
    <>
 <Popup
          open={toggle1}
            onClose={toggle1}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
           border:"none",
              display:"grid",
               placeContent:"center",
            backgroundColor:"rgba(183, 223, 199, 0.80)",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
            <div className='w-[90vw] h-[90vh]    '  data-aos="zoom-in"> 
            <div className=' w-[80vw] mx-auto h-[80vh] mt-9 overflow-y-auto scrollbar-hide '>
           <div className=' flex justify-between items-center '>
            <p className=' heading text-6xl'>Confirmation</p>
            <div
                          className="cursor-pointer text-3xl"
                          title="close"
                          onClick={() => {
                            setToggle1(false);
                          }}
                        >
                          <HiXMark />
                        </div>
           </div>
           <div className=' mt-12  flex flex-col  gap-8 text-justify  text-md  para ' style={{color:"#000"}}>
            <p className='para text-xl   '  style={{color:"#000",fontWeight:"600"}}>You are proceeding to buy Hatha Yoga Group Session</p>
           <table className='para w-[500px] '>
            <tr>
                <th>Name </th>
                <td>- Hatha Yoga 60 Days Course</td>
            </tr>
            <tr>
                <th>Live Sessions</th>
                <td>- 60</td>
            </tr>
            <tr>
                <th>Recorded Sessions </th>
                <td>- 80+</td>
            </tr>
            <tr>
                <th>Duration </th>
                <td>- 78 Days</td>
            </tr>
            <tr>
                <th>Diet Chart</th>
                <td></td>
            </tr>
            <tr>
                <th>Difficulty level </th>
                <td>- Beginner</td>
            </tr>
            <tr>
                <th>Gender </th>
                <td>- Female</td>
            </tr>
            <tr>
                <th>Age Group </th>
                <td>- 25- 40 years</td>
            </tr>
           </table>
           <div className=' mt-1 flex flex-col  gap-8 text-justify  text-md  para ' style={{color:"#000"}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
           </div>
           <div className='  mt-8 flex  justify-end '>

            <div className=' hidden sm:flex '>
                <button className=' button3 para text-xl font-semibold  ' onClick={()=>{setToggle(true);setToggle1(false)}}  style={{width:"260px",height:"40px",color:"white"}}><span>Proceed</span></button>
            </div>
            <div className='sm:hidden flex '>
                <button className=' button3 para text-md font-semibold  ' onClick={()=>{setToggle(true);setToggle1(false)}}  style={{width:"160px",height:"40px",color:"white"}}><span>Proceed</span></button>
            </div>
           </div>
            </div>
            </div>
          </Popup>
    </>
  )
}

export default Confirmation
