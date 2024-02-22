import React, { useState, useRef } from 'react';
import { validateEmailAndPwSignIn, validateEmailAndPwSignUp  } from '../utils/validation';
import { VscError } from "react-icons/vsc";


const SignInForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const pw = useRef(null);
  const confirmPw = useRef(null);
  const name = useRef(null);

  const toggleSignIn = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsSignedIn(!isSignedIn);
  }

  // validating the entered form data using the utility func defined in validation.js
  const validateDataSignIn = () =>{
    const resultAfterValidating = validateEmailAndPwSignIn(email.current.value, pw.current.value);
    setErrorMsg(resultAfterValidating)
    // console.log(resultAfterValidating) 
  }

  const validateDataSignUp = () =>{
    const resultAfterValidating = validateEmailAndPwSignUp(email.current.value, pw.current.value, name.current.value, confirmPw.current.value);
    setErrorMsg(resultAfterValidating);
  }


  return ( 
      <form onSubmit={(event)=>event.preventDefault()} className='absolute inset-0 top-24 mx-auto w-[450px] h-[670px] pt-[60px] px-[68px] pb-[40px] border bg-black bg-opacity-60 rounded-lg'>
        <div className='flex flex-col gap-8'>

          <div className='text-[32px] font-semibold text-white'> { isSignedIn ? "SIgn In" : "Sign Up" } </div>

          <div className='flex flex-col gap-5'>
            { 
            isSignedIn ? <div></div> : 
            <input ref={name} placeholder='Enter full name' type="text" className='bg-[#333333] opacity-70 w-[314px] h-[50px] rounded-sm pl-[16px] text-white' />
            }
            <input placeholder='Email or phone number' 
            ref={email}
            type="email" 
            className='bg-[#333333] opacity-70 w-[314px] h-[50px] rounded-sm pl-[16px] text-white' />
            <input type="password" 
            ref={pw}
            placeholder='Password' 
            className='bg-[#333333] opacity-70 w-[314px] h-[50px] pl-[16px] rounded-sm text-white' />
            { 
            isSignedIn ? 
            (<div></div>) : 
            (<input type="password" 
            placeholder='Confirm Password' 
            ref={confirmPw}
            className='bg-[#333333] opacity-70 w-[314px] h-[50px] pl-[16px] rounded-sm text-white' />) 
            }
          </div>
                    
          { errorMsg ? <p className='flex items-center gap-2 text-red-600 font-bold text-lg p-2 border border-red-600 rounded-md bg-red-100 shadow-md'> <VscError /> {errorMsg}</p> : <p></p>} 
          <button className='bg-[#E50914] py-3 rounded-sm text-white' onClick={ isSignedIn ? validateDataSignIn : validateDataSignUp }> 
          {isSignedIn ? "Sign In" : "Sign Up"} </button>
          
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
            <p className='text-white cursor-pointer' onClick={toggleSignIn}>Sign Up Now</p>
          </div>

          <div className='flex text-white'>
            <div className='text-sm'><span className='opacity-50'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span><span className='cursor-pointer text-blue-400'> Learn More</span></div>
          </div>
        </div>
      </form>
  );
};

export default SignInForm;
