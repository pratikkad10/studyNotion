import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function SignupForm({setIsLoggedIn}) {

  const navigate=useNavigate();
  const [showPassword, setShowPassword]=useState(false);

  const [formData, setFormData]=useState({
    firstName:"", lastName:"", email:"", 
    password:"", confirmPass:""
  });

  const [accountType, setAccountType]=useState("student");

  function changeHandler(event){
    setFormData(
      (prev)=>{
        return{
          ...prev,
          [event.target.name] : event.target.value
        }
      }
    )
  }


  const finalData={
    ...formData, accountType
  }

  function submitFormHandler(e){
    e.preventDefault();
    if(formData.password !== formData.confirmPass){
      toast.error("password does no match!");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Welcome!");
    console.log("Signup form data", finalData);
    navigate('/dashboard');

    
  }

  

  
  
  

  return (
    
      <form action="" onSubmit={submitFormHandler}>
        <div className='flex items-center bg-[#161D29] w-[35%] px-2 py-1 rounded-full shadow-slate-700 my-4 shadow-sm '>
          <button 
          onClick={()=>setAccountType("student")}   
          className={`text-white p-2 rounded-full  transition-all delay-200 ${accountType==="student" ? 'bg-[#000814]': 'bg-transparent'}`}>Student</button>
          
          <button 
          onClick={()=>setAccountType("instructor")}
          className={`text-white p-2 rounded-full  transition-all delay-200 ${accountType==="instructor" ? 'bg-[#000814]': 'bg-transparent'}`}>Instructor</button>
        </div>

        <div className='flex mb-4 w-full gap-4'>
          <label className='w-1/2'>
            <p className='text-white  '>
              First Name<sup className='text-red-500'> *</sup>
            </p>
            <input 
            className='w-full p-2 rounded-md bg-[#161D29] mt-2 text-white shadow-slate-700 shadow-sm'
            onChange={changeHandler}
            type="text" name="firstName" placeholder='First Name' id="firstName" value={FormData.firstName} required/>
          </label>

          <label className='w-1/2'>
            <p className='text-white '>
              Last Name<sup className='text-red-500'> *</sup>
            </p>
            <input 
            className='w-full p-2 rounded-md bg-[#161D29] mt-2 text-white shadow-slate-700 shadow-sm'
            onChange={changeHandler}
            type="text" name="lastName" placeholder='Last Name' id="lastName" value={FormData.lastName} required/>
          </label>
        </div>

        <label className=''>
          <p className='text-white '>
            Email Address<sup className='text-red-500'> *</sup>
          </p>
          <input 
          className='w-full p-2 rounded-md bg-[#161D29] mt-2 text-white shadow-slate-700 shadow-sm'
          onChange={changeHandler}
          type="email" name="email" placeholder='Email Address' id="email" value={FormData.email} required/>
        </label>


        <div className='flex  mt-4  w-full gap-4 '>
          <label className='w-1/2' >
            <p className='text-white '>
              Create Paassword<sup className='text-red-500'> *</sup>
            </p>
            <input 
            className='w-full p-2 rounded-md bg-[#161D29] mt-2 text-white shadow-slate-700 shadow-sm'
            onChange={changeHandler}
            type={showPassword? "text": "password"} name="password" placeholder='Enter password' id="password" value={FormData.password} required/>
            
            <span onClick={()=>setShowPassword((prev)=>!prev)}>
             {showPassword ?  (<AiOutlineEyeInvisible  />) : (<AiOutlineEye/>)}
            </span>
          </label>

          <label className='w-1/2 relative'>
            <p className={'text-white '}>
              Confirm Password<sup className='text-red-500'> *</sup>
            </p>
            <input 
            className='w-full p-2 rounded-md bg-[#161D29] mt-2 text-white shadow-slate-700 shadow-sm'
            onChange={changeHandler}
            type={showPassword? "text": "password"} name="confirmPass" placeholder='Re-enter password' id="confirmPass" value={FormData.confirmPass} required/>
           
           <span 
           className='text-white absolute top-11 right-2'
           onClick={()=>setShowPassword((prev)=>!prev)}>
              {showPassword ?  (<AiOutlineEyeInvisible  />) : (<AiOutlineEye/>)}
           </span>

          </label>
        </div>

      <button className='w-full bg-[#FED70A] p-1 rounded-md mt-8 mb-2'>Create Account</button>
      </form>
    
  )
}

export default SignupForm