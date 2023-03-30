import React, { useState, useEffect } from 'react'

import logo from '../assets/img/logo.png'

import { HiOutlineTicket } from 'react-icons/hi'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <div className='px-5 py-3 border-b bg-white dark:bg-[#0F172A] border-[#fa610282] header fixed w-full z-30'>
      <div className='flex justify-between gap-6 items-center'>
        <div className='logoContainer flex items-center space-x-3'>
          <img src={logo} className='w-12 rounded-full pjLogo' alt='' />
          <h3 className='font-bold dark:text-white text-[#0F172A] text-lg'>Hunt2Earn</h3>
        </div>

        

        <div className='headerActions flex gap-4 items-center'>
          <div className='xpCont flex items-center gap-2 border-2 border-[#FA6002] px-4 py-1 rounded-2xl'>
            <p className='mb-0 text-xl text-[#FA6002]'>0</p>
            <HiOutlineTicket className='text-[#FA6002]' size={25} />
          </div>
          <ThemeSwitcher />
          <div className='connectWalletBtn'>
            <button className='button text-[#fff]'>CONNECT</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header