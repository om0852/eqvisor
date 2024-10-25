import React from "react";

const HomeContainer = () => {
  return (
    <>
      <div className="w-full  h-[auto] py-[5vh] overflow-hidden">
        <img
          src={"/eqvisor_bg.webp"}
          alt="eqvisor"
          className="absolute top-0 w-[100%] h-[70vh] md:h-[100vh]"
        />
        <div className="px-8">
          <h1 className=" z-10 relative text-white text-3xl md:text-6xl mt-[8%] leading-snug last:leading-0 font-bold w-[80%] md:w-[50%]">
            A START-UP FOR START-UPS
          </h1>
          <button className="text-black mt-4 relative bg-white flex gap-4 flex-row py-2  rounded-full items-center justify-between w-[25vh] md:w-[35vh] px-2">
            <span className="ml-4">Get Started</span>
            <span>
              <img
              className="md:w-10 md:h-10 w-7 h-7"
                src="https://img.icons8.com/ios-filled/50/circled-chevron-right.png"
                alt="circled-chevron-right"
              />
            </span>
          </button>
          <div className=" w-[40vh] md:w-[60vh] h-[20vh] md:h-[40vh] relative top-[7vh] md:top-[13vh] text-md md:text-lg text-white">
            <p className="py-0">
              This is a space to welcome visitors to the site. Grab their
              attention with copy that clearly states what the site is about.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
