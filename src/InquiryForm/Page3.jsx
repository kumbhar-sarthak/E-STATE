import { useEffect, useRef } from 'react';
import './page3.css';

export const Page3 = () => {
  const leftbtn = useRef(null);
  const rightbtn = useRef(null);
  const scrollContainer = useRef(null);
  let scrollAmount = 0;
  let scrollingRight = true;

  const scrollEffect = () => {
    if (scrollContainer.current) {
      scrollAmount = scrollContainer.current.clientWidth;
    }
  };

  useEffect(() => {
    scrollEffect();

    const handleResize = () => {
      setTimeout(() => {
        scrollEffect();
      }, 100);
    };

    const autoScroll = () => {
      if (scrollContainer.current) {
        if (scrollingRight) {
          if (
            scrollContainer.current.scrollLeft >=
            scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth
          ) {
            scrollingRight = false;
          } else {
            scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        } else {
          if (scrollContainer.current.scrollLeft <= 0) {
            scrollingRight = true;
          } else {
            scrollContainer.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);

    if (rightbtn.current && leftbtn.current && scrollContainer.current) {
      rightbtn.current.addEventListener('click', () => {
        scrollContainer.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      });

      leftbtn.current.addEventListener('click', () => {
        scrollContainer.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      });
    }

    const interval = setInterval(autoScroll, 7000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex w-full h-full">
        <div className="first flex-1 bg-blue-500">
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 flex overflow-x-scroll scrollbar-hide" ref={scrollContainer}>
              <img
                src="https://images.pexels.com/photos/18604178/pexels-photo-18604178/free-photo-of-a-view-of-a-city-at-sunset-with-buildings-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 1"
                className="flex-shrink-0 w-full h-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/903028/pexels-photo-903028.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 2"
                className="flex-shrink-0 w-full h-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/7598378/pexels-photo-7598378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 3"
                className="flex-shrink-0 w-full h-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3287162/pexels-photo-3287162.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 4"
                className="flex-shrink-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                className="w-10 h-10 flex items-center justify-center bg-transparent border border-gray-300 rounded-full cursor-pointer"
                ref={leftbtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center bg-transparent border border-gray-300 rounded-full cursor-pointer"
                ref={rightbtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white text-black">
          <h1 className="text-3xl font-bold mb-6 mt-4 pl-5">Inquiry</h1>
          <form className="m-8">
            <div className="mb-4">
              <label htmlFor="fullname" className="block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full p-2 border rounded border-gray-300 bg-transparent outline-none"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded bg-transparent outline-none"
                required
                autoComplete="off"
              />
            </div>
            <div className="inputs flex mb-4">
              <div className="flex-1 mr-2 dateinput">
                <label htmlFor="date" className="block mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full p-2 border border-gray-300 rounded outline-none"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex-1 ml-2 mobileinput">
                <label htmlFor="mobile" className="block mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  pattern="[0-9]{10}"
                  className="w-full p-2 border border-gray-300 rounded outline-none"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <button type="submit" className=" cursor-pointer w-full p-2 bg-black text-white font-sans rounded-3xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
