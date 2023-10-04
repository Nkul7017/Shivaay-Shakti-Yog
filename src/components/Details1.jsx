import React from 'react'

export default function Details({data}) {
  return (
   <>
   <div className='flex gap-10 overflow-auto scrollbar-hide '>
    {data?.map((data)=>
      <div className=' flex flex-col w-[140px] gap-1 para  h-[109px]   '>
      <div className=' flex justify-center items-center gap-2 w-[155px] h-[73px]  border-2 border-[#2C3E50]  rounded-md p-4 '>
          <div> <img src={data.icon} height={40} width={40} alt="" /> </div>
          <div className='text-xl para font-semibold'>{data.icon_content}</div>
      </div>
      <div className=' text-center text-md para '>{data.sub_heading}</div>
  </div>
    )}
   
    </div>
   </>
  )
}
