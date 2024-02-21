import React, { useState } from 'react';

const SignInForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const toggleSignIn = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsSignedIn(!isSignedIn);
  }

  return ( 
      <form className='absolute inset-0 top-24 mx-auto w-[450px] h-[660px] pt-[60px] px-[68px] pb-[40px] border bg-black bg-opacity-60 rounded-lg'>
        <div className='flex flex-col gap-8'>

          <div className='text-[32px] font-semibold text-white'> { isSignedIn ? "SIgn In" : "Sign Up" } </div>

          <div className='flex flex-col gap-5'>
            { 
            isSignedIn ? <div></div> : <input placeholder='Enter full name' type="text" className='bg-[#333333] opacity-70 w-[314px] h-[50px] rounded-sm pl-[16px] text-white' />
            }
            <input placeholder='Email or phone number' type="email" className='bg-[#333333] opacity-70 w-[314px] h-[50px] rounded-sm pl-[16px] text-white' />
            <input type="password" placeholder='Password' className='bg-[#333333] opacity-70 w-[314px] h-[50px] pl-[16px] rounded-sm text-white' />
            { isSignedIn ? (<div></div>) : (<input type="password" placeholder='Confirm Password' className='bg-[#333333] opacity-70 w-[314px] h-[50px] pl-[16px] rounded-sm text-white' />) }
          </div>

          <button className='bg-[#E50914] py-3 rounded-sm text-white'> {isSignedIn ? "Sign In" : "Sign Up"} </button>
          
        </div>

        <div className='flex flex-col gap-4 mt-3'>
          <div className='flex justify-between opacity-60 text-xs text-white'>
            <div className='flex gap-1'>
              <input type="checkbox" />
              <div>Remember Me</div>
            </div>
            <div className='cursor-pointer'>Need Help?</div>
          </div>

          <div className='flex gap-2'>
            <div className='opacity-60 text-white'>New to Netflix?</div>
            <button className='text-white' onClick={toggleSignIn}>Sign Up Now</button>
          </div>

          <div className='flex text-white'>
            <div className='text-sm'><span className='opacity-50'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span><span className='cursor-pointer text-blue-400'> Learn More</span></div>
          </div>
        </div>
      </form>
  );
};

export default SignInForm;
