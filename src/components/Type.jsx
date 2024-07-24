 import React from 'react'
import Card2 from './Card2'
import Card3 from './Card3';
 function Type({staticData, courseData}) {
   return (
     <>
     <div className='  gap-12  mt-6 hidden lg:flex '>
     <Card2 img={courseData?.personal_url1} staticData={staticData} courseData={courseData} types="personal" heading="Personal Training Course" />
     <Card2 img={courseData?.group_url2} staticData={staticData} courseData={courseData} types="group" heading="Group Training Course" />
     </div>
     <div className='  gap-1  mt-6 flex lg:hidden '>
     <Card3 img={courseData?.personal_url1} staticData={staticData} courseData={courseData} types="Personal" type={1} />
     <Card3 img={courseData?.group_url2} staticData={staticData} courseData={courseData} types="Group" type={1} />
     </div>
     </>
   )
 }
 
 export default Type
 