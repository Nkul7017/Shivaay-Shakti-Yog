 import React from 'react'
import Card2 from './Card2'
import Group from '../../public/Program/types/Group.png';
import Personal from '../../public/Program/types/Personal.png';
import Group1 from '../../public/Program/types/Group1.png';
import Personal1 from '../../public/Program/types/Personal1.png';

import Card3 from './Card3';
 function Type({data}) {
   return (
     <>
     <div className='  gap-12  mt-6 hidden lg:flex '>
     <Card2 img={data?.personal_url1} data={data} types="personal" heading="Personal Training Course" />
     <Card2 img={data?.group_url2} data={data} types="group" heading="Group Training Course" />
     </div>
     <div className='  gap-1  mt-6 flex lg:hidden '>
     <Card3 img={data?.personal_url1} data={data} types="Personal" type={1} />
     <Card3 img={data?.group_url2} data={data} types="Group" type={1} />
     </div>
     </>
   )
 }
 
 export default Type
 