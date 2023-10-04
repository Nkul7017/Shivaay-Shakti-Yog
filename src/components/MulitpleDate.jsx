
import style from 'react-day-picker/dist/style.css';
import React from 'react';
import { addMonths, isSameMonth ,addDays } from 'date-fns';
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
export default function App() {
  
  const [days, setDays] = React.useState([]);
  console.log(days);
  return (
    <>
    <style>{css}</style>
    <DayPicker
      mode="multiple"
      min={60}
      max={60}
      selected={days}
      onSelect={setDays}
      pagedNavigation
      fixedWeeks
      numberOfMonths={3}
      defaultMonth={addDays(new Date(),1)}
      fromDate={addDays(new Date(),1)}
      toDate={addDays(new Date(),90)}
      className='   overflow-x-auto scrollbar-hide   mt-10   '
      modifiersClassNames={{
        selected: 'my-selected',
      }}
    />
    </>
  );
}
