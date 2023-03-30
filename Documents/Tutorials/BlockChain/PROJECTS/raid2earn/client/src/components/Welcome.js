import React from 'react'

import hasukibg from '../assets/img/hasukibg.png'

function Welcome() {
  return (
    <section className='px-10 py-3 h-full'>
      <div className='flex justify-center items-center text-center h-full flex-col'>
        <div className=' p-5'>
          <p className='text-5xl mb-5 text-[#0F172A] dark:text-white fontBold'>Earn Xp and <br /> redeem with $BOOP</p>
          <div className='flex justify-center'>
            {/* <img src={hasukibg} className='-mt-20' width='50%' height='30%' /> */}
          </div>
          <p className='mb-5 mt-10 fontBold text-lg'>Connect your wallet to participate in hunts 🧨</p>
          <div className='connectWalletBtn mb-5'>
            <button className='button text-[#fff]'>CONNECT</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome