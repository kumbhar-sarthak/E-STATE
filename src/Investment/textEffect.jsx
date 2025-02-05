import React, { useEffect } from "react";
import "./TextEffect.css"; 

export const TextEffect = () => {
  useEffect(() => {
    const textEffect = document.querySelector(".effects");

    const toggleAnimation = () => {
      if (window.scrollY > 2180) {
        textEffect.classList.add("active");
      } else {
        textEffect.classList.remove("active");
      }
    };

    window.addEventListener("scroll", toggleAnimation);
    toggleAnimation();

    return () => {
      window.removeEventListener("scroll", toggleAnimation);
    };
  }, []);

  return (
    <div className="w-full h-full p-4 text-8xl font-semibold font-sans effects">
      Investing in real estate is about making the right decisions at the right
      time and with the right people.
    </div>
  );
};

