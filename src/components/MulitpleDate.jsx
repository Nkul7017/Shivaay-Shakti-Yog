
import style from 'react-day-picker/dist/style.css';
import React, { useEffect } from 'react';
import { addMonths, isSameMonth ,addDays,parseISO,format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const css = `
  .my-selected:not([disabled]) { 
    border-radius: 2px;
    border: 5px solid var(--button, white);
    background: var(--button, linear-gradient(103deg, #E5C75E 24.85%, #B96E38 111.06%));
        color:  white;  
  }
  .my-selected:hover:not([disabled]) { 
border: 1px solid var(--button, #E5C75E);
background: var(--the, #B7DFC7);
  padding:1px;
  }
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #B7DFC7 ;
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
    /* Outline border for focused and selected elements */
    --rdp-outline-selected: 4px solid rgba(0, 0, 0, 0.75);
  }
  .rdp-month {
    margin: 0 2em;
  }
  
`;
export default function MultipleDate({purchasedData,setPurchasedData}) {
//  console.log(purchasedData);
 const handleDayClick = (selectedDays) => {

  setPurchasedData({
    ...purchasedData,
    days: selectedDays,
  });
};
  return (
    <>
    <style>{css}</style>
    <DayPicker
      mode="multiple"
      min={purchasedData?.duration==="9 Month"?270:purchasedData?.duration==="3 Month"?90:purchasedData?.duration==="1 Month"?30:0}
      max={purchasedData?.duration==="9 Month"?270:purchasedData?.duration==="3 Month"?90:purchasedData?.duration==="1 Month"?30:0}
      selected={purchasedData?.days}
      onSelect={handleDayClick}
      pagedNavigation
      fixedWeeks
      numberOfMonths={purchasedData?.duration==="9 Month"?15:purchasedData?.duration==="3 Month"?6:purchasedData?.duration==="1 Month"?3:0}
      defaultMonth={addDays(new Date(),1)}
      fromDate={parseISO(purchasedData?.starting_date)}
      toDate={addDays(parseISO(purchasedData?.starting_date),purchasedData?.duration==="9 Month"?404:purchasedData?.duration==="3 Month"?144:purchasedData?.duration==="1 Month"?44:0)}
      className='   overflow-x-auto max-w-[80vw] sm:max-w-[65vw]   scrollbar-default   mt-10   '
      modifiersClassNames={{
        selected: 'my-selected',
      }}
    />
    </>
  );
}
