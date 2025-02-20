import React, { useRef, useEffect, useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { TbHomeSearch } from "react-icons/tb";
import "../home.css";

export const Search = () => {
  const [budget, setbudget] = useState(false);
  const modalContentRef = useRef(null);
  const triggerDivRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      modalContentRef.current?.classList.add("active");
    }, 40);
  };

  const closeModal = () => {
    if (modalContentRef.current) {
      setIsModalVisible(false);
      setTimeout(() => {
        modalContentRef.current.classList.remove("active");
      }, 400);
    }
  };

  const handleOutsideClick = (event) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      console.log("Outside modal content. Closing modal.");
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalVisible]);

  const handleTabSwitch = (event) => {
    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach((tab) => {
      if (tab.classList.contains("selected")) {
        tab.classList.remove("selected");
      }
    });

    event.target.classList.add("selected");
  };

  const [sliding, setsliding] = useState(false);

  const [price, setPrice] = useState(null);

  const handlePrice = (event) => {
    setPrice(event.target.value);
    setsliding(false);
  };
  const displayPrice = () => {
    if (price == 0) {
      setsliding(false);
    } else {
      setsliding(true);
    }
  };

  const [showTypeOptions, setShowTypeOptions] = useState(false);

  const handleBudgetToggle = () => {
    setbudget(!budget);
    setShowTypeOptions(false);
  };

  const handleTypeToggle = () => {
    setShowTypeOptions(!showTypeOptions);
    setbudget(false);
  };

  // this is menu or search page for finding property
  return (
    <>
      <div
        className="w-full h-50 rounded-2xl custom flex justify-center items-center"
        ref={triggerDivRef}
        onMouseEnter={showModal}
      >
        <TbHomeSearch size={40} color="rgba(0, 0, 0, 0.169)" />
      </div>
      {isModalVisible && (
        <div
          className="absolute inset-0 flex items-center justify-center w-full h-screen bg-opacity-50 z-10"
          id="modalDiv"
        >
          <div
            id="modalContent"
            ref={modalContentRef}
            className="w-[80vw] h-[80vh] max-w-full max-h-full bg-white shadow-lg rounded-lg p-6 scale-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <ul className="flex gap-5">
                <li
                  className="tabs selected"
                  onClick={handleTabSwitch}
                  data-key="0"
                >
                  Buy
                </li>
                <li className="tabs" onClick={handleTabSwitch} data-key="1">
                  Rent
                </li>
                <li className="tabs" onClick={handleTabSwitch} data-key="2">
                  PG / CO living
                </li>
                <li className="tabs" onClick={handleTabSwitch} data-key="3">
                  Project
                </li>
              </ul>
            </div>
            {/* buy */}
            <p className="text-gray-600 mb-6 mt-10">
              <form action="/submit">
                <div>
                  <div className="w-full flex items-center gap-4">
                    <input
                      type="location"
                      placeholder="Enter your location"
                      id="location"
                      className="border border-gray-300 rounded-md p-2 w-full outline-blue-200"
                      autoComplete="off"
                    />
                    <div>
                      <BiTargetLock size={30} color="#3d9ad8" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-black">Filters</h6>
                    <div className="container mx-auto p-6">
                      <div
                        className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4"
                        id="filters"
                      >
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Apartment/Flat
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Commercial
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Residential Land
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Farm House
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Shops
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Land
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </p>
            <div id="buy-slider">
              <div className="flex space-x-2">
                <button
                  className="cursor-pointer mb-5 border border-gray-400 pr-3 pl-3 pt-1 pb-1 rounded-2xl "
                  onClick={handleBudgetToggle}
                >
                  Budget
                </button>
                <button
                  className="cursor-pointer mb-5 border border-gray-400 pr-3 pl-3 pt-1 pb-1 rounded-2xl"
                  onClick={handleTypeToggle}
                >
                  Type
                </button>
              </div>

              {budget && (
                <div className="flex items-center gap-4">
                  <label htmlFor="0">0</label>
                  <input
                    id="small-range"
                    className="w-3/4 range-sm h-1 cursor-pointer dark:bg-gray-700 appearance-none cursor-pointer dark:bg-gray-700 "
                    type="range"
                    defaultValue="0"
                    onChange={handlePrice}
                    onMouseUp={displayPrice}
                    onTouchEnd={displayPrice}
                  />
                  <label htmlFor="100">100 Lakhs</label>
                </div>
              )}
              {sliding && (
                <div className="w-30 m-3 border border-gray-400 p-1 rounded-md text-center bg-blue-100">
                  {price} Lakhs
                </div>
              )}

              {showTypeOptions && (
                <div className="flex gap-3 mt-4">
                  <button className="border border-black-400 px-4 py-1 rounded-2xl cursor-pointer">
                    1BHK
                  </button>
                  <button className="border border-black-400 px-4 py-1 rounded-2xl cursor-pointer">
                    2BHK
                  </button>
                  <button className="border border-black-400 px-4 py-1 rounded-2xl cursor-pointer">
                    3BHK
                  </button>
                  <button className="border border-black-400 px-4 py-1 rounded-2xl cursor-pointer">
                    4BHK
                  </button>
                </div>
              )}
            </div>

            {/* for all is same */}
            <div id="buy-buttons" className="flex gap-4 items-center mt-5">
              <div
                className="search"
                onClick={() => {
                  alert("Working on it sorry for inconvenience 🙏🙏");
                }}
              >
                Search
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-100 text-black px-4 py-2 rounded-md cursor-pointer"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
