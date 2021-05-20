import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Maria', 'Andres', 'Carlos', 'Daniela', 'Juan', 'Alexandra'],
  datasets: [
    {
      label: 'YouTube',
      data: [1, 5, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Facebook',
      data: [2, 3, 2, 5, 5, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Tiktok',
      data: [1, 0, 1, 1, 5, 3],
      backgroundColor: 'rgb(37, 41, 44)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};
const Grafica = () => {
  return (
    <>
    <div className='header'>
      <h1 className='title'>Cuantas horas de dedicas a las siguientes aplicaciones?</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);
};

export default Grafica;
