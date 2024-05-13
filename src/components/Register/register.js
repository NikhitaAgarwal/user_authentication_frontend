import React,{useState} from 'react'
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Register() {

      const navigate = useNavigate()


    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange=e=>{
        
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleClick = () => {
      navigate('/login')
};


    const registerhandle = async () => {
  try {
    const { name, email, password, reEnterPassword } = user;
  
    console.log("User:", user); // Log user object

    // Validate user input
    if (!name || !email || !password || !reEnterPassword) {
      alert("Please fill out all fields.");
      return;
    }

    // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Validate password length
      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

    // Check if password and re-entered password match
    if (password !== reEnterPassword) {
      alert("Passwords do not match. Please re-enter passwords.");
      return;
    }

    // Send POST request to register user
    // const response = await axios.post("http://localhost:9002/register", user);

    //If this does not work then uncomment the above line
    const response = await axios.post(`${window.location.origin}/register`, user);
    // console.log("Response:", response.data); // Log response data
    alert(response.data.message)
    
    // Redirect to login page after successful registration
    navigate('/login');
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Registration failed. Please try again.");
  }
};




  return (
    <div className='register'>
        {console.log("User",user)}
        <h1>Register</h1>
        <input type='text' name="name" value={user.name} placeholder='Your Name' onChange={handleChange} required/>
        <input type='text' name="email" value={user.email} placeholder='Your Email'  onChange={handleChange} required/>
        <input type='password' name="password" value={user.password} placeholder='Your Password' onChange={handleChange} required/>
        <input type='password' name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} required/>
        <div className='button'onClick={registerhandle}>Register</div>
        <div>or</div>
        <div className='button' onClick={handleClick}>Login</div>

    </div>
  )
}

export default Register