import React, { useState } from 'react'

function Faq1({data}) {
    const [increase,setincrease]=useState(false);
  return (
    <div className='bg-[#E6F5FA] text-xs   sm:text-sm  faq   rounded-lg duration-500 flex items-center px-4 sm:px-10 py-2 sm:py-4  hover:h-auto hover:p-8   ' onMouseOut={()=>setincrease(false)}  onMouseOver={()=>{setincrease(true)}} >
     <span className={`  ${increase&&"  font-normal "}   `}><span className='${increase&&"  block space-y-2 font-bold'>{data?.question}</span>{increase&&data?.answer} </span>
    </div>
  )
}

export default Faq1
