import React from 'react';
import { useNavigate } from 'react-router-dom';
import FileList from '../assets/FileList.svg';
import ProPic from '../assets/ProPic.png';
import Profile from '../assets/Profile.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const menus = [
    {
      title: 'Profile',
      link: '/profile-list',
      icon: Profile,
    },
    {
      title: 'Files',
      link: '/files',
      icon: FileList,
    }
  ];
  return (
    <div className='h-screen w-80 bg-navbar flex flex-col justify-between text-white'>
      <div className='space-y-2 ml-10 mt-11'>
        {menus.map((menu, idx) => {
          return (
            <button
              className='flex space-x-4 font-medium' 
              key={idx}
              onClick={()=>navigate(`${menu.link}`)}
            >
              <img src={menu.icon} alt=''/>
              <div>{menu.title}</div>
            </button>
          );
        })}
      </div>
      <div className='w-full h-20 flex items-center'>
        <div className='flex ml-8'>
          <img src={ProPic} alt="" className='w-10 h-10' />
          <div className='ml-2 text-sm'>
            <div>John Doe</div>
            <div>john@test.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;