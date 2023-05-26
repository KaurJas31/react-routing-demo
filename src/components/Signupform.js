import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Signupform = ({ setisLoggedin }) => {
  const [formData, setformData] = useState({
    firstName: "", lastName: "", email: "", pass: "", confirmpass: ""
  }
  )
  const[accounttype,setaccounttype]=useState("student")
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const navigate = useNavigate();
  function changeHandler(event) {
    setformData(prevData => (
      {
        ...prevData,
        [event.target.name] : event.target.value
      }
    ));
    console.log(formData);
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData.pass)
    console.log(formData.confirmpass)
    if (formData.pass !== formData.confirmpass) {
      toast.error("Password not match");
      return;
    }
    setisLoggedin(true)
    toast.success("Account created")
    const accountdata={
      ...formData
    };
    const finalData={
      ...accountdata,
      accounttype
    };
    console.log(finalData);
    navigate("/Dashboard")
  }
  return (
    <div className='bg-richblack-900'>
      <div className='flex bg-richblack-800 p-1 gap-x-2 my-6 rounded-full max-w-max'>
        
        <button className={`${accounttype==="student"?"bg-richblack-900 text-richblack-5 ":
        "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={()=>setaccounttype("student")}>Student</button>
         
        <button className={`${accounttype==="instructor"?"bg-richblack-900 text-richblack-5 ":
        "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setaccounttype("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div className='flex gap-x-4 w-full'>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              FirstName<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type='text'
              placeholder='Priya'
              name='firstName'
              onChange={changeHandler}
              value={formData.firstName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]'>
            </input>
          </label>
          <label className='w-full' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              LastName<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type='text'
              placeholder='Ranjan'
              name='lastName'
              onChange={changeHandler}
              value={formData.lastName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]'>
                 
            </input>
          </label>
        </div>
        <div>
          <label >
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
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]'>
                
            </input>
          </label>
        </div>
        <div className='flex gap-x-4'>
          {/* <label>
   <p>
    Create Password<sup>*</sup>
   </p>
   <input
   required
   type='password'
   placeholder='Password'
   name='pass'
   onChange={changeHandler}
   value={formData.pass}>
   </input>
   <span onClick={()=>setshowPass((prev)=>(!prev))}>
{     showPass?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
   </span>
</label>
<label>
   <p>
     Confirm Password<sup>*</sup>
   </p>
   <input
   required
   type='password'
   placeholder='Confirm your password'
   name='confirmpass'
   onChange={changeHandler}
   value={formData.confirmpass}>
     
   </input>
   <span onClick={()=>setshowPass((prev)=>(!prev))}>
    { showPass?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
   </span>
</label> */}
          <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPass1 ? 'text' : 'password'}
              placeholder='Password'
              name='pass'
              onChange={changeHandler}
              value={formData.pass}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]'
            />
            <span className='absolute top-[38px] right-3 cursor-pointer'
            onClick={() => setShowPass1(prev => !prev)}>
              {showPass1 ? <AiOutlineEye  fontSize={24} fill='#AFB2BF'/> : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>

          <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPass2 ? 'text' : 'password'}
              placeholder='Confirm  password'
              name='confirmpass'
              onChange={changeHandler}
              value={formData.confirmpass}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]'
            />
            <span className='absolute top-[38px] right-3 cursor-pointer'
            onClick={() => setShowPass2(prev => !prev)}>
              {showPass2 ? <AiOutlineEye fontSize={24} fill='#AFB2BF'/> : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>

        </div>
        <button className='bg-yellow-50 w-full  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8'>
          Create Account
        </button>
      </form>

    </div>
  )
}
export default Signupform