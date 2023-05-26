import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar=(props)=>{
  let  isLoggedin=props.isLoggedin
    let setisLoggedin=props.setisLoggedin
    return(
        <div className='flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/" >
        <img src={logo} width={160} height={32} loading='lazy'>
        </img>
        </Link>
        <nav >
            <ul className=' flex  gap-x-6 text-richblack-100 '>
                <li>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <button>About</button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <button>Contact</button>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4 '>
            { !isLoggedin&&
                <Link to="/Login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 '>
                        Login</button>

                </Link>}

                { !isLoggedin&&
                <Link to="/Signup">
                 <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 '>
                       
        
              Sign Up</button>

             </Link>}

             {isLoggedin&&
              <Link to="/">
              <button onClick={()=>{
                setisLoggedin(false);
                toast.success("Logged out");
              }} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 '>
              Log Out</button>

          </Link>}
          {isLoggedin&&

           <Link to="/Dashboard">
           <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 '>
                       Dashboard</button>

       </Link>}
            
        </div>
        </div>
    )
}
export default Navbar