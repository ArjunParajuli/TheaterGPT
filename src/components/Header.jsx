import React from 'react'

const Header = () => {
  return (
    <div className='px-14 absolute bg-gradient-to-b from-black w-full py-2'>

      <div className='flex justify-between'>
      <div className='flex flex-col'>
      <img src="/logo.png" className='shadow-lg ring-2 ring-gray-300 ring-offset-2 ring-offset-gray-100 ring-opacity-50' alt='logo'></img>
      </div>

      <button className='bg-[#E50914] py-0 rounded-md w-[76px] h-[32px]'>Sign In</button>
      </div>

    </div>
  )
}

export default Header