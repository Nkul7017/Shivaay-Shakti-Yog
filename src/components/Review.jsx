import React from 'react'
import program from '../../public/program.png'
import star from '../../public/rstar.png'
function Review({name,heading,content}) {
  return (
    <>
    <div className='  gap-3'>
        <div className='flex gap-3 items-center '>
     <span className='sm:w-[36px] sm:h-[36px]  w-[24px] h-[24px] '> <img src={program} className='sm:w-[36px] sm:h-[36px]  w-[24px] h-[24px] rounded-full ' alt="" />  </span>
     <span className=' text-xs  '>{name}</span>
     </div>
     <div>
     <img className='mt-2 w-[95px] h-[18px] sm:w-auto sm:h-auto ' src={star} alt="" />
    <p className=' text-sm sm:text-base font-semibold mt-2 para'>{heading}</p>
    <p className='text-sm sm:text-base  para mt-1'>{content}</p>
    </div>
    </div>
    
    </>
  )
}

export default Review
