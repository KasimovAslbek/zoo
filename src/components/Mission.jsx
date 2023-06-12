import React from 'react'
import idea from '../img/idea.png'
import love from '../img/love.png'
import flag from '../img/flag.png'

function Mission() {
  return (
    <div className='bg-gray-200 dark:bg-gray-700'>
        <div className='lg:max-w-[900px] xl:max-w-[1200px] mx-auto lg:flex gap-5 pt-24 pb-28'>
            <div className='flex flex-col max-w-[287px] lg:w-1/3 mx-auto items-center px-2.5 mb-8 sm:mb-12 lg:mb-0'>
                <img src={flag} alt="" />
                <h2 className='dark:text-white text-xl font-black text-gray-800 my-4'>What inspires us?</h2>
                <p className='text-sm dark:text-gray-200'>As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat, and we are determined to assist in all aspects.</p>
            </div>
            <div className='flex flex-col max-w-[287px] lg:w-1/3 mx-auto items-center px-2.5 mb-8 sm:mb-12 lg:mb-0'>
                <img src={idea} alt="" />
                <h2 className='dark:text-white text-xl font-black text-gray-800 my-4'>Our mission</h2>
                <p className='text-sm dark:text-gray-200'>Zoo Online saves wildlife and inspires everyone to make conservation a priority in their lives. </p>
            </div>
            <div className='flex flex-col max-w-[287px] lg:w-1/3 mx-auto  items-center px-2.5 mb-8 sm:mb-12 lg:mb-0'>
                <img src={love} alt="" />
                <h2 className='dark:text-white text-xl font-black text-gray-800 my-4'>What we believe in?</h2>
                <p className='text-sm dark:text-gray-200'>Animals have the right to a pain-free and happy life. They have equal claim to the resources of this planet, and deserve a life of dignity and compassion.</p>
            </div>
        </div>
    </div>
  )
}

export default Mission