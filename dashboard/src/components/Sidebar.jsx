import React from 'react'
import { MdAssessment } from "react-icons/md";
import { PiCubeLight } from "react-icons/pi";
import { useTheme } from '../hooks/theme';


function Sidebar() {
  const { theme, toggleTheme } = useTheme();
    const sidebarItems = [
      {
        name: " Dashboard",
        icon: <MdAssessment />,
      },
      {
        name: "Home",
        icon: <MdAssessment />,
      },
      {
        name: "Users",
        icon: <MdAssessment />,
      },
      {
        name: "Messages",
        icon: <MdAssessment />,
      },
    ];
  return (
    <div
      className={` h-screen  w-fit px-9 pt-7 shadow-xl  flex flex-col gap-5 fixed  ${
        theme === "light" ? "bg-white " : "bg-[#1e293b] text-white border-gray-700 border-1 "
      }`}
    >
      <div className="flex flex-row gap-2 items-center">
        <div className=" h-10 w-10 bg-blue-500 flex items-center justify-center rounded-md">
          <PiCubeLight className=" text-2xl text-white" />
        </div>
        <div>
          <h3 className=" font-bold">iHUZA</h3>
          <p>Inventory</p>
        </div>
      </div>
      {sidebarItems.map((item) => (
        <div className=" flex flex-row gap-2 items-center ">
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar
