import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function TymPicker() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'TimePicker',
        ]}
      >
        <div className=' relative  '>
          <MobileTimePicker  className=" time_box w-72 md:w-[400px]    "  defaultValue={dayjs('2022-04-17T15:30')} 
           slotProps={{ textField: { size: 'small' },}}
           />
           </div>
   
      </DemoContainer>
    </LocalizationProvider>
    </>
  )
}

export default TymPicker
