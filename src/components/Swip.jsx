import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import gorilla from '../img/gorilla.png';
import eagle from '../img/eagle.png';
import panda from '../img/panda.png';
import crocodile from '../img/crocodile.png';
import bluePlay from '../img/bluePlay.png';
import donate from '../img/donate.png';
import line from '../img/line.png';

import "./custom.css"




// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const data = [
  { id: 1, source: eagle, decs: "Eagle's name is Aria. She is 5 years old. Aria symbolizes freedom, strength, and grace, soaring through the skies with majestic beauty"},
  { id: 2, source: panda, decs: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'},
  { id: 3, source: gorilla, decs:"Gorilla's name is Koko. He is 10 years old. Koko is a powerful and intelligent creature from the lush forests. "},
  { id: 4, source: crocodile, decs:"Crocodile's name is Rex. He is 15 years old. Rex is a formidable predator, lurking in the waters with stealth and power. "},
  { id: 5, source: eagle, decs: "Eagle's name is Aria. She is 5 years old. Aria symbolizes freedom, strength, and grace, soaring through the skies with majestic beauty"},
  { id: 6, source: panda, decs: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'},
  { id: 7, source: gorilla, decs:"Gorilla's name is Koko. He is 10 years old. Koko is a powerful and intelligent creature from the lush forests. "},
  { id: 8, source: crocodile, decs:"Crocodile's name is Rex. He is 15 years old. Rex is a formidable predator, lurking in the waters with stealth and power. "},
];
function Swip() {
    const [activeIndex, setActiveIndex] = useState(1);


      const handleSlideChange = (index) => {
        if (activeIndex === index) {
          // If the same div is clicked again, do nothing
          return;
        }
        else {
          setActiveIndex(index === activeIndex ? null : index);
        }
        
      };






  return (
    <div className='xl:absolute bottom-32 right-0 xl:flex justify-end ml-auto'>
        <div className="relative  lg:mx-3 xl:mx-8 lg:ml-40 !w-full  xl:!w-[40%] 2xl:w-1/2  3xl:w-[60%]">
          
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

        modules={[Pagination]}
        breakpoints={{
            150: {
              slidesOffsetBefore: 0,
              slidesPerView: 2.2,
              spaceBetween: 9,
              },
              640: {
                slidesOffsetBefore: 0,
                slidesPerView: 2.4,
                spaceBetween: 30,
              },
              768: {
                slidesOffsetBefore: 0,
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1024: {
                slidesOffsetBefore: 0,
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1280: {
                slidesOffsetBefore: 0,
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1600: {
                slidesOffsetBefore: 0,
                slidesPerView: 3,
                spaceBetween: 46,
              },
              1900: {
                slidesOffsetBefore: 0,
                slidesPerView: 4.5,
                spaceBetween: 46,
              },
           }}
        className="mySwiper text-gray-500"
      >
        {data.map((card, index) => (
                    <SwiperSlide key={card.id}  className='custom'  >
                        <div className="flex justify-center cursor-pointer">
                        <div onClick={() => handleSlideChange(index)} className={`relative  ${activeIndex === index ? "w-[140px] sm:w-[245px] h-[202px] sm:h-[352px] transition duration-700" : "mt-6 sm:mt-16 !w-[113px] !h-[164px] sm:w-[140px] sm:h-[203px]"}`} >
                        <img className='w-full h-full '  src={card.source} alt="" />
                        <div className={` ${activeIndex === index ? 'absolute bottom-0 left-0 block' : 'hidden '}`}>
                            <p className='text-xs sm:text-sm text-white p-2 sm:px-5'>{card.decs}</p>
                            <div className='p-2 sm:px-5 sm:pb-8 sm:pt-3 sm:flex gap-2.5 font-medium text-[10px] sm:text-xs space-y-2 sm:space-y-0'>
                                <div className='flex gap-1 items-center cursor-pointer'>
                                    <img src={bluePlay} alt="" />
                                    <p className='text-transparent bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-500 bg-clip-text uppercase'>watch online</p>
                                </div>
                                <div className='flex gap-1 items-center cursor-pointer'>
                                    <img src={donate} alt="" />
                                    <p className='text-white uppercase'>Donate</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </SwiperSlide>))}

      </Swiper>


        </div>
        <div className='absolute top-[75%] -ml-4  sm:top-[65%] md:top-[70%]  lg:top-[65%] 2xl:top-[40%] sm:-ml-12 xl:top-1/2  xl:w-[45%]  2xl:w-[60%] 3xl:w-3/4'>
        <img className='w-full object-cover h-full' src={line} alt="" />
        </div>
        <div className='xl:absolute -bottom-20 lg:left-[67%] xl:left-0 xl:w-[45%]  2xl:w-[60%] 3xl:w-2/3 sm:ml-[40%] md:ml-[55%]  lg:ml-[70%] xl:ml-[70%] mt-6 '>
          <p className='text-2xl mb-2.5 text-white font-black pl-40'>0{activeIndex + 1}/<span className='text-sm text-gray-300'>{data.length.toString().padStart(2, '0')}</span></p>
          <svg className='hidden sm:block' width="245" height="10" viewBox="0 0 245 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="3" width="245" height="5" className="fill-[#BDBDBD] opacity-57 -ml-10" />
          <rect x={2 + (activeIndex * 30)} width="30" height="10" className="fill-white " />
        </svg>
        <svg className='sm:hidden ml-36' width="140" height="10" viewBox="0 0 245 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="3" width="140" height="5" className="fill-[#BDBDBD] opacity-57 -ml-10" />
          <rect x={2 + (activeIndex * 17)} width="15" height="10" className="fill-white" />
        </svg>
        </div>
    </div>


  )
}

export default Swip