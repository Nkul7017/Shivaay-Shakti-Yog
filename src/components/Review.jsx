import React from 'react'
import program from '../../public/program.png'
import star from '../../public/rstar.png'
function Review({name,heading,content}) {
  return (
    <>
    <div className='  gap-3'>
        <div className='flex gap-3'>
     <span className='w-[36px] h-[36px] '> <img src={program} className='w-[36px] h-[36px] rounded-full ' alt="" />  </span>
     <span>{name}</span>
     </div>
     <div>
     <img className='mt-2' src={star} alt="" />
    <p className='text-md font-semibold mt-2 para'>{heading}</p>
    <p className='text-md  para mt-1'>{content}</p>
    </div>
    </div>
    
    </>
  )
}

export default Review
