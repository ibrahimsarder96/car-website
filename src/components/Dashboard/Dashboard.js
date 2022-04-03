import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import SellChart from '../SellChart/SellChart';

const Dashboard = () => {
  
  return (
    <div className='md:flex mt-12'>
      <div className='w-6/12'>
        <h1 className='text-indigo-300 text-2xl'>Month vs revenue vs investment</h1>
      <MyLineChart></MyLineChart>
      </div>
      <div className='w-6/12'>
        <h1 className='text-indigo-300 text-2xl'>Month vs Sell</h1>
      <SellChart></SellChart>
      </div>
    </div>
  );
};

export default Dashboard;