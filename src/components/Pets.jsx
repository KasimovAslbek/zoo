import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import gorilla from '../img/gorilla.png';
import eagle from '../img/eagle.png';
import panda from '../img/panda.png';
import crocodile from '../img/crocodile.png';


import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);
const animals = [gorilla, eagle, panda, crocodile, gorilla, eagle, panda, crocodile]
function Pets({ darkMode }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.realIndex);
    };
  return (
    <div>
        <div className='lg:max-w-[988px] xl:max-w-[1288px] mx-auto '>
            <h2 className='text-4xl sm:text-6xl text-gray-800 font-black mt-24 mb-8 dark:text-white text-center'>Pets in Zoo</h2>
            <div className='flex justify-center gap-6 items-center mx-2.5 lg:mx-0'>
            <div className='swiper-button-next cursor-pointer hidden lg:block' ><svg  width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666298 16.1706L14.0167 29.5207C14.3255 29.8298 14.7376 30 15.1772 30C15.6167 30 16.0289 29.8298 16.3376 29.5207L17.3208 28.5378C17.9605 27.8973 17.9605 26.8564 17.3208 26.2169L6.11016 15.0062L17.3332 3.78314C17.642 3.47412 17.8125 3.06217 17.8125 2.6229C17.8125 2.18315 17.642 1.7712 17.3332 1.46194L16.3501 0.479263C16.0411 0.17024 15.6291 0 15.1896 0C14.7501 0 14.3379 0.17024 14.0291 0.479263L0.666298 13.8416C0.356789 14.1516 0.18679 14.5655 0.187767 15.0055C0.18679 15.4472 0.356789 15.8608 0.666298 16.1706Z" className={`mx-4 ${darkMode ? 'fill-[#FEFEFE]' : 'fill-[#333333]'}`}/>
            </svg></div>

            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

        modules={[Pagination]}
        breakpoints={{
            150: {

              slidesPerView: 1.4,
              spaceBetween: 16,
              },
              640: {

                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              768: {
                slidesOffsetBefore: 0,
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
           }}
        className="mySwiper text-gray-500 mb-8 "
        onSlideChange={handleSlideChange}
      >
        {animals.map((animal, index) => (
                    <SwiperSlide key={index}  >
                        <img src={animal} alt="" />
                    </SwiperSlide>))}

      </Swiper>
      <div  className='swiper-button-prev cursor-pointer hidden lg:block'>
        <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M17.3337 13.8294L3.98332 0.479264C3.67454 0.170243 3.26235 0 2.82284 0C2.38334 0 1.97114 0.170243 1.66237 0.479264L0.679203 1.46218C0.0394526 2.10267 0.0394526 3.14363 0.679203 3.78314L11.8898 14.9938L0.666764 26.2169C0.357986 26.5259 0.1875 26.9378 0.1875 27.3771C0.1875 27.8168 0.357986 28.2288 0.666764 28.5381L1.64993 29.5207C1.95895 29.8298 2.3709 30 2.81041 30C3.24991 30 3.66211 29.8298 3.97088 29.5207L17.3337 16.1584C17.6432 15.8484 17.8132 15.4345 17.8122 14.9945C17.8132 14.5528 17.6432 14.1392 17.3337 13.8294Z" className={`mx-4 ${darkMode ? 'fill-[#FEFEFE]' : 'fill-[#333333]'}`}/>
      </svg>
        </div>
            </div>
            <p className='text-gray-800 dark:text-white font-black text-2xl mt-7 text-center mb-3'>{(activeIndex + 1).toString().padStart(2, '0')}/<span className='text-sm text-gray-300'>{animals.length.toString().padStart(2, '0')}</span></p>
            <svg className='w-fit mx-auto' width="245" height="10" viewBox="0 0 245 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3" width="245" height="5" fill="#BDBDBD" fill-opacity="0.57"/>
            <rect  className={`mx-4 ${darkMode ? 'fill-[#FEFEFE]' : 'fill-[#333333]'}`}
          x={15 + activeIndex * 30}
          width='65'
          height='10'/>
        </svg>
        <button className='w-fit mx-auto mt-8 mb-12 sm:mb-24 flex gap-1 items-center px-10 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 text-white uppercase'>
                <p className='text-lg uppercase py-4 font-black'>Choose your favorite</p>
        </button>
        </div>
    </div>
  )
}

export default Pets