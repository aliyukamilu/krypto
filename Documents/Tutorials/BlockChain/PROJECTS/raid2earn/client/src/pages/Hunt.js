import React from 'react'
import { useParams } from 'react-router-dom'

import { HiOutlineTicket } from 'react-icons/hi'
import { Button } from 'flowbite-react'

import { Header, Sidebar } from "../components";
import { DarkModeProvider } from '../context/DarkModeContext'

const Hunt = () => {

  let { huntId } = useParams()

  return (
    <DarkModeProvider>
      <Header />
      <section className="h-screen flex relative dark:bg-[#10172af6]">
        <Sidebar />
        <div className='h-full lg:pl-[260px] w-full mt-24 px-3 dark:text-gray-300'>
          <h1 className='text-xl fontBold mb-5'>Huskied Mint</h1>
          <div className='flex-col space-y-4 flex md:flex-row md:space-x-4 md:space-y-0'>

            <div className='shadow-2xl border border-[#fa610248] rounded-md p-3 w-full'>
              <button className='button w-full'>Connect to Claim</button>

              <div className='activitiesCenter mt-2'>
                <p className='mt-2 mb-5 text-sm'>Complete these activities to claim your reward.</p>
                <ActivityCard
                  type='Follow'
                  text='Follow'
                />
                <ActivityCard
                  type='Like'
                  text='Like Post'
                />
                <ActivityCard
                  type='Retweet'
                  text='Retweet Post'
                />
                <ActivityCard
                  type='Comment'
                  text='Drop a Comment'
                />

                <hr class='border-[#fff4] mt-10' />
                <button className='button mt-3 w-full'>Claim Reward</button>
              </div>
            </div>

            <div className='shadow-2xl border border-[#fa610248] h-fit rounded-md p-3 w-9/12'>
              <h3>REWARDS</h3>
              <div className='flex items-center space-x-3 mt-2'>
                <HiOutlineTicket className='text-[#fa6002] text-lg' />
                <p className='font-bold'>100 XP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DarkModeProvider>
  )
}

const ActivityCard = ({ type, text }) => (
  <div className='activity px-4 py-3 bg-[#0f172a55] rounded-md mb-3 flex justify-between items-center'>
    <p className='font-bold'>{text}</p>
    <Button size="sm" className='actBtn'>
      {type}
    </Button>
  </div>
)

export default Hunt