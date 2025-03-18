import "./news.css";
export const News = () => {
  return (
    <>
      <div className="scroll-container" id="scroll-container">
        <div className="snap-item " id="n1"></div>
        <div className="snap-item " id="n2"></div>
        <div className="snap-item " id="n3"></div>
        <div className="snap-item " id="n4"></div>
        <div className="snap-item " id="n5"></div>
        <div className="absolute bottom-0 right-0 mr-4 mb-4">
          <div className="w-[25px] h-[25px] rounded-2xl border border-white cursor-pointer flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-4"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <div className="w-[25px] h-[25px] rounded-2xl border border-white mt-2 cursor-pointer flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-4"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
