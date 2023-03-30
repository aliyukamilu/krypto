import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='px-10 py-3 flex items-center justify-between'>
      <div className='flex'>
        <img src='/img/logo.png' className='w-32' alt='' />
      </div>

      <div className='flex space-x-10 items-center'>
        <button className='button button-outline'>List Property</button>
        <p className='cursor-pointer'>Process</p>
        <p className='cursor-pointer'>Support</p>
        <p className='cursor-pointer'>Sign In</p>
        <button className='button '>Sign Up</button>
      </div>
    </div>
  )
}

export default Header