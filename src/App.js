import './App.css';
import Home from "./components/Home/Home";
import Login from './components/login/login';
import Register from './components/Register/register';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path="/home" element={<Home user={user} setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;











// import './App.css';
// import Home from "./components/Home/Home";
// import Login from './components/login/login';
// //  import Login from "./components/Login/login";
//  import Register from './components/Register/register';
//  import {BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
//  import {useState} from 'react'
// //  import { useNavigate } from "react-router-dom";



// function App() {

//   const [user, setLoginUser]=useState()

//   return (
//     <div className="App">

//       <Router>
//       <Routes>
//         {/* <Route exact path="/" element={user ? <Navigate to="/Home" setLoginUser={setLoginUser}/> : <Navigate to="/login" />} /> */}
//           <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
//           <Route path="/home" element={<Home user={user} setLoginUser={setLoginUser} />} />
//          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
//         <Route path="/register" element={<Register />} />
        
//       </Routes>
//     </Router>
      
//     </div>
//   );
// }

// export default App;
