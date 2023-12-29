import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSearchBar from '../components/TopSearchBar';
import Navbar from '../components/Navbar';

const Base = () => {
  return (
    <div className='flex font-inter'>
      <Navbar />
      <div className='w-full'>
        <TopSearchBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Base;