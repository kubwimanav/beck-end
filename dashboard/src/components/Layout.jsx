import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import DashHome from './DashHome'
import { useTheme } from '../hooks/theme';

function Layout() {
    const { theme, toggleTheme } = useTheme();
  
  return (
    <div
      className={`flex flex-row font-stretch-semi-condensed ${
        theme === "light" ? "" : "bg-[#1e293b] text-white"
      }`}
    >
      <Sidebar />
      <div className=" ml-0 sm:ml-[0px] md:ml-[234.6px] lg:w-full   ">
        <Navbar />
        <DashHome />
      </div>
    </div>
  );
}

export default Layout
