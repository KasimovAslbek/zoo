import React, { useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import work1 from '../img/work1.png'
import work2 from '../img/work2.png'
import work3 from '../img/work3.png'
import work4 from '../img/work4.png'
import play from '../img/play.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import  { Pagination} from 'swiper';


const images = [work1, work2, work3, work4 ]

function Works({ darkMode }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className='max-w-[790px] mx-5 lg:mx-auto'>
        <h2 className='text-4xl sm:text-6xl text-gray-800 font-black mt-24 mb-8 dark:text-white'>How it works?</h2>
        <p className='text-sm mb-8 dark:text-white'>As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat, and we are determined to assist in all aspects, including providing veterinary support and raising much-needed emergency funds. Zoo Online saves wildlife and inspires everyone to make conservation a priority in their lives. Animals have the right to a pain-free and happy life. They have equal claim to the resources of this planet, and deserve a life of dignity and compassion.As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.</p>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}


        modules={[Pagination]}

        className="mySwiper text-gray-500"
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
                    <SwiperSlide key={index} >
                        <img  className='h-[323px] md:max-h-[323px] object-none object-left md:object-cover w-full cursor-pointer' src={image} alt="" />
                    </SwiperSlide>))}

        </Swiper>
        

        <p className='text-gray-800 dark:text-white font-black text-2xl mt-7 text-center mb-3'>{(activeIndex + 1).toString().padStart(2, '0')}/<span className='text-sm text-gray-300'>{images.length.toString().padStart(2, '0')}</span></p>
        <svg className='w-fit mx-auto' width="245" height="10" viewBox="0 0 245 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3" width="245" height="5" fill="#BDBDBD" fill-opacity="0.57"/>
            <rect className={`mx-4 ${darkMode ? 'fill-[#FEFEFE]' : 'fill-[#333333]'}`}
          x={15 + activeIndex * 50}
          width='65'
          height='10'/>
        </svg>

        <button className='w-fit mx-auto mt-8 mb-24 flex gap-1 items-center px-10 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 text-white uppercase'>
                <img src={play} alt="" />
                <p className='text-lg uppercase py-4 font-black'>watch online</p>
        </button>
    </div>
  )
}

export default Works