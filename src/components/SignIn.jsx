import React, { useState } from 'react'
import Header from './Header'
import LoginForm from './LoginForm'

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className='w-full relative'>
            <img className='absolute object-cover w-full h-screen' src="/backgroundimg.jpg"
            alt='bg'>
            </img>
        <Header />
        <div >
        <LoginForm isSignIn={isSignIn} setIsSignIn={setIsSignIn}  />
        </div>
       
    </div>
  )
}

export default SignIn


