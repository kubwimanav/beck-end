import React from 'react'
import { MdAlignVerticalTop } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAssessment } from "react-icons/md";
import { PiCubeLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import Cards from './cards';
import CardText from './CardText';
import { useTheme } from '../hooks/theme';




function DashHome() {
  const { theme } = useTheme();

  const tabledate = [
    {
      name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@ihuza.com",
      role: "Manager",
      status: "Active",
      time: "2 hours ago",
    },
    {
      name: "Michael Brown",
      email: "m.brown@ihuza.com",
      role: "Staff",
      status: "Active",
      time: "1 day ago",
    },
    {
      name: "Emily Davis",
      email: "emily.d@ihuza.com",
      role: "Staff",
      status: "InActive",
      time: "3 days ago",
    },
    {
      name: "David Wilson",
      email: "d.wilson@ihuza.com",
      role: "Staff",
      status: "Active",
      time: "6 hours ago",
    },
    {
      name: "Lisa Anderson",
      email: "lisa.a@ihuza.com",
      role: "Manager",
      status: "Active",
      time: "30 min ago",
    },
    {
      name: "Robert Taylor",
      email: "r.taylor@ihuza.com",
      role: "Staff",
      status: "Active",
      time: "2 days ago",
    },
    {
      name: "Jennifer Miller",
      email: "j.miller@ihuza.com",
      role: "Staff",
      status: "Active",
      time: "4 hours ago",
    },
    {
      name: "Christopher Lee",
      email: "c.lee@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "1 hour ago",
    },
    {
      name: "Amanda White",
      email: "a.white@ihuza.com",
      role: "Staff",
      status: "InActive",
      time: "1 week ago",
    },
  ];
    const roleColors = {
      Admin: " bg-purple-100 text-purple-600",
      Manager: "bg-blue-100 text-blue-800",
      Staff: "bg-[#DEE2EE] text-black",
  };
   const activColors = {
     Active: " bg-green-200 text-green-900",
     InActive: "bg-red-200 text-red-900",
   };

  const cardicon = [
    {
      icon: <GoPeople className=' bg-blue-100 text-blue-500 text-2xl  h-10 w-10 p-2 rounded-md' />,
      title: "116",
      description: "Total Users",
    },
    {
      icon: <PiCubeLight className=' text-blue-500 bg-blue-100 text-2xl  h-10 w-10 p-2 rounded-md'/>,
      title: "100",
      description: "Total Products",
    },
    {
      icon: <IoMdCheckmarkCircleOutline  className=' bg-green-100 text-teal-700 text-2xl  h-10 w-10 p-2 rounded-md'/>,
      title: "10",
      description: "Assigned Products",
    },
    {
      icon: <MdAlignVerticalTop className=' bg-amber-100 text-amber-300 text-2xl  h-10 w-10 p-2 rounded-md'/>,
      title: "90",
      description: "Unassigned Products",
    },
  ];

  const cardtext = [
    {
      title: "MacBook Pro 16",
      date: "Dec 10, 2024 ",
      describtion: "Laptops",
      button: "In Stock",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "Dell XPS 13",
      date: "Dec 9, 2024",
      describtion: "Laptops",
      button: "In Stock",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "iPhone 15 Pro ",
      date: "Dec 8, 2024",
      describtion: "Mobile",
      button: "Low Stock",
      buttonClass:
        "bg-amber-100 text-amber-900 h-fit px-2 py-[2px] text-[10px] rounded-2xl",
    },
    {
      title: "iPad Air ",
      date: "Dec 7, 2024",
      describtion: "Tablets",
      button: "In Stock ",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "Surface Pro 9",
      date: "Dec 6, 2024",
      describtion: "Tablets",
      button: "Out of Stock",
      buttonClass:
        "bg-red-200 text-red-900 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
  ];

  return (
    <div className=" flex flex-col gap-10 px-10 py-6">
      <div className=" flex flex-row gap-10 items-center justify-center">
        {cardicon.map((item) => (
          <Cards
            title={item.title}
            describtion={item.description}
            icon={item.icon}
          />
        ))}
      </div>
      <div
        className={`flex flex-col gap-4 shadow-sm rounded-md px-6 py-4 ${
          theme === "light"
            ? "bg-white"
            : "bg-[#1e293b] border-1 border-gray-600"
        }`}
      >
        <p className=" font-bold text-xl pb-4">Recent Added Products</p>
        <div className=" grid grid-cols-3 gap-3 items-center">
          {cardtext.map((item) => (
            <CardText
              title={item.title}
              date={item.date}
              description={item.describtion}
              button={item.button}
              className={item.buttonClass}
            />
          ))}
        </div>
      </div>
      <div className={` flex flex-col gap-4 shadow-sm rounded-md px-6 py-4 ${theme == "light" ? "" : "border-1 border-gray-600"}`}>
        <div className=" flex flex-row justify-between">
          <p>User</p>{" "}
          <button className=" bg-blue-500 text-white px-3 py-1 rounded-xl">
            Add User
          </button>
        </div>
        <div>
          <table className=" w-full text-left border-collapse">
            <thead>
              <tr className="  bg-gray-50 text-sm  text-[#DEE2EE]">
                <th className="  py-2 font-normal">User</th>
                <th className="  py-2 font-normal">Role</th>
                <th className=" py-2 font-normal">Status</th>
                <th className="  py-2 font-normal">Last Login</th>
                <th className=" py-2 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody className=" text-sm">
              {tabledate.map((item) => (
                <tr key={item.email} className=" border-b border-gray-200">
                  <td className=" flex flex-row gap-2 items-center  py-2">
                    <div className=" bg-[#DEE2EE] p-2 rounded-full">
                      <GoPerson />
                    </div>
                    <div className=" flex flex-col">
                      <p className="font-bold text-[12px]">{item.name}</p>
                      <p className="text-[11px]">{item.email}</p>
                    </div>
                  </td>
                  <td className="py-2 ">
                    <p
                      className={` w-fit py-[2px] px-2 text-[11px] rounded-2xl ${
                        roleColors[item.role]
                      }`}
                    >
                      {item.role}
                    </p>
                  </td>
                  <td className=" py-2 text-xs">
                    <p
                      className={`w-fit py-[2px] px-2 text-[11px] rounded-2xl ${
                        activColors[item.status]
                      }`}
                    >
                      {item.status}
                    </p>
                  </td>
                  <td className=" py-2 text-[11px]">{item.time}</td>
                  <td className=" py-2 flex flex-row gap-5">
                    <button className="  text-blue-300 py-1 font-bold text-[11px]">
                      Edit
                    </button>
                    <button className=" text-red-400  py-1 font-bold text-[11px]">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashHome
