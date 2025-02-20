import React, { useEffect, useRef } from "react";
import "./home.css";
import Navbar from "./Navbar";
import Banner from "./video";
import { Cursor } from "./customCursor";
import Slider from "../sliderDisplay/slider";
import { Page3 } from "../InquiryForm/Page3";
import Lenis from "lenis";
import { About } from "../aboutSection/About";
import ScrollingWrapper from "../Investment/ScrollWapper";
import { TextEffect } from "../Investment/textEffect";

const Home = () => {
  const sectionThird = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (i) => {
        i.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionThird.current) {
      observer.observe(sectionThird.current);
    }

    return () => {
      if (sectionThird.current) {
        observer.unobserve(sectionThird.current);
      }
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <div className=" overflow-y-scroll snap-y snap-mandatory">
        {/* <Cursor /> */}
        <div className="w-full h-screen snap-start">
          <Navbar />
          <Banner />
        </div>
        <div className="w-full h-screen mt-20 snap-start">
          <Slider />
        </div>
        <div
          className="w-full h-screen snap-start opacity-0 translate-y-10 transition-all duration-700 p-6"
          ref={sectionThird}
        >
          <Page3 />
        </div>
        <div className=" w-full h-screen mt-40 snap-start">
          <TextEffect />
        </div>
        <div className="w-full h-full mt-10 snap-start">
          <ScrollingWrapper />
        </div>
        <div className="w-full h-screen mt-10 snap-start " id="about">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
