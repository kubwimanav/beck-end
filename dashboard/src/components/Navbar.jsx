import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import {GoPerson } from "react-icons/go";
import { useTheme } from '../hooks/theme';
import { MdMenu } from "react-icons/md";
import Modal from './Modal';
import { IoSunnyOutline } from "react-icons/io5";


function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  
     const handlemadal = () => {
       setOpen(!open);
     };
  return (
    <div
      className={`flex  flex-row items-center justify-between   py-3 px-9 sm:px-9 shadow-md ${
        theme === "light"
          ? "bg-white"
          : "bg-[#1e293b] text-white border-1 border-gray-700"
      }`}
    >
      {open && <Modal handlemadal={handlemadal} />}
      <div>
        <h2 className=" font-bold">Dashboard</h2>
        <p>Welcome Back, Admin</p>
      </div>
      <div className="flex flex-row gap-3 sm:hidden">
        <MdDarkMode onClick={toggleTheme} />
        <MdMenu
          onClick={() => {
            setOpen(!open);
          }}
          className=" text-2xl"
        />
      </div>
      <div className=" hidden sm:flex items-center gap-8">
        {theme === "light" ? (
          <MdDarkMode onClick={toggleTheme} />
        ) : (
          <IoSunnyOutline onClick={toggleTheme} />
        )}
        <LuSettings />
        <MdNotificationsNone />
        <p>Admin@ihuza.com</p>
        <div className=" bg-blue-600 text-white text-xm rounded-full p-1">
          <GoPerson />
        </div>
      </div>
    </div>
  );
}

export default Navbar
