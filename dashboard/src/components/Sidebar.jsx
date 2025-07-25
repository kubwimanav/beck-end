import React from 'react'
import { MdAssessment } from "react-icons/md";


function Sidebar() {
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
    <div className=" h-screen bg-amber-50 w-fit px-9 pt-7 text-shadow-2xs shadow-amber-50 flex flex-col gap-5">
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
