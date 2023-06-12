import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import user1 from '../img/user1.png';
import user2 from '../img/user2.png';
import user3 from '../img/user3.png';
import user4 from '../img/user4.png';


import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);
const animals = [
  { id: 1, source: user1, name: "Nastya Sidorova", decs: "As a frequent visitor to the zoo, I am amazed by the variety of wildlife and the conservation efforts they undertake. The zoo provides a fantastic opportunity for education and appreciation of nature. I highly recommend it to everyone!" },

  { id: 2, source: user2, name: "Vlad Kim", decs: "I recently visited the zoo with my family, and it was an unforgettable experience. The exhibits were well-maintained, and the staff was knowledgeable and friendly. The zoo's commitment to animal welfare and conservation is truly commendable. We had a fantastic time and will definitely be returning!" },
  
  { id: 3, source: user3, name: "Emy Franklin", decs: "The zoo is my go-to place for a peaceful retreat amidst nature. The serene atmosphere, coupled with the beautiful animal enclosures, makes it a perfect escape from the city. I love spending time observing the animals and learning about their habitats. " },
  
  { id: 4, source: user4, name: "John Peterson", decs: "I have been a supporter of the zoo for many years, and I continue to be impressed by their dedication to wildlife conservation. The zoo plays a vital role in preserving endangered species and raising awareness about environmental issues. I am proud to be associated with such a wonderful institution." },
  
  { id: 5, source: user1, name: "Olivia Anderson", decs: "I recently took my kids to the zoo, and it was an incredible experience for them. They were fascinated by the different animals and enjoyed interactive exhibits. The zoo offers a perfect blend of education and entertainment for children. It's a fantastic place for family outings!" },
  
  { id: 6, source: user2, name: "Sophie Thompson", decs: "Being an animal lover, the zoo holds a special place in my heart. I appreciate their efforts in creating a safe and enriching environment for the animals. The exhibits are well-designed, and the knowledgeable staff always goes the extra mile to provide information. " },
  
  { id: 7, source: user3, name: "Ethan Roberts", decs: "The zoo is a treasure trove of biodiversity. I am amazed by the diverse range of species they house and their commitment to conservation. The interactive experiences, like feeding sessions and animal encounters, add an extra element of excitement. I cannot recommend the zoo enough to fellow nature enthusiasts!" },
  
  { id: 8, source: user4, name: "Sophia Lewis", decs: "Visiting the zoo is always a delightful experience. The well-maintained enclosures provide a glimpse into the natural habitats of the animals. The zoo's focus on education and sustainability is evident throughout the premises. It's a place where you can connect with wildlife and gain a deeper understanding of our natural world." },
];

function Testimonials({darkMode}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.realIndex);
    };
  return (
    <div>
        <div className='lg:max-w-[988px] xl:max-w-[1288px] mx-auto '>
            <h2 className='text-4xl sm:text-6xl text-gray-800 font-black mt-24 mb-8 dark:text-white text-center'>Testimonials</h2>
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

              slidesPerView: 1,
              spaceBetween: 10,
              },
              640: {
                slidesOffsetBefore: 5,
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesOffsetBefore: 7,
                slidesPerView: 1,
                spaceBetween: 25,
              },
              1024: {
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
                slidesPerView: 2,
                spaceBetween: 30,
              },
           }}
        className="mySwiper text-gray-500 mb-8 w-full my-10"
        onSlideChange={handleSlideChange}
      >
        {animals.map((animal, index) => (
                    <SwiperSlide key={index}  >
                      <div className='  shadow-lg rounded-md mb-7 sm:min-h-[320px] dark:bg-gray-700 ' >
                        <div className=''>
                          <img className='mx-auto pt-12 pb-4' src={animal.source} alt="" />
                          <p className='text-center text-xl mb-4 text-gray-700 font-black dark:text-white'>{animal.name}</p>
                          <p className='px-2 sm:px-14 pb-4 text-sm dark:text-white'>{animal.decs}</p>
                        </div>
                        
                      </div>
                        
                    </SwiperSlide>))}

      </Swiper>
      <div  className='swiper-button-prev cursor-pointer hidden lg:block'>
        <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M17.3337 13.8294L3.98332 0.479264C3.67454 0.170243 3.26235 0 2.82284 0C2.38334 0 1.97114 0.170243 1.66237 0.479264L0.679203 1.46218C0.0394526 2.10267 0.0394526 3.14363 0.679203 3.78314L11.8898 14.9938L0.666764 26.2169C0.357986 26.5259 0.1875 26.9378 0.1875 27.3771C0.1875 27.8168 0.357986 28.2288 0.666764 28.5381L1.64993 29.5207C1.95895 29.8298 2.3709 30 2.81041 30C3.24991 30 3.66211 29.8298 3.97088 29.5207L17.3337 16.1584C17.6432 15.8484 17.8132 15.4345 17.8122 14.9945C17.8132 14.5528 17.6432 14.1392 17.3337 13.8294Z" className={`mx-4 ${darkMode ? 'fill-[#FEFEFE]' : 'fill-[#333333]'}`}/>
      </svg>
        </div>
            </div>
            <p className='text-gray-800 dark:text-white font-black text-2xl mt-1 sm:mt-7 text-center mb-3'>{(activeIndex + 1).toString().padStart(2, '0')}/<span className='text-sm text-gray-300'>{animals.length.toString().padStart(2, '0')}</span></p>
            <svg className='w-fit mx-auto' width="245" height="10" viewBox="0 0 245 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3" width="245" height="5" fill="#BDBDBD" fill-opacity="0.57"/>
            <rect           className={`mx-4 ${darkMode ? 'fill-[#FEFEFE]' : 'fill-[#333333]'}`}
          x={8 + activeIndex * 24}
          width='65'
          height='10'/>
        </svg>
        <button className='w-fit mx-auto mt-8 mb-12 sm:mb-24 flex gap-1 items-center px-10 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 text-white uppercase'>
                <p className='text-lg uppercase py-4 font-black'>Leave feedback</p>
        </button>
        </div>
    </div>
  )
}

export default Testimonials