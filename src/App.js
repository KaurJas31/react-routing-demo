import "./App.css";
import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useState} from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedin,setisLoggedin]=useState(false);
 
  return <div className="w-screen h-screen bg-richblack-900 flex flex-col">
   
   <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login setisLoggedin={setisLoggedin}/>}/>
    <Route path="/Signup" element={<Signup setisLoggedin={setisLoggedin}/>}/>
    <Route path="/Dashboard" element={
    <PrivateRoute isLoggedin={isLoggedin}>
      <Dashboard/>
      </PrivateRoute>}/>

    
   </Routes>
  </div>;
}

export default App;
