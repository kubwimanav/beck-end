import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import { GoPerson } from "react-icons/go";

function Navbar() {
  return (
    <div className='flex  flex-row items-center justify-between w-[68.34rem] bg-white py-3 px-6 shadow-md'>
      <div>
        <h2 className=' font-bold'>Dashboard</h2>
        <p>Welcome Back, Admin</p>
      </div>
      <div className='flex items-center gap-8'>
        <MdDarkMode />
        <LuSettings />
        <MdNotificationsNone />
        <p>Admin@ihuza.com</p>
        <div className=' bg-blue-600 text-white text-xm rounded-full p-1'>
          <GoPerson />
        </div>
      </div>
    </div>
  );
}

export default Navbar
