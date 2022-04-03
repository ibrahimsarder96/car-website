import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import SellChart from '../SellChart/SellChart';

const Dashboard = () => {
  
  return (
    <div className='md:flex mt-12'>
      <div className='w-6/12'>
      <MyLineChart></MyLineChart>
      </div>
      <div className='w-6/12'>
      <SellChart></SellChart>
      </div>
    </div>
  );
};

export default Dashboard;