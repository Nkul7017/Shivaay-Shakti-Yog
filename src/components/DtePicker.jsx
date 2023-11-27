import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
function DtePicker({}) {
  return (
    <>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker  className="time_box w-72 md:w-[400px] " disablePast     slotProps={{ textField: { size: 'small' } }}/>
      </DemoContainer>
    </LocalizationProvider>
    </>
  )
}

export default DtePicker
