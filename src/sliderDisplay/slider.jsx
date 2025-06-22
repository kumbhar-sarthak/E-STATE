import React, { useEffect, useRef } from "react";
import "./slider.css";
import { properties } from "./infoCollector";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const slider = useRef();
  const sliderWrapper = useRef();
  const left = useRef();
  const right = useRef();

  let scrollAmount = 0;
  const scrollDistance = window.innerWidth;
  let scrollingRight = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollingRight) {
        if (
          scrollAmount >=
          slider.current.scrollWidth - slider.current.clientWidth
        ) {
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
          slider.current.scrollBy({
            left: -scrollDistance,
            behavior: "smooth",
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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


    return () => {
      if (left.current && right.current) {
        left.current.removeEventListener("click", handleLeftClick);
        right.current.removeEventListener("click", handleRightClick);
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sliderWrapper.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderWrapper.current,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sliderWrapper} className="w-full h-full opacity-0">
      <div className="w-full h-full">
        <div className="w-full h-full relative slider-container group">
          <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[70px] w-[100px] flex justify-center items-center bg-white z-10 rounded-full ml-4"
            ref={left}
          >
            <FaArrowLeft />
          </div>

          <div
            ref={slider}
            className="h-full flex overflow-x-scroll scroll-smooth"
          >
            {properties.map((property, index) => (
              <div
                key={index}
                className="min-w-full min-h-full transition-transform relative overflow-hidden"
              >
                <img
                  src={property.imgSrc}
                  alt="House"
                  className="object-cover w-screen h-screen transition-transform duration-300 aspect-3/4"
                />
                <div className=" text-white w-full absolute bottom-0 p-3 md:p-6 property-info">
                  <h3 className="font-semibold text-4xl md:text-6xl mb-4">
                    {property.title}
                  </h3>
                  <p className="text-gray-300 pl-2">{property.location}</p>
                  <div className="font-medium text-sm mt-6 flex gap-8 md:gap-20 pr-4 pl-4">
                    <div className="text-1xl md:text-2xl">Price - {property.price}</div>
                    <div className="text-1xl md:text-2xl">Size - {property.size}</div>
                    <button
                      className="bg-white rounded-lg text-black pl-2 pr-2 p-1 cursor-pointer"
                      onClick={() => alert("service not available")}
                    >
                      Contact
                    </button>
                  </div>
                </div>
                <div className="w-[70px] h-[30px] bg-[#222222] absolute top-0 right-0 m-4 rounded-full flex items-center justify-center gap-2 text-white">
                  <FaStar color="white" size={15} />
                  <span className="text-[14px]">{property.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[70px] w-[100px] flex justify-center items-center bg-white z-10 rounded-full mr-2"
            ref={right}
          >
            <FaArrowLeft className="rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
