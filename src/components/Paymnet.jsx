import React from 'react'
import visa from '../img/visa.png'
import pandaIcon from '../img/pandaIcon.png'
import zoo from '../img/zoo.png'
import circle from '../img/circle.png'
import arrow from '../img/arrow.png'
import arrowDown from '../img/arrowDown.png'


function Paymnet() {
  return (
    <div className='bg-gray-200 dark:bg-gray-700 '>

        <div className='lg:max-w-[900px] xl:max-w-[1200px] mx-auto pb-12 sm:pb-24'>
         <h2 className='pt-24 mb-8 text-4xl sm:text-6xl text-gray-800 font-black  dark:text-white text-center'>Pay and feed</h2>
        <p className='text-center text-sm text-gray-700 dark:text-white '>The opportunity to easily and naturally (but as often as possible) donate to the needs of animals that you like.</p>
        <div className='flex flex-col lg:flex-row gap-8 xl:gap-16 pt-8 sm:pt-24 pb-12'>
            
            <div className='relative'>
                <img className='mx-auto ' src={circle} alt="" />
                <div class=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <img src={visa} alt="" />
                    <p className='max-w-[136px] text-center pt-4 font-black text-xl dark:text-white '>You pay with a VISA card</p>
                </div>

            </div>
            <div className='my-auto hidden lg:block'><img src={arrow} alt="" /></div>
            <div className='mx-auto lg:hidden '><img src={arrowDown} alt="" /></div>
            <div className='relative'>
                <img className='mx-auto ' src={circle} alt="" />
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <img src={zoo} alt="" />
                    <p className='max-w-[136px] text-center pt-4 font-black text-xl dark:text-white '>Payment goes to the Zoo</p>
                </div>

            </div>
            <div className='my-auto hidden lg:block'><img src={arrow} alt="" /></div>
            <div className='mx-auto lg:hidden '><img src={arrowDown} alt="" /></div>
            <div className='relative'>
                <img className='mx-auto ' src={circle} alt="" />
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <img src={pandaIcon} alt="" />
                    <p className='max-w-[136px] text-center pt-4 font-black text-xl dark:text-white '>Panda gets the bamboo</p>
                </div>

            </div>
        </div>
        <button className='w-fit mx-auto min-w-[245px]  flex gap-1 items-center px-10 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 text-white uppercase'>
                <p className='text-lg uppercase py-4 mx-auto font-black'>donate</p>
        </button>
        </div>
    </div>
  )
}

export default Paymnet