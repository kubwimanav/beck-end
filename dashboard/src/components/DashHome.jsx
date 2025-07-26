import React from 'react'
import { MdAlignVerticalTop } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAssessment } from "react-icons/md";
import { PiCubeLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import Cards from './cards';
import CardText from './CardText';




function DashHome() {
  const tabledate = [
  {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    },
     {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    }, {    name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      time: "2 days ago",

    },
    
]

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
      date: "Dec 10, 2024",
      describtion: "Laptops",
      button: "In Stock",
    },
    {
      title: "Dell XPS 13",
      date: "Dec 9, 2024",
      describtion: "Laptops",
      button: "In Stock",
    },
    {
      title: "iPhone 15 Pro ",
      date: "Dec 8, 2024",
      describtion: "Mobile",
      button: "Low Stock",
    },
    {
      title: "iPad Air ",
      date: "Dec 7, 2024",
      describtion: "Tablets",
      button: "In Stock " ,
    },
    {
      title: "Surface Pro 9",
      date: "Dec 6, 2024",
      describtion: "Tablets",
      button: "Out of Stock",
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
      <div className=" flex flex-col gap-4 shadow-sm rounded-md px-6 py-4">
        <p className=" font-bold text-xl pb-4">Recent Added Products</p>
        <div className=" grid grid-cols-3 gap-3 items-center">
          {cardtext.map((item) => (
            <CardText
              title={item.title}
              date={item.date}
              description={item.describtion}
              button={item.button}
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4 shadow-sm rounded-md px-6 py-4">
        <div className=" flex flex-row justify-between">
          <p>User</p>{" "}
          <button className=" bg-blue-500 text-white px-3 py-1 rounded-xl">
            Add User
          </button>
        </div>
        <div>
          <table className=" w-full text-left border-collapse">
            <thead>
              <tr className=" border-b-2 border-gray-300">
                <th className="  py-2">User</th>
                <th className="  py-2">Role</th>
                <th className=" py-2">Status</th>
                <th className="  py-2">Last Login</th>
                <th className=" py-2">Actions</th>
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
                      <p className="font-bold">{item.name}</p>
                      <p>{item.email}</p>
                    </div>
                  </td>
                  <td className=" py-2">{item.role}</td>
                  <td className=" py-2">{item.status}</td>
                  <td className=" py-2">{item.time}</td>
                  <td className=" py-2 flex flex-row gap-5">
                    <button className="  text-blue-300 py-1">Edit</button>
                    <button className=" text-red-400  py-1">Delete</button>
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
