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
        {/* <img className='absolute inset-0 top-48 left-48' src="/watching_movie.png" alt="dog watching movie"></img> */}
        <LoginForm isSignIn={isSignIn} setIsSignIn={setIsSignIn}  />
        </div>
       
    </div>
  )
}

export default SignIn


