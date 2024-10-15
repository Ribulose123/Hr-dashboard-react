import React from 'react'
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip,Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { LineChartData } from '../services/LineData'

Chartjs.register( CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip,Legend)

const Lin = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            x:{
                grid:{
                    display:false,
                }
            },

            y:{
                grid:{
                    display:true,
                    borderDash: [5, 5],
                    color: "#3d3d3d"
                }
            }
        },
        plugins: {
            legend: {
              display: true,
              position:'bottom'
            },
          },
      };
      
  return (
    <Line options={options} data={LineChartData} className='line-info'/>
      
    
  )
}

export default Lin
