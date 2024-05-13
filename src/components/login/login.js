import React,{useState} from 'react'
import "./login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login( {setLoginUser}) {

  const navigate = useNavigate()

    const [user,setUser]=useState({
         name:"",
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        });
    };

    


    const login =() =>{
        // axios.post(`http://localhost:9002/login`, user)

        //If this does not work then uncomment the above line

        axios.post(`${window.location.origin}/login`, user)
      .then(res => {
      console.log("Login response:", res.data);
      // console.log("Login response:", res.data.user);
      alert(res.data.message);
      console.log(setLoginUser(res.data.user));
      navigate('/Home');
    })
    .catch(error => {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    });
    }

    const handleClick = () => {
      navigate('/register')
};


  return (
    <div className='login'>
        {console.log(user)}
        <h1>Login</h1>
        <input type='text' name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange} required/>
        <input type='password' name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange} required/>
        <div className='button' onClick={login}>Login</div>
        <div>or</div>
        <div className='button' onClick={handleClick}>Register</div>

    </div>
  )
}

export default Login