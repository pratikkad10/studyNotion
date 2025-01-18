import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {
    const navigate=useNavigate();
  const [showPassword, setShowPassword]=useState(false);

  const [formData, setFormData]=useState(
    {
      email:"",
      password:""
    }
  )

  function changeHandler(event){

    setFormData(prev=>{
      return{
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }

  function formSubmitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in successfully!");
    console.log("Login form data", formData);
    navigate('/dashboard');
    
  }

  return (
    <div
    className=''>
        <form 
        className=''
        action="" onSubmit={formSubmitHandler}>
          
            <label>
              <p className='text-white mt-4'>
                Email Address<sup className='text-red-500'> *</sup>
              </p>
            <input 
            className='w-full p-2 rounded-md bg-[#161D29] mt-2'
            type="email" value={formData.email} name='email' onChange={changeHandler} placeholder='Enter email address' required />
          </label>
          
          <label className='relative'>
            <p className='text-white mt-4'>
              Password<sup className='text-red-500'> *</sup>
            </p>
            <input 
            className='w-full p-2 rounded-md bg-[#161D29] mt-2 text-white'
            type={showPassword ? 'text' : 'password'} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter password' required/>
            
            <span 
            className='absolute top-[5.76rem] right-2'
            onClick={()=>setShowPassword((prev)=>!prev)}>
              {showPassword ?  (<AiOutlineEyeInvisible color='white' />) : (<AiOutlineEye color='white'/>)}
            </span>
          </label>
          
         
         <div className='flex justify-end items-center'>
            <Link 
            className='text-[#47A5E5] text-[12px] '
            href="#">Forgot Password</Link>
          </div>

          <button className='w-full bg-[#FED70A] p-1 rounded-md mt-8 mb-2'>Sign In</button>
        </form>
    </div>
  )
}

export default LoginForm