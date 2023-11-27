import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function TymPicker({purchasedData,setPurchasedData}) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'TimePicker',
        ]}
      >
        <div className=' relative  '>
          <MobileTimePicker  value={purchasedData?.preferred_timing}  onChange={(e)=>{
            const s=e.$d
            console.log(s);
          }}  className=" time_box w-72 md:w-[400px]    " 
           slotProps={{ textField: { size: 'small' },}}
           />
           </div>
   
      </DemoContainer>
    </LocalizationProvider>
    </>
  )
}

export default TymPicker
