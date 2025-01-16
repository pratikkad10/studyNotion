import React from 'react'

const Navbar = () => {
  return (
    // gap-[40rem]
    <div className='flex justify-around items-center p-4 '>
        <img src="https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg" width={160} height={32} alt="" />
        
        <ul className='flex items-center justify-center text-[#DBDDEA] gap-4'>
            <li className=''>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='text-[#AFB2BF] flex gap-4'> 
            <button className='px-3 py-2 rounded-md bg-[rgb(23,29,40)] border-[0.7px]  border-gray-700'>Login</button>
            <button className='px-3 py-2 rounded-md bg-[rgb(23,29,40)] border-[0.7px]  border-gray-700'>Signup</button>
            <button className='px-3 py-2 rounded-md bg-[rgb(23,29,40)] border-[0.7px]  border-gray-700'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar