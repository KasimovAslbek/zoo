import React from 'react';
import Swip from './Swip';
import forest from '../img/forest.png';
import play from '../img/play.png';
import instagram from '../img/instagram.png';
import tweeter from '../img/tweeter.png';
import vk from '../img/vk.png';
import youtube from '../img/youtube.png';

function Hero() {
  return (
    <div className="relative w-fit mx-auto">
      <img className="mx-auto object-none object-center min-h-[700px] sm:min-h-[940px] xl:min-h-[670px]" src={forest} alt="" />
      <div className="absolute top-0 left-0 w-full">
        <div className="mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl pl-2.5 pt-20 sm:pl-10 md:pl-0 xl:pl-2 2xl:pl-32 sm:pt-10 md:pt-28 lg:pt-32 3xl:pl-52 3xl:pt-52">
          <h2 className="font-black text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-white xl:w-3/4 2xl:w-2/3">Watch your favorite animal online</h2>
          <button className="mt-9 flex gap-1 items-center px-10 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 text-white uppercase">
            <img src={play} alt="" />
            <p className="text-lg uppercase py-4 font-black">Watch online</p>
          </button>
        </div>
        <div className="xl:hidden w-full xl:w-fit md:max-w-2xl lg:max-w-4xl pl-6 sm:pl-28 mx-auto mt-9 sm:mt-12">
          <Swip />
        </div>
      </div>
      <div className="hidden sm:block w-full absolute bottom-0 left-0 ml-10 md:ml-0">
        <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-auto space-y-4 mb-24">
          <img src={instagram} alt="" />
          <img src={tweeter} alt="" />
          <img src={vk} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl md:mx-auto hidden xl:block">
        <Swip />
      </div>
    </div>
  );
}

export default Hero;
