import React,{ useState } from 'react'
import DatePicker from "react-multi-date-picker"
import "react-multi-date-picker/styles/layouts/mobile.css"
import "react-multi-date-picker/styles/colors/teal.css"
import { addDays } from 'date-fns';
const MulitpleDate = () => {
    
  const [values, setValues] = useState([])
 console.log(values);
  return (
   <>


    <DatePicker 
      multiple
      value={values} 
      placeholder='Open Calendar'
      onChange={setValues}
      minDate={addDays(new Date(), 1)}
      maxDate={addDays(new Date(), 90)}
    //   mobileButtons={[
    //     {
    //       label: "RESET",
    //       type: "button",
    //       className: "rmdp-button rmdp-action-button",
    //       onClick: () => setValues([]),
    //     },
    //   ]}
    //   className=" custom-calendar  rmdp-mobile  teal"
   shadow={true}
   
    />
  
   </>
  )
}

export default MulitpleDate
