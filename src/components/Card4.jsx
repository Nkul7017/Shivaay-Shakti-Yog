import React from 'react'

const Card4 = ({img}) => {
  return (
    <>
    <div className={`min-w-[100%] h-[195px]  cardcontainer `  } style={{
        borderRadius:"10px",
background: `linear-gradient(180deg, rgba(121, 217, 249, 0.00) 0.07%, #E6F5FA 99.93%), url(${img}), lightgray 50%  no-repeat`,
objectFit:"cover",
 backgroundPosition:"center top"
    }} >
        <div className=' w-[100%]  gap-1 pl-4 pb-4 h-[100%] flex justify-start items-end'>
         <p className='text-xl bluish  '>Hatha Yoga</p>
        </div>
   </div>
     
    </>
  )
}

export default Card4
