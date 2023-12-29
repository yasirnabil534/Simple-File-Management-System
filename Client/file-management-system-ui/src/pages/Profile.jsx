import React from 'react';
import {
  Avatar,
} from '@mui/material';
import UserTable from '../components/UserTable';

const Profile = () => {
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      width: 350,
      renderCell: (params) => (
        <div className='flex items-center space-x-6 font-inter'>
          <Avatar src={new URL('../assets/' + params.row.iconLink, import.meta.url)} alt="" />
          <div>
            <div className='font-medium text-sm'>{params.row.name}</div>
            <div className='font-normal text-sm text-[#6B7280]'>{params.row.email}</div>
          </div>
        </div>
      ),
    },
    {
      field: 'address',
      headerName: 'Address',
      sortable: false,
      width: 350,
      renderCell: (params) => (
        <div className='font-inter'>
          <div className='font-medium text-sm'>{params.row.addressTop}</div>
          <div className='font-normal text-sm text-[#6B7280]'>{params.row.addressBottom}</div>
        </div>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: true,
      width: 200,
      renderCell: (params) => (
        <div className='font-inter'>
          <div className='font-medium text-sm px-3 bg-green-100 rounded-full'>{params.row.status}</div>
        </div>
      ),
    },
    {
      field: 'role',
      headerName: 'Role',
      sortable: true,
      width: 200,
      renderCell: (params) => (
        <div className='font-inter'>
          <div className='font-medium text-sm text-gray-500'>{params.row.role}</div>
        </div>
      ),
    },
  ];
  const rows = [
    {name: 'Yasir', email: 'yasir@mail.com', addressTop: 'Uttara Sector 40, Road 55, House 26', addressBottom: 'Dhaka, Bangladesh', status: 'Active', role: 'Admin', iconLink: 'Propic.png'},
    {name: 'Jane Cooper', email: 'jane.cooper@example.com', addressTop: 'Uttara Sector 40, Road 55, House 26', addressBottom: 'Dhaka, Bangladesh', status: 'Active', role: 'Admin', iconLink: 'Propic.png'},
    {name: 'Jane Cooper', email: 'jane.cooper@example.com', addressTop: 'Uttara Sector 40, Road 55, House 26', addressBottom: 'Dhaka, Bangladesh', status: 'Active', role: 'Admin', iconLink: 'Propic.png'},
    {name: 'Jane Cooper', email: 'jane.cooper@example.com', addressTop: 'Uttara Sector 40, Road 55, House 26', addressBottom: 'Dhaka, Bangladesh', status: 'Active', role: 'Admin', iconLink: 'Propic.png'},
    {name: 'Jane Cooper', email: 'jane.cooper@example.com', addressTop: 'Uttara Sector 40, Road 55, House 26', addressBottom: 'Dhaka, Bangladesh', status: 'Active', role: 'Admin', iconLink: 'Propic.png'},
    {name: 'Jane Cooper', email: 'jane.cooper@example.com', addressTop: 'Uttara Sector 40, Road 55, House 26', addressBottom: 'Dhaka, Bangladesh', status: 'Active', role: 'Admin', iconLink: 'Propic.png'},
  ];

  rows.forEach((row, idx) => {
    row.sl = idx + 1;
  });

  return (
    <div className='p-9'>
      <div className='text-left mb-8'>
        <div className='text-3xl font-semibold'>Recent users</div>
        <div className='text-lg font-medium text-[#637381]'>A page to see all of your users</div>
      </div>
      <div>
        <UserTable columns={columns} rows={rows} page={1} />
      </div>
    </div>
  )
}

export default Profile;