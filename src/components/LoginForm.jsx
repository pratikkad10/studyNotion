import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    navigate('/dashboard');
    
  }

  return (
    <div
    className=''>
        <form action="" onSubmit={formSubmitHandler}>
            <label>
              <p>
                Email Address<sup>*</sup>
              </p>
            <input type="email" value={formData.email} name='email' onChange={changeHandler} placeholder='Enter email address' required />
          </label>
          
          <label>
            <p>
              Password<sup>*</sup>
            </p>
            <input type={showPassword ? 'text' : 'password'} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter password' required/>
            
            <span onClick={()=>setShowPassword((prev)=>!prev)}>
              {showPassword ?  (<AiOutlineEyeInvisible  />) : (<AiOutlineEye/>)}
            </span>
          </label>
         
          <Link href="#">Forgot Password</Link>

          <button>Sign In</button>
        </form>
    
    </div>
  )
}

export default LoginForm