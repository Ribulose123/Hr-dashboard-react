import React from 'react'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'
import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PieData } from '../services/LineData';
ChartJS.register(ArcElement, Tooltip, Legend)

const Pienut = () => {
    const options ={
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
    }
  return (
    <div className='pienut'>
      <div className="dot-int">
          <p>Performance</p>
          <IoEllipsisHorizontalSharp/>
        </div>
        <Pie options={options} data={PieData} className='pie-chart' />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px',  alignItems:'center', flexWrap:'wrap'}}>
        {PieData.labels.map((label, index) => (
          <div key={index} style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '15px',
              height: '15px',
              backgroundColor: PieData.datasets[0].backgroundColor[index],
              marginLeft: '2px',
            }}></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pienut
