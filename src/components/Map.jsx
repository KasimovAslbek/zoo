import React from 'react';
import mapLight from '../img/map.png';
import mapDark from '../img/mapDark.png';
import mapEagle from '../img/mapEagle.png';
import play from '../img/play.png';

function Map() {
  return (
    <div className="bg-gray-200 dark:bg-gray-700">
      <div className="max-w-[900px] mx-auto pb-12 sm:pb-24 relative">
        <h2 className="pt-12 sm:pt-24 mb-8 sm:mb-16 text-4xl sm:text-6xl text-gray-800 font-black dark:text-white text-center">Map</h2>
        <img className="object-cover w-full dark:hidden" src={mapLight} alt="" />
        <img className="object-cover w-full hidden dark:block" src={mapDark} alt="" />
        <button className="w-fit mx-auto mt-8 flex gap-1 items-center px-10 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 text-white uppercase">
          <img src={play} alt="" />
          <p className="text-lg uppercase py-4 font-black">Watch online</p>
        </button>
        <div className="absolute top-1/3 left-0 sm:left-10 xl:-left-10 mx-10 sm:mx-0 flex items-center gap-2 sm:gap-5 shadow-md rounded-lg max-w-[436px] p-4 sm:p-10 bg-white dark:bg-gray-700">
          <img className="w-10 sm:w-auto" src={mapEagle} alt="" />
          <div className="text-xs sm:text-sm dark:text-white">
            <p className="text-sm sm:text-xl font-black text-gray-800 dark:text-white pb-1.5">West End Bald Eagle</p>
            <p><span className="font-medium">Region: </span>on an island near Los Angeles</p>
            <p><span className="font-medium">Population: </span>more than 270 pairs in 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
