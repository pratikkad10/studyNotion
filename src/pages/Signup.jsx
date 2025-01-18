import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'

import frameImg from '../assets/frame.png'


function Signup({setIsLoggedIn}) {
  return (
    <Template 
      title='Join the millions learning  to code with studyNotion for free'
      desc1="Build skills for today, tommorow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      frameImage={frameImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup