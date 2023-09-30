import React, { useState } from 'react'

function Faq1({data}) {
    const [increase,setincrease]=useState(false);
  return (
    <div className='bg-[#B7DFC7] w-[73vw]   rounded-lg heading duration-500 flex items-center px-10 py-4  hover:h-auto hover:p-8 hover:bg-[#2C3E50]  hover:text-white  ' onMouseOut={()=>setincrease(false)}  onMouseOver={()=>{setincrease(true)}} >
     <span className='text-md    '>{data.slice(0,122)}{increase&&data.slice(122)} </span>
    </div>
  )
}

export default Faq1
