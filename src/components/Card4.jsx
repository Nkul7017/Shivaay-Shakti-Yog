import React from 'react'
import { Link } from 'react-router-dom'

const Card4 = ({value}) => {
  console.log(value)
  return (
    <>
    <Link to={`/ParticularProgram/${value?._id}`} className={`min-w-[100%] h-[195px]  cardcontainer `  } style={{
        borderRadius:"10px",
background: `linear-gradient(180deg, rgba(121, 217, 249, 0.00) 0.07%, #E6F5FA 99.93%), url(${value?.main_url}), lightgray 50%  no-repeat`,
objectFit:"cover",
 backgroundPosition:"center top"
    }} >
        <div className=' w-[100%]  gap-1 pl-4 pb-4 h-[100%] flex justify-start items-end'>
         <p className='text-xl bluish  '>{value?.name}</p>
        </div>
   </Link>
     
    </>
  )
}

export default Card4
