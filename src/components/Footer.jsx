import React from 'react';
import logoDark from '../img/logoDark.png';
import arrowFooter from '../img/arrowFooter.png';
import instagram from '../img/instagram.png';
import tweeter from '../img/tweeter.png';
import vk from '../img/vk.png';
import youtube from '../img/youtube.png';

function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="relative mx-2.5 sm:mx-5 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl md:mx-auto lg:flex justify-between pt-10 sm:pt-24 pb-16 2xl:px-4">
        <div className="lg:w-1/2">
          <img src={logoDark} alt="" />
          <p className="mt-6 sm:mt-16 mb-8 text-xl font-black">Contact us</p>
          <form action="" className="max-w-[383px] flex flex-col gap-3">
            <input className="py-2 bg-gray-900 border-b border-gray-300" type="text" placeholder="Name" />
            <input className="py-2 bg-gray-900 border-b border-gray-300" type="email" placeholder="Email" />
            <div className="relative mt-2">
              <textarea className="w-full py-2 bg-gray-900 rounded border border-gray-300" name="textarea" id="text" rows="5"></textarea>
              <label className="absolute left-4 -top-2 px-1.5 text-xs bg-gray-900" htmlFor="text">Please enter your message</label>
            </div>
            <div className="mb-2 mt-3">
              <input className="accent-inherit" type="checkbox" />
              <p className="inline pl-1.5 text-xs">I agree to the processing of Personal Data</p>
            </div>
            <button className="flex items-center ml-auto mr-5 cursor-pointer gap-6">
              <p className="uppercase">Send</p>
              <img src={arrowFooter} alt="" />
            </button>
          </form>
        </div>
        <div className="2xl:flex justify-between lg:w-1/2 text-sm">
          <div>
            <ol className="mb-8 sm:mb-20 mt-10 lg:mt-0 sm:flex space-y-1.5 sm:space-y-0 gap-16 font-medium text-base">
              <li><a href="https://www.example.com/">About</a></li>
              <li><a href="https://www.example.com/">Zoos</a></li>
              <li><a href="https://www.example.com/">Map</a></li>
              <li><a href="https://www.example.com/">Design</a></li>
            </ol>
            <p className="mb-8 font-bold uppercase">ZOO Online Centre</p>
            <div>
              <p>132, Address District, Street</p>
              <p>Open Daily 10:00 am - 5:00 pm</p>
            </div>
            <div className="my-5">
              <p>T(702) 163-3433</p>
              <p>zoo.online@gmail.com</p>
            </div>
            <div className="flex gap-4 mb-10">
              <img src={instagram} alt="" />
              <img src={tweeter} alt="" />
              <img src={vk} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div>
            <button className="sm:absolute top-24 right-0 lg:top-0  lg:relative mx-auto  items-center px-6 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 text-white uppercase">
              <p className="text-lg uppercase py-4 font-black">donate for volunteers</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
