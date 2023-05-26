import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Loginform = ({ setisLoggedin }) => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "", password: ""
  }
  )
  const [showPass, setshowPass] = useState(false)
  function changeHandler(event) {
    setformData(prevData => (
      {
        ...prevData
        [event.target.name] = event.target.value
      }
    ))

  }
  function submitHandler(event) {
    event.preventDefault();
    toast.success("Logged in")
    const form={
      ...formData
    };
    console.log(form)
    setisLoggedin(true)
    navigate("/Dashboard")
  }
  return (
    <div className='flex flex-col w-full gap-y-4 mt-6'>
      <form onSubmit={submitHandler}>
        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email-address<sup className='text-pink-200'>*</sup>
          </p>
          <input
            required
            type='email'
            placeholder='Enter your email'
            name='email'
            onChange={changeHandler}
            value={formData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>
          </input>
        </label>

        <label className='w-full relative' >
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-200'>*</sup>
          </p>
          <input
            required
            type={showPass ? ('text') : ('password')}
            placeholder='Enter your email'
            name='email'
            onChange={changeHandler}
            value={formData.password}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>

          </input>
          <span className='absolute top-[78px] right-3 cursor-pointer'
            onClick={() => setshowPass((prev) => (!prev))}>
            {showPass ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
          </span>

          <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto
                 '>
              Forgot password
            </p>

          </Link>
        </label>
        <button className='bg-yellow-50 w-full  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8'>
          Sign in
        </button>
      </form>

    </div>
  )
}
export default Loginform