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
            if (response.status == 200){
                // navigate()
            }
        } catch (error) {
            alert("Error while signing up")
        }
    }
  return (
    <>
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
    <label htmlFor="password">Password:</label>
    <input
    type="password"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    />
    <button onClick={handleSignin}>Sign Up</button>
    <br />
    <button onClick={()=>navigate("/")}>Existing Admin, Signin</button>
    </>
    
  )
}

export default Signup