import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // This includes the necessary components for Chart.js
import 'moment'; 
const Stats = ({data}) => {
    const chartData = {
      labels: data?.points?.map(entry => entry.date1),
      datasets: [
        {
          label: 'Points',
          data: data?.points?.map(entry => entry.point),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    const chartOptions = {
      scales: {
        xAxes: [
          {
            type: 'time', 
            time: {
              unit: 'day', 
              displayFormats: {
                day: 'YYYY-MM-DD', 
              },
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 10,
            },
          },
        ],
      },
      maintainAspectRatio: false,
      responsive: true
    };
  console.log(data);
  return (
    <div className='flex flex-col lg:flex-row lg:h-[440px] h-max stats w-[100%] py-2 sm:py-6 md:py-10   gap-10 ' style={{border:"none" ,borderRadius:"0"}} >
      <div className='  lg:h-auto  h-[300px]  lg:w-[65vw]   p-5 rounded-md  bg-white '>
        <p className=' text-sm lg:text-xl bluish  '>Progress Stats</p>
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className='  lg:w-[33vw]  rounded-md space-y-4 items-center  px-5  lg:px-10 py-4  lg:py-10 bg-white'>
       <p className=' text-sm lg:text-xl bluish '>Remarks</p>
       <p className='  list-disc text-xs lg:text-sm space-y-3  para '>
        {data?.remarks}
       </p>
      </div>
    </div>
  )
}

export default Stats
