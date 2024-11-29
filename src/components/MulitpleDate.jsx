import style from "react-day-picker/dist/style.css";
import React, { useEffect } from "react";
import { addMonths, isSameMonth, addDays, parseISO, format } from "date-fns";
import { DayPicker } from "react-day-picker";

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
export default function MultipleDate({ purchasedData, setPurchasedData }) {
  //  console.log(purchasedData);
  const handleDayClick = (selectedDays) => {
    setPurchasedData({
      ...purchasedData,
      days: selectedDays,
    });
  };
  console.log(purchasedData)
 

  return (
    <>
      <style>{css}</style>
      <DayPicker
        mode={purchasedData?.duration === "1 Day" ? "single" : "multiple"}
        min={purchasedData?.duration === "1 Day" ? 1 : undefined} // No minimum for multiple days
        max={
          purchasedData?.duration === "1 Day"
            ? 1
            : purchasedData?.duration === "1 Month"
            ? 30
            : purchasedData?.duration === "3 Month"
            ? 90
            : undefined
        }
        selected={purchasedData?.days} // Pre-select dates if provided
        onSelect={handleDayClick} // Callback for date selection
        pagedNavigation
        fixedWeeks
        numberOfMonths={3} // Show 3 months at a time
        defaultMonth={parseISO(purchasedData?.starting_date)} // Set the calendar's initial view to the starting date
        fromDate={parseISO(purchasedData?.starting_date)} // Allow dates starting from the selected starting date
        toDate={addDays(parseISO(purchasedData?.starting_date), 365)} // Allow selection up to 365 days from the starting date
        className="overflow-x-auto max-w-[80vw] sm:max-w-[65vw] scrollbar-default mt-10"
        modifiersClassNames={{
          selected: "my-selected",
        }}
      />
    </>
  );
  
}
