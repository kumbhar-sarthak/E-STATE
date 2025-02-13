import React, { useEffect, useRef } from 'react';
import './slider.css';
import { properties } from './infoCollector';


const Slider = () => {
  const slider = useRef();
  let scrollAmount = 0;
  const scrollDistance = 380;
  let scrollingRight = true;
  const left = useRef();
  const right = useRef();

  function autoScroll() {
    if (scrollingRight) {
      if (scrollAmount >= slider.current.scrollWidth - slider.current.clientWidth) {
        scrollingRight = false;
      } else {
        scrollAmount += scrollDistance;
        slider.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
      }
    } else {
      if (scrollAmount <= 0) {
        scrollingRight = true;
      } else {
        scrollAmount -= scrollDistance;
        slider.current.scrollBy({ left: -scrollDistance, behavior: "smooth" });
      }
    }
  }

  useEffect(() => {
    const handleLeftClick = () => {
      scrollAmount -= scrollDistance;
      slider.current.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    };

    const handleRightClick = () => {
      scrollAmount += scrollDistance;
      slider.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
    };

    if (left.current && right.current) {
      left.current.addEventListener("click", handleLeftClick);
      right.current.addEventListener("click", handleRightClick);
    }

    const interval = setInterval(autoScroll, 5000);

    return () => {
      clearInterval(interval);
      if (left.current && right.current) {
        left.current.removeEventListener("click", handleLeftClick);
        right.current.removeEventListener("click", handleRightClick);
      }
    };
  }, []);

  return (
    <div className='w-full h-full p-6'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Hot Properties </h2>
        <div className="w-full h-full relative slider-container group">
          <div className="absolute left-0 top-0 bottom-0 w-48 h-full flex justify-end items-center button-container-left">
            <div className="w-full h-full gradient-hover-left flex justify-start items-center text-black text-3xl p-4 cursor-pointer display-left" ref={left}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
          </div>

          <div ref={slider} id="slider" className="flex space-x-4 overflow-x-scroll scroll-smooth p-2">
            {properties.map((property, index) => (
              <div key={index} className="min-w-[360px] bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-95 cursor-pointer">
                <img src={property.imgSrc} alt="House" className="rounded-lg object-cover w-full h-48 transition-transform duration-300" />
                <h3 className="font-semibold mt-2">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <div className="font-semibold text-sm mt-3 flex justify-between">
                  <div className=' pr-2 pl-2 rounded-xl position-center'>{property.price}</div>
                  <div className=' pr-2 pl-2 rounded-xl position-center'>{property.size}</div>
                  <div className=' pr-2 pl-2  border border-gray-400 rounded-xl position-center text-[#A0C878]'>Contact</div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-48 h-full flex justify-end items-center button-container-right">
            <div className="w-full h-full gradient-hover flex justify-end items-center text-black text-2xl p-4 display-right cursor-pointer" ref={right}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
