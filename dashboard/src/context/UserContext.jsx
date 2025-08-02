import { createContext, useState } from "react";
const users = [
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
export const UserContext = createContext();
export const UserProvider = ({ children }) => {

  return (
    <UserContext.Provider value={{users }}>
      {children}
    </UserContext.Provider>
  );
}