export const LineChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Working in office",
      data: [30, 21, 34, 23, 32, 41, 28, 16, 27, 30, 11, 15],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",      
      borderWidth: 1,                             
      fill: true,                                
      tension: 0.2                              
    },
    {
      label: "Remot",
      data: [35, 11, 24,33, 22, 11, 28, 30, 25, 30, 25, 18],
      backgroundColor: "rgba(172, 216, 230, 0.2)",
      borderColor: "rgba(172, 216, 230, 1)",      
      borderWidth: 1,                             
      fill: true,                                
      tension: 0.2                              
    },
  ],
};


export const DoughnutData ={
    labels:['Completed', 'In Progress', 'Pending', 'Overdue'],
    datasets:[
        {
            label: 'Work Performance',
            data: [50,20,10,5],
            backgroundColor:[
                'rgba(75, 192, 192, 0.6)', 
                'rgba(255, 99, 132, 0.6)',  
                'rgba(54, 162, 235, 0.6)',  
                'rgba(255, 206, 86, 0.6)',  
            ],
            hoverOffset: 4,
        },
    ], 
};


 export const PieData ={
    labels:['Coding', 'Meetings', 'Research', 'Debugging'],
    datasets: [
        {
          label: 'Performance',
          data: [25, 10, 15, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)', 
            'rgba(255, 99, 132, 0.6)',  
            'rgba(54, 162, 235, 0.6)',  
            'rgba(255, 206, 86, 0.6)',  
          ],
          hoverOffset: 4,
        },
      ],
}


export const HolidayData = {
  "Holiday":[
      {
          "date": "Sun, 19 May",
          "name": "Mohthers Day",
          "type": "Observances"
      },
      {
          "date": "Tue, 25 May",
          "name": "Teacher Day",
          "type": "National"
      },
      {
          "date": "Thur, 27 May",
          "name": "Childrens Day",
          "type": "Observances"
      },
      {
          "date": "Fri, 29 May",
          "name": "Democracy Day",
          "type": "National"
      },
      {
          "date": "Mon, 02 jun",
          "name": "Salah",
          "type": "National"
      }
  ]
}
