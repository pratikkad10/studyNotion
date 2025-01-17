import React from 'react'
import Template from '../components/Template'

import loginImg from '../assets/login.png'
import frameImg from '../assets/frame.png'

function Login({setIsloggedIn}) {
  return (
    <Template 
      title="welcome Back"
      desc1="Build skills for today, tommorow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      frameImage={frameImg}
      formtype="login"
      setIsloggedIn={setIsloggedIn}
    />
  )
}

export default Login