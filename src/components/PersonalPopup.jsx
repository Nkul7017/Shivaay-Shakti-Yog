import { HiXMark } from "react-icons/hi2";
import Popup from "reactjs-popup";
import { FaCalendarDays } from "react-icons/fa6";
import Stats from "./Stats";
import { useState } from "react";
import {addDays,parse,parseISO} from 'date-fns';
import { DayPicker } from "react-day-picker";
function PersonalPopup({toggle1,setToggle1,data}) {
    const [toggle,setToggle]=useState(false);
    const css = `
  .my-selected:not([disabled]) { 
    border-radius: 2px;
    border: 5px solid var(--button, #E6F5FA);
    background: var(--button, linear-gradient(103deg, #E5C75E 24.85%, #B96E38 111.06%));
        color:  white;  
  }
  .my-selected:hover:not([disabled]) { 
border: 1px solid var(--button, #E5C75E);
background: var(--the, #B7DFC7);
  padding:1px;
  }
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #B7DFC7 ;
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
    /* Outline border for focused and selected elements */
    --rdp-outline-selected: 4px solid rgba(0, 0, 0, 0.75);
  }
  .rdp-month {
    margin: 0 2em;
  }
  
`;
    return ( 
        <>
          <Popup
          open={toggle1}
            // onClose={toggle1}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
           border:"none",
              display:"grid",
               placeContent:"center",
              backgroundColor:"#E6F5FA",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
            <div className='w-[90vw] h-[90vh]    '  data-aos="zoom-in"> 
            <div className=' w-[80vw] mx-auto h-[80vh] mt-10 overflow-y-auto scrollbar-hide '>
           <div className=' flex flex-col lg:flex-row justify-between items-start gap-y-6 lg:items-center '>
            <p className=' heading text-xl sm:text-3xl md:text-6xl'>{data?.course_name} Course</p>
            <div className=" flex  flex-wrap gap-2  sm:gap-4">
            {data?.status==="active"&&<a href={data?.link} className="button3  " style={{"minWidth":"120px"}}><span>Join class</span></a>}
            <button className="button3" onClick={()=>setToggle(true)} style={{"minWidth":"160px"}}><span className=" flex gap-2 items-center">Scheduled classes <FaCalendarDays/> </span></button>
            </div>
            <div
                          className="cursor-pointer absolute  top-5 right-5 sm:right-10 md:block text-3xl"
                          title="close"
                          onClick={() => {
                            setToggle1(false);
                          }}
                        >
                          <HiXMark />
                        </div>

           </div>
           <p className=" para text-sm sm:text-2xl mt-5 pl-3 ">Personal Course <span className=" heading  ml-6 sm:ml-16 ">{data?.preferred_timing}</span></p>
        
           <Stats data={data} />
            </div>
            </div>
          </Popup>
          <Popup
          open={toggle}
            // onClose={toggle1}
            position="center center"
            closeOnDocumentClick={false}
            lockScroll={true}
            contentStyle={{
           border:"none",
              display:"grid",
               placeContent:"center",
              backgroundColor:"#E6F5FA",
              width:"90vw",
              height:"90vh",
              borderRadius:"10px"
            }}
          >
            <div className='w-[90vw] h-[90vh]    '  data-aos="zoom-in"> 
            <div className=' w-[80vw] mx-auto h-[80vh] mt-10 overflow-y-auto scrollbar-hide '>
           <div className=' flex flex-col lg:flex-row justify-between items-start gap-y-6 lg:items-center '>
            <p className=' heading text-xl sm:text-3xl md:text-6xl'>{data?.course_name} Course</p>
            <div
                          className="cursor-pointer absolute  top-5 right-5 sm:right-10 md:block text-3xl"
                          title="close"
                          onClick={() => {
                            setToggle(false);
                          }}
                        >
                          <HiXMark />
                        </div>

           </div>
           <p className=" para text-xl sm:text-2xl mt-5 pl-3 ">Personal Course <span className=" heading text-sm sm:text-xl  ml-6 sm:ml-16 ">{data?.preferred_timing}</span></p>
           <style>{css}</style>
    <DayPicker
      mode="multiple"
      // min={purchasedData?.duration==="9 Month"?270:purchasedData?.duration==="3 Month"?90:purchasedData?.duration==="1 Month"?30:0}
      // max={purchasedData?.duration==="9 Month"?270:purchasedData?.duration==="3 Month"?90:purchasedData?.duration==="1 Month"?30:0}
      selected={data?.days.map(dateString => {
        return parse(dateString, 'yyyy-MM-dd', new Date());
    })}
      // onSelect={handleDayClick}
      pagedNavigation
      fixedWeeks
      numberOfMonths={data?.duration==="9 Month"?15:data?.duration==="3 Month"?6:data?.duration==="1 Month"?3:0}
      // defaultMonth={addDays(new Date(),1)}
      // fromDate={parseISO(purchasedData?.starting_date)}
      // toDate={addDays(parseISO(purchasedData?.starting_date),purchasedData?.duration==="9 Month"?404:purchasedData?.duration==="3 Month"?144:purchasedData?.duration==="1 Month"?44:0)}
      className='   overflow-x-auto max-w-[80vw] sm:max-w-[65vw]   scrollbar-default   mt-10   '
      modifiersClassNames={{
        selected: 'my-selected',
      }}
    />
            </div>
            </div>
          </Popup>
          
        </>
     );
}

export default PersonalPopup;