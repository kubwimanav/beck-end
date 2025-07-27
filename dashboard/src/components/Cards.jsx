import React from 'react'
import { useTheme } from '../hooks/theme'

function Cards({ icon, title, describtion }) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-row items-center  gap-4 shadow-sm w-55 rounded-lg px-4 py-6 ${
        theme === "light" ? "bg-white" : "bg-[#1e293b] border-1 border-gray-600"
      }`}
    >
      <div>{icon}</div>
      <div>
        <h3 className=" font-bold text-xl">{title}</h3>
        <p className=" text-xs">{describtion}</p>
      </div>
    </div>
  );
}

export default Cards
