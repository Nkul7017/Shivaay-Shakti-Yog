import React from 'react'
import Popup from 'reactjs-popup';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});
import { HiXMark } from "react-icons/hi2";
function Terms({toggle,setToggle}) {
  return (
    <>
 <Popup
          open={toggle}
            onClose={toggle}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
           border:"none",
              display:"grid",
               placeContent:"center",
               backgroundImage:"url('https://cdn.discordapp.com/attachments/1111568797476868128/1113746626696204349/WhatsApp_Image_2023-06-01_at_11.16.50.jpg')",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
            <div className='w-[90vw] h-[90vh]    '  data-aos="zoom-in"> 
            <div className=' w-[80vw] mx-auto h-[80vh] mt-10 overflow-y-auto scrollbar-hide '>
           <div className=' flex justify-between items-center '>
            <p className=' heading text-6xl'>Terms & Conditions</p>
            <div
                          className="cursor-pointer text-3xl"
                          title="close"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <HiXMark />
                        </div>
           </div>
           <div className=' mt-8 flex flex-col  gap-8 text-justify  text-md  para ' style={{color:"#000"}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
           <div className='  mt-8 flex justify-between items-center
            '>
            <div className=' flex gap-3 items-center '>
                 <input type="checkbox" name="" id="agree" className=' focus:accent-[#2C3E50] w-6 h-6 ' />
                 <label className='para text-sm sm:text-md   font-semibold' htmlFor="agree" style={{color:"black"}}>I agree to the terms above</label>
            </div>
            <div className=' hidden sm:flex '>
                <button className=' button3 para text-xl font-semibold  ' onClick={()=>{
                    setToggle(true)}} style={{width:"260px",height:"40px",color:"white"}}><span>Proceed To Checkout</span></button>
            </div>
            <div className='sm:hidden flex '>
                <button onClick={()=>{
                    setToggle(true)}} className=' button3 para text-md font-semibold  ' style={{width:"160px",height:"40px",color:"white"}}><span>Proceed To Checkout</span></button>
            </div>
           </div>
            </div>
            </div>
          </Popup>
    </>
  )
}

export default Terms
