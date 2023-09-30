import React from 'react'
import HeroNavbar from './HeroNavbar'
import Image from '../assets/Images/Article1.jpeg'
import P1 from '../../public/Program/P1.png'
import P2 from '../../public/Program/P2.png'
import P3 from '../../public/Program/P3.png'
import P4 from '../../public/Program/P4.png'
function ParticularArticle() {
  return (
    <>
     <div className=' '>
      <div><HeroNavbar/>
      <div className=' flex gap-2    '>
        <div><img src={P1}  alt="" /></div>
        <div><img src={P2} alt="" /></div>
        <div><img src={P3} alt="" /></div>
        <div><img src={P4} alt="" /></div>
        </div>
      </div>
     </div>
         
    </>
  )
}

export default ParticularArticle
