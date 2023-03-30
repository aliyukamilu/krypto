import React from 'react'
import { GiJumpingDog } from 'react-icons/gi'
import { GiSittingDog } from 'react-icons/gi'
import { HiTemplate } from 'react-icons/hi'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'
import { BiStore } from 'react-icons/bi'

import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='h-screen fixed shadow-2xl bg-[#0F172A] w-[240px] left-[-240px] lg:left-[0] top-[60px] pt-8 px-5 transition-all z-20'>
      <div className='headerItems flex flex-col gap-6'>
        <div className='flex gap-2 items-center transition-all headerIco cursor-pointer'>
          <GiJumpingDog size={25} className='text-[#fff]' />
          <Link to="/" className='text-[#a1a5b0] text-lg'>Hunts</Link>
        </div>
        <div className='flex gap-2 items-center transition-all headerIco cursor-pointer'>
          <HiTemplate size={22} className='text-[#fff]' />
          <a target="_blank" href="https://magiceden.io/marketplace/hasuki" className='text-[#a1a5b0] text-lg'>Marketplace</a>
        </div>
        <div className='flex gap-2 items-center transition-all headerIco cursor-pointer'>
          <GiSittingDog size={22} className='text-[#fff]' />
          <Link to="/profile/7cSAXxDTuAjF4qdZNSdbfGtX5eBtsCq7xrQPwboPb95" className='text-[#a1a5b0] text-lg'>Profile</Link>
        </div>
      </div>

      <div className='absolute bg-[#181F31] bottom-20 rounded-lg p-3 w-10/12'>
        <div class="mt-5 grid grid-cols-2 justify-items-center">
          <a class="socialIcCont" href="#">
            <BsTwitter />
          </a>
          <a class="socialIcCont" href="#">
            <FaDiscord />
          </a>
          <a class="socialIcCont" href="#">
            <BiStore />
          </a>
          <a class="socialIcCont" href="#">
            <RiGlobalLine />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar