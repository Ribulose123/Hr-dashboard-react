import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'
import { DoughnutData } from '../services/LineData'
ChartJS.register(ArcElement, Tooltip, Legend)

const Doughnutt = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className='pienut'>
      <div className="dot-int">
          <p>Today task</p>
          <IoEllipsisHorizontalSharp/>
      </div>
        <Doughnut options={options} data={DoughnutData} className='doughnut' width={300} height={300}/>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', alignItems:'center', flexWrap:'wrap'  }}>
        {DoughnutData.labels.map((label, index) => (
          <div key={index} style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '15px',
              height: '15px',
              backgroundColor: DoughnutData.datasets[0].backgroundColor[index],
              marginLeft: '2px',
            }}></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doughnutt
