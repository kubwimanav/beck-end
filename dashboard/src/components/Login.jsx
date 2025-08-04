import React, { useState } from 'react'
import work from '../assets/work.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/Useuser';
function Login() {
    const navigate = useNavigate();


  const { users } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    // const localstorage = 

    if (matchedUser) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };


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
        <form className=" flex flex-col gap-3.5 w-sm px-10 py-20  bg-white rounded-br-xl rounded-tr-xl" onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name='email'
            className="py-2 px-2 rounded border-1 border-gray-300"
          />
                  {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            name='password'
            placeholder="password"
            className="py-2 px-2 rounded border-1 border-gray-300"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" type='submit'>
          Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login


