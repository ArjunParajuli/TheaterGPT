import React, { useState } from 'react'
import Header from './Header'
import SignInForm from './SignInForm'

const SignIn = () => {
  return (
    <div className='w-full relative'>
            <img className='absolute object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt='bg'>
            </img>
        <Header />
       <SignInForm />
    </div>
  )
}

export default SignIn


