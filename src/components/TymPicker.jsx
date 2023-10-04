import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
function TymPicker() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'TimePicker',
        ]}
      >
          <MobileTimePicker  className="time_box"  defaultValue={dayjs('2022-04-17T15:30')}  slotProps={{ textField: { size: 'small' } }} />
   
      </DemoContainer>
    </LocalizationProvider>
    </>
  )
}

export default TymPicker
