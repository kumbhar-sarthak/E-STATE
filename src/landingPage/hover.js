import React, { useState, useRef, useEffect } from "react";
import "./home.css";

const Video = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const modalContentRef = useRef(null);

  // Show the modal with animation
  const show = () => {
    setModalVisible(true);
  };

  // Close the modal with animation
  const closeModal = () => {
    setModalVisible(false);
  };

  // Handle clicks outside the modal to close it
  const handleOutsideClick = (event) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalVisible]);

  useEffect(()=>{
    console.log(isModalVisible)
  },[isModalVisible])

  return (
    <div className="container h-150 mx-auto p-8 flex justify-center gap-4 main">
      {/* Trigger Div */}
      <div
        className="w-full h-50 rounded-2xl custom"
        id="triggerDiv"
        onClick={show}
      >
        <h4>find</h4>

        {/* Modal */}
        {isModalVisible && (
          <div
            id="modalDiv"
            className={`absolute inset-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-50 z-10 ${
              isModalVisible ? "active" : "hidden"
            }`}
          >
            <div
              ref={modalContentRef}
              className="w-[80vw] h-[80vh] max-w-full max-h-full bg-white shadow-lg rounded-lg p-6 scale-modal"
              id="modalContent"
            >
              <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
              <p className="text-gray-600 mb-6">This modal animates smoothly and maintains an 80% aspect ratio.</p>
              <button
                id="closeButton"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Video */}
      <video
        className="sm:w-2/3 h-auto aspect-video rounded-xl object-cover main-video"
        autoPlay
        loop
        muted
      >
        <source src="./public/display.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
