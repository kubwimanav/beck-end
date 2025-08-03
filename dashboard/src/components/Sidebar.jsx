import React from 'react'
import { MdAssessment } from "react-icons/md";
import { PiCubeLight } from "react-icons/pi";
import { useTheme } from '../hooks/theme';
import { TbDeviceIpadHorizontal } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
import { LuLogOut } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/Useuser';
import { useProducts } from '../hooks/useProducts';

function Sidebar() {
  const { theme } = useTheme();
  const { users } = useUser();
  const { products } = useProducts();

  const count = users.length;
    const countpro = products?.length;

    const sidebarItems = [
      {
        name: " Dashboard",
        icon: <TbDeviceIpadHorizontal />,
        path: "home",
      },
      {
        name: "Users",
        icon: <GoPeople />,
        path: "users",
        size: `${count}`,
      },
      {
        name: "Products",
        path: "products",
        icon: <MdAssessment />,
        size: `${countpro}`,
      },

      {
        name: "Categories",
        path: "categories",
        icon: <SiBookstack />,
      },
  ];
  const navigate = useNavigate();
  const currentPath = location.pathname;


  const handleNavClick = (path) => {
    navigate(path);
  }
  return (
    <div
      className={` h-screen hidden w-fit px-12 pt-7 shadow-xl sm:flex sm:px-3 sm:flex-col  md:flex md:flex-col lg:px-5 gap-6 fixed  ${
        theme === "light"
          ? "bg-white "
          : "bg-[#1e293b] text-white border-gray-700 border-1 "
      }`}
    >
      <div className="flex flex-row gap-2 items-center mb-2">
        <div className=" h-10 w-10 bg-blue-500 flex items-center justify-center rounded-md">
          <PiCubeLight className=" text-2xl text-white" />
        </div>
        <div>
          <h3 className=" font-bold">iHUZA</h3>
          <p>Inventory</p>
        </div>
      </div>
      {sidebarItems.map((item) => (
        <div className={`flex flex-row gap-4 items-center ${item.butt}`}>
          <div className=" text-[#DEE2EE]">{item.icon}</div>
          <Link to={`${item.path}`}
            className={`flex flex-row w-[130px] justify-between  items-center  font-bold text-xs  sm:w-[100px] lg:w-[130px] ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            {item.name} <p className=" font-normal text-[10px]">{item.size}</p>
          </Link>
        </div>
      ))}

      {/* {sidebarItems.map((item, index) => {
        // Check if current path includes this item's path for more reliable active state
        const isActive =
          (currentPath === "/admin" && item.path === "/admin") ||
          (item.path !== "/admin" && currentPath.includes(item.path));

        return (
          <li key={index}>
            <div
              onClick={() => handleNavClick(item.path)}
              className={`flex items-center px-4 py-2 rounded-md w-full text-left cursor-pointer transition-colors duration-200 ${
                isActive
                  ? "bg-[#EFF6FF] text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          </li>
        );
      })} */}

      <div className=" flex gap-5 mt-50 ">
        <LuLogOut className="text-[#DEE2EE]" />
        <p
          className={`font-bold text-xs ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Logout
        </p>
      </div>
    </div>
  );
}

export default Sidebar
