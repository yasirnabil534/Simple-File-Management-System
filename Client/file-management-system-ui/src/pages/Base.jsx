import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Base = () => {
  return (
    <div className='flex'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Base;