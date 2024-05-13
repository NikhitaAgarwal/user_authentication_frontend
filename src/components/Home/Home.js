import React from 'react';
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home({ user, setLoginUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call setLoginUser with an empty object to reset the user state
    setLoginUser({});
    navigate('/login');
  };

  return (
    <div className='homepage'>
      <h1>Profile</h1>
      
      {user && user.email && (
        <div>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div className='button' onClick={handleLogout}>Logout</div>
    </div>
  );
}

export default Home;

