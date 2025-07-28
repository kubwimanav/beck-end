import React from 'react'
import { MdAssessment } from "react-icons/md";
import { PiCubeLight } from "react-icons/pi";
import { useTheme } from "../hooks/theme";
import { TbDeviceIpadHorizontal } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
function Modal() {
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
    const{theme}=useTheme()
  return (
    <div>
      {sidebarItems.map((item) => (
        <div className=" flex flex-row gap-4 items-center ">
          <div className=" text-[#DEE2EE]">{item.icon}</div>
          <div
            className={`flex flex-row w-[130px] justify-between  items-center  font-bold text-xs  ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            {item.name} <p className=" font-normal text-[10px]">{item.size}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Modal
