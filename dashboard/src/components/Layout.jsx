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
      <div className="w-full ml-0 sm:ml-[130px] md:ml-[150.6px] lg:ml-[185px] lg:w-full  mx-auto   ">
        <Navbar />
        <DashHome />
      </div>
    </div>
  );
}

export default Layout
