import React, { useState } from 'react';
import logoLight from '../img/logoLight.png'
import logoDark from '../img/logoDark.png'
import menu from '../img/menu.png'
import menuLight from '../img/menuLight.png'


function Navbar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };




  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='dark:bg-gray-800' >
    
    <div className='mx-2.5 sm:mx-5   md:max-w-2xl lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-screen-2xl md:mx-auto flex justify-between items-center py-6 '>
        <img className='dark:hidden' src={logoLight} alt="" />
        <img className='hidden dark:block' src={logoDark} alt="" />
        <div className='hidden md:block'>
            <ol className='flex gap-12 xl:gap-20 text-gray-800 dark:text-white '>
                <li><a className='font-black underline' href="https://www.example.com/">About</a></li>
                <li><a href="https://www.example.com/">Zoos</a></li>
                <li><a href="https://www.example.com/">Map</a></li>
                <li><a href="https://www.example.com/">Contact</a></li>
                <li><a href="https://www.example.com/">Design</a></li>
            </ol>
        </div>
        <div className='flex gap-8'>
        <div class="flex items-center justify-center">
          <div id='light' class="dark:hidden cursor-pointer w-[54px] h-[30px] rounded-full bg-gray-200 " onClick={() => { handleClick(); toggleDarkMode(); }}>
            <div  class={` w-[20px] h-[20px] mt-1  bg-white shadow-md rounded-full  ${isToggled ? 'ml-7' : 'ml-1'}`}  style={{ transition: 'margin-left 500ms' }}></div>
          </div>
        <div class="hidden dark:block cursor-pointer w-[54px] h-[30px] rounded-full bg-gray-700 ml-4" onClick={() => { handleClick(); toggleDarkMode(); }}>
          <div  class={` w-[20px] h-[20px] mt-1  bg-gray-900 shadow-md rounded-full  ${isToggled ? 'ml-7' : 'ml-1'}`}  style={{ transition: 'margin-left 500ms' }}></div>
        </div>
    </div>

        <div className='lg:hidden'>
          <button
            className='block lg:hidden text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
          >
          <img className='dark:hidden' src={menu} alt="" />
          <img className='hidden dark:block' src={menuLight} alt="" />
          </button>

          <div
            className={`flex lg:hidden dark:bg-gray-800 bg-gray-100 z-30 absolute top-0 right-0 w-3/4 items-center gap-14 ${
              menuOpen ? '' : 'hidden'
            }`}
          >
            <button onClick={() => setMenuOpen(!menuOpen)} className='absolute top-5 right-7'>
              <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='0.646447' y1='17.6464' x2='17.6464' y2='0.646447' stroke={darkMode ? '#FFFFFF' : '#212121'} />
                <line y1='-0.5' x2='24.0416' y2='-0.5' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 18 18)' stroke={darkMode ? '#FFFFFF' : '#212121'} />
              </svg>
            </button>
            <ul className='flex flex-col gap-8 text-xl font-lato text-[#212121] w-full text-center  mx-auto sm:mx-14 my-16 sm:my-12 dark:text-white'>
              <li>
                <a href='https://www.example.com/'>About</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Zoom</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Map</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Contact</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Design</a>
              </li>

            </ul>
          </div>
        </div>

        </div>

    </div>

  </div>

  )
}

export default Navbar