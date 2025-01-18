import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

function Template({title, desc1, desc2, image, formtype,frameImage, setIsLoggedIn}) {
  return (
    <div className='flex  w-11/12 max-w-[1160px]  justify-between py-12 mx-auto gap-x-2 gap-y-0 '>
        
        <div className='w-[500px] '>
          <div className=''>
            <p className='text-white font-bold text-3xl'>{title}</p>
          </div>
          <div className='mt-6'>
            <p className='text-[#AFB2BF]'>{desc1}</p>
            <p className='text-[#47A5E5] italic mt-2'>{desc2}</p>
          </div>

          <div>
          {
            formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
          }
          </div>

          <div className='flex w-full items-center mt-6 gap-x-2'>
            <div className='h-[1px] w-full bg-zinc-800'></div> 
            <p className='font-medium leading-[1.37rem] text-zinc-800'>OR</p>
            <div className='h-[1px] w-full bg-zinc-800'></div>
          </div>

          <button className='w-full flex gap-x-2 mt-8 items-center justify-center rounded-md font-medium text-white border-[1px] border-zinc-800 px-[12px] py-[8px]'>
            <span><FcGoogle /></span>
            Sign in with Google</button>

        </div>

        <div 
        className="images relative">
          <img 
          className=''
          src={frameImage} alt="pattern" height={450} width={406.45} loading='lazy'/>


          <img 
          className='absolute -top-3 right-3 '
          src={image} alt="student-image" height={450} width={406.45} loading='lazy'/>

        </div>

    </div>
  )
}

export default Template