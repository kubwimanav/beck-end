import React from 'react'
import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/Useuser';
import { useTheme } from '../hooks/theme';
import { GoPerson } from 'react-icons/go';

export default function User() {
  const { users } = useUser() || {};
  const { theme } = useTheme();
  const roleColors = {
    Admin: " bg-purple-100 text-purple-600",
    Manager: "bg-blue-100 text-blue-800",
    Staff: "bg-[#DEE2EE] text-black",
  };
  const activColors = {
    Active: " bg-green-200 text-green-900",
    InActive: "bg-red-200 text-red-900",
  };
  
    
  return (
        <div className=" overflow-auto">
              <table className=" w-full text-left border-collapse ">
                <thead className='px-9'>
                  <tr
                    className={`text-sm  text-[#c0c7db] ${
                      theme === "light" ? " bg-gray-100 " : "bg-gray-700"
                    } `}
                  >
                    <th className="  py-2 px-7 font-normal">User</th>
                    <th className="  py-2 font-normal">Role</th>
                    <th className=" py-2 font-normal">Status</th>
                    <th className="  py-2 font-normal">Last Login</th>
                    <th className=" py-2 font-normal">Actions</th>
                  </tr>
                </thead>
                <tbody className=" text-sm">
                  {users.map((item) => (
                    <tr key={item.email} className=" border-b border-gray-200">
                      <td className=" flex flex-row gap-2 items-center  py-2 px-4">
                        <div className=" bg-[#DEE2EE] p-1 rounded-full sm:p-3">
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
                      <td className=" py-2 flex flex-row gap-2 sm:gap-5 ">
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

  );
}
