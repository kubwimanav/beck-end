import React from 'react'
import { MdAssessment } from "react-icons/md";
import { PiCubeLight } from "react-icons/pi";
import { useTheme } from '../hooks/theme';
import { TbDeviceIpadHorizontal } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";

function Sidebar() {
  const { theme, toggleTheme } = useTheme();
    const sidebarItems = [
      {
        name: " Dashboard",
        icon: <TbDeviceIpadHorizontal />,
      },
      {
        name: "Users",
        icon: <GoPeople />,
        size: "116",
      },
      {
        name: "Products",
        icon: <MdAssessment />,
        size: "100",
      },

      {
        name: "Assignments",
        icon: <RiMenu3Fill />,
        size: "10",
      },
      {
        name: "Categories",
        icon: <SiBookstack />,
      },
    ];
  return (
    <div
      className={` h-screen hidden w-fit px-9 pt-7 shadow-xl sm:flex sm:flex-col  md:flex md:flex-col gap-6 fixed  ${
        theme === "light"
          ? "bg-white "
          : "bg-[#1e293b] text-white border-gray-700 border-1 "
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
        <div className=" flex flex-row gap-4 items-center ">
          <div className=" text-[#DEE2EE]">{item.icon}</div>
          <div className={`flex flex-row w-[130px] justify-between  items-center  font-bold text-xs  ${theme==="light"?"text-gray-800":"text-white"}`}>{item.name} <p className=' font-normal text-[10px]'>{ item.size}</p></div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar
