import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full'>
        <div className='mx-auto w-[450px] h-[660px] pt-[60px] px-[68px] pb-[40px] border'>
        <div className=' flex flex-col gap-8'>

            <div className='text-[32px] font-semibold'>Sign In</div>

            <div className='flex flex-col gap-5'>
            <input placeholder='Email or phone number' type="email" className='bg-[#333333] opacity-70 w-[314px] h-[50px] rounded-sm pl-[16px]' />
            <input type="text" placeholder='Password' className='bg-[#333333] opacity-70 w-[314px] h-[50px]  pl-[16px] rounded-sm' />
            </div>

            <button className='bg-[#E50914] py-3 rounded-sm'>Sign In</button>
            </div>

            <div className='flex flex-col gap-4 mt-3'>
            <div className='flex justify-between opacity-60 text-xs'>
                <div className='flex gap-1'>
                <input type="checkbox"  ></input>
                <div>Remember Me</div>
                </div>
                <div>Need Help?</div>
            </div>

            <div className='flex gap-2'>
                <div className='opacity-60'>New to Netflix?</div>
                <button>Sign Up Now</button>
            </div>

            <div className='flex'>
                <div className='text-sm opacity-50'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='cursor-pointer text-blue-700'> Learn More</span></div>
            </div>
            </div>
        
        </div>
    </div>
  )
}

export default SignIn