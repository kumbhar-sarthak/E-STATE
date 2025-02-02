import React, { useEffect, useRef } from 'react';
import './slider.css'


const Slider = () => {

  const slider = useRef() // document.getElementById("slider");
  let scrollAmount = 0;
  const scrollDistance = 380;
  let scrollingRight = true; 
  const left = useRef() // document.querySelector(".display-left");
  const right = useRef() // document.querySelector(".display-right");

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
      <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">Featured Properties</h2>
      <div class="w-full h-full relative slider-container group">
        <div
          class="absolute left-0 top-0 bottom-0 w-48 h-full flex justify-end items-center button-container-left"
        >
          <div
            class="w-full h-full gradient-hover-left flex justify-start items-center text-black text-3xl p-4 cursor-pointer display-left"
            ref={left}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>

        <div
          ref={slider}
          id="slider"
          class="flex space-x-4 overflow-x-scroll scroll-smooth p-2"
        >
          <div
            class="min-w-[360px] bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-95 cursor-pointer"
          >
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="House"
              class="rounded-lg object-cover w-full h-48 transition-transform duration-300"
            />
            <h3 class="font-semibold mt-2">Luxury Apartment</h3>
            <p class="text-gray-500">New York, USA</p>
            <p class="text-lg font-bold mt-1">$500,000</p>
          </div>
          <div
            class="min-w-[360px] bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-95 cursor-pointer"
          >
            <img
              src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="House"
              class="rounded-lg object-cover w-full h-48 transition-transform duration-300"
            />
            <h3 class="font-semibold mt-2">Cozy Cottage</h3>
            <p class="text-gray-500">Los Angeles, USA</p>
            <p class="text-lg font-bold mt-1">$350,000</p>
          </div>
          <div
            class="min-w-[360px] bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-95 cursor-pointer"
          >
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="House"
              class="rounded-lg object-cover w-full h-48 transition-transform duration-300"
            />
            <h3 class="font-semibold mt-2">Modern Villa</h3>
            <p class="text-gray-500">Miami, USA</p>
            <p class="text-lg font-bold mt-1">$800,000</p>
          </div>
          <div
            class="min-w-[360px] bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-95 cursor-pointer"
          >
            <img
              src="https://images.pexels.com/photos/3221215/pexels-photo-3221215.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="House"
              class="rounded-lg object-cover w-full h-48 transition-transform duration-300"
            />
            <h3 class="font-semibold mt-2">Modern Villa</h3>
            <p class="text-gray-500">Miami, USA</p>
            <p class="text-lg font-bold mt-1">$800,000</p>
          </div>
          <div
            class="min-w-[360px] bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-95 cursor-pointer"
          >
            <img
              src="https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="House"
              class="rounded-lg object-cover w-full h-48 transition-transform duration-300"
            />
            <h3 class="font-semibold mt-2">Modern Villa</h3>
            <p class="text-gray-500">Miami, USA</p>
            <p class="text-lg font-bold mt-1">$800,000</p>
          </div>
        </div>

        <div
          class="absolute right-0 top-0 bottom-0 w-48 h-full flex justify-end items-center button-container-right"
        >
          <div
            class="w-full h-full gradient-hover flex justify-end items-center text-black text-2xl p-4 display-right cursor-pointer"
            ref={right}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;