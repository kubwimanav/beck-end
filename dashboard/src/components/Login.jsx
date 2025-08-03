import React from 'react'
import work from '../assets/work.jpg'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=' shadow-xl flex rounded-md'>
        <div className=" h-fit">
          <img
            src={work}
            alt=""
            className="h-81 w-2xs rounded-bl-xl rounded-tl-xl"
          />
        </div>
        <div className=" flex flex-col gap-3.5 w-sm px-10 py-20  bg-white rounded-br-xl rounded-tr-xl">
          <input
            type="text"
            placeholder="email"
            className="py-2 px-2 rounded"
          />
          <input
            type="password"
            placeholder="password"
            className="py-2 px-2 rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          <Link to={'dashboard'}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login
