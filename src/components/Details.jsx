import React from 'react'

export default function Details({data}) {
  return (
   <>
   <div className='flex gap-10 overflow-auto scrollbar-hide '>
    {data?.map((data)=>
      <div className=' flex flex-col items-center justify-center w-[120px] gap-2 para  h-[130px]   '>
      
          <div> <img src={data.icon} alt="" /> </div>
      <div className=' text-xs  sm:text-sm para text-center '>{data.sub_heading}</div>
  </div>
    )}
   
    </div>
   </>
  )
}
