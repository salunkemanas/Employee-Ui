import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleSignin(){
        try {
            const response = await axios.post("http://localhost:3000/admin/signup", {username, password})
            console.log(response.status)
            if (response.status == 201){
                navigate("/")
            }
        } catch (error) {
            alert("Error while signing up")
        }
    }
  return (
    // <>
    // <label htmlFor="username" >Username:</label>
    // <input 
    //   type="text"
    //   id="username"
    //   value={username}
    //   onChange={(e) => setUsername(e.target.value)}
    //   required
    // />
    // <label htmlFor="password">Password:</label>
    // <input
    // type="password"
    // id="password"
    // value={password}
    // onChange={(e) => setPassword(e.target.value)}
    // required
    // />
    // <button onClick={handleSignin}>Sign Up</button>
    // <br />
    // <button onClick={()=>navigate("/")}>Existing Admin, Signin</button>
    // </>
    <>
  <div className="max-w-md mx-auto mt-10">
    <div className="mb-6">
      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
    <button
      onClick={handleSignin}
      className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Sign Up
    </button>
    <br />
    <button
      onClick={() => navigate("/")}
      className="mt-4 w-full text-blue-700 bg-transparent hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Existing Admin, Signin
    </button>
  </div>
</>
    
  )
}

export default Signup