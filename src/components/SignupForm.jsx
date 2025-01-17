import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignupForm({setIsLoggedIn}) {

  const navigate=useNavigate();
  const [showPassword, setShowPassword]=useState(false);

  const [formData, setFormData]=useState({
    firstName:"", lastName:"", email:"", 
    password:"", confirmPass:"",
  });

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

  

  function submitFormHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Sign in successfully!");
    navigate('/dashboard');
  }


  return (
    <div>
      <form action="" onSubmit={submitFormHandler}>
        <div>
          <button>Student</button>
          <button>Instructor</button>
        </div>

        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input 
            onChange={changeHandler}
            type="text" name="firstName" placeholder='First Name' id="firstName" value={FormData.firstName} required/>
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input 
            onChange={changeHandler}
            type="text" name="lastName" placeholder='Last Name' id="lastName" value={FormData.lastName} required/>
          </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input 
          onChange={changeHandler}
          type="email" name="email" placeholder='Email Address' id="email" value={FormData.email} required/>
        </label>


        <div>
          <label>
            <p>
              Create Paassword<sup>*</sup>
            </p>
            <input 
            onChange={changeHandler}
            type="text" name="password" placeholder='Enter password' id="password" value={FormData.password} required/>
            
            <span onClick={()=>setShowPassword((prev)=>!prev)}>
             {showPassword ?  (<AiOutlineEyeInvisible  />) : (<AiOutlineEye/>)}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input 
            onChange={changeHandler}
            type="text" name="confirmPass" placeholder='Re-enter password' id="confirmPass" value={FormData.confirmPass} required/>
           
           <span onClick={()=>setShowPassword((prev)=>!prev)}>
              {showPassword ?  (<AiOutlineEyeInvisible  />) : (<AiOutlineEye/>)}
           </span>

          </label>
        </div>

      <button>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm