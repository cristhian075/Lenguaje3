import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Amazon', 'Netflix', 'Whatsapp', 'BBC', 'Apple', 'Paypal'],
  datasets: [
    {
      label: '',
      data: [2000, 1000, 1000, 550, 480, 400],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Grafica2 = () => {
    return(
      <>
      <div className='header'>
        <h1 className='title'>Las vistas de las paginas mas usadas (Millones)</h1>
      </div>
      <Doughnut data={data} />
      <br /><br />
    </>
);
};

export default Grafica2;