import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

function Template({title, desc1, desc2, image, formtype,frameImage, setIsLoggedIn}) {
  return (
    <div>
        
        <div>
          <p>{title}</p>

          <p>{desc1}</p>
          <p>{desc2}</p>

          {
            formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
          }

          <div>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          <button>Sign in with Google</button>

        </div>

        <div className="images">
          <img src={frameImage} alt="pattern" height={504} width={558} loading='lazy'/>
          <img src={image} alt="student-image" height={490} width={558} loading='lazy'/>

        </div>

    </div>
  )
}

export default Template