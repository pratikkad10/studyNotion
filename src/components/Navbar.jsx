import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Navbar = (props) => {
  const navigate=useNavigate();
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;

  function logoutHandler(){
    toast.success("Successfully Logout!");
    setIsLoggedIn(false);
    navigate('/');
  }
  
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <img src="https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg" width={160} height={32} alt="" />
        
        <ul className='flex items-center justify-center text-[#DBDDEA] gap-4'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </ul>

        <div className='text-[#AFB2BF] flex gap-4'> 


         {
          !isLoggedIn &&
          <NavLink to='/login'>
              <button 
              className='px-3 py-2 rounded-md bg-[rgb(23,29,40)] border-[0.7px] hover:bg-gray-600 transition-all delay-150 border-gray-700'>Login</button>
          </NavLink>
         }



          {
            !isLoggedIn &&
            <NavLink to='/signup'>
              <button 
              className='px-3 py-2 rounded-md bg-[rgb(23,29,40)] border-[0.7px] hover:bg-gray-600 transition-all delay-150  border-gray-700'>Signup</button>
            </NavLink>
          }

          {
            isLoggedIn &&
            <button
            onClick={logoutHandler}
            className='px-3 py-2 rounded-md bg-[rgb(23,29,40)] border-[0.7px] hover:bg-gray-600 transition-all delay-150  border-gray-700'>Logout</button>
          }

          {
            isLoggedIn &&
            <NavLink to='/dashboard'>
              <button className='px-3 py-2 rounded-md bg-[rgb(23,29,40)] border-[0.7px] hover:bg-gray-600 transition-all delay-150  border-gray-700'>Dashboard</button>
            </NavLink>
          }
        </div>


        
    </div>
  )
}

export default Navbar