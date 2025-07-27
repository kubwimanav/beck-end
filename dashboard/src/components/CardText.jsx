import React from 'react'
import { useTheme } from '../hooks/theme'

export default function CardText({ title, date, description, button,className }) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-row justify-between w-73 px-7 py-4 border-1 border-gray-600 rounded-md ${
        theme === "light" ? "bg-white" : "bg-[#1e293b]"
      } `}
    >
      <div className=" flex flex-col gap-1">
        <h3 className=" font-bold text-sm">{title}</h3>
        <p className=" text-xs">{description}</p>
        <p className=" text-xs">{date}</p>
      </div>
      <p className={className}>{button}</p>
    </div>
  );
}
