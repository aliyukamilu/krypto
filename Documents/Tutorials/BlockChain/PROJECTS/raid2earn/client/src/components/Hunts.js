import React, { useState } from 'react'
import hasukiBg from '../assets/img/hasukibg3.png'

import { BiTimeFive } from 'react-icons/bi'


import { useNavigate } from 'react-router-dom'

function Hunts() {

  let navigate = useNavigate();
  function handleNavigate() {
    navigate("/hunt/fjdslheworiff")
  }

  return (
    <section className='px-10 py-3 h-full mt-24'>
      <h1 className='headings'>Hunts</h1>
      <section className="grid grid-cols-3 mt-5 gap-14">

        <HuntsCard
          handleNavigate={handleNavigate}
        />
        <HuntsCard
          handleNavigate={handleNavigate}
        />
        <HuntsCard
          handleNavigate={handleNavigate}
        />
      </section>
      <h1 className='headings mt-5'>Daily Rewards</h1>
    </section>
  )
}

const HuntsCard = ({ handleNavigate }) => {
  return (
    <>
      <div className='huntsCard min-w-[300px] w-32 cursor-pointer rounded-xl' onClick={handleNavigate}>
        <div className='w-full h-[80%] max-h-[80%] overflow-hidden rounded-t-xl'>
          <img src={hasukiBg} alt='' className='object-cover w-full' />
        </div>
        <div className='p-4'>
          <p className='title text-lg fontBold text-[#fa6002]'>Hasukied Mint</p>
          <div className='infoWrapper'>
            <p className='text-sm huntInfo text-[#ebe6e6]'>Partnered with Nekozuma to drop first HASUKIED collab collection, reimagining art & traits of Nekozuma. The collection can only be claimed by holders of each community</p>
          </div>
          <div className='flex justify-between items-center mt-5'>
            <button className='gradientBtn p-2 rounded-lg m-0 text-[#ebe6e6] font-bold'>10 WOOF</button>
            <div className='flex items-center space-x-2'>
              <BiTimeFive className='text-[#fa6002]' size={20} />
              <p className='text-[#ebe6e6]'> 3hrs left</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Hunts