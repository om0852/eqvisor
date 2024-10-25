import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-[auto] overflow-hidden bg-white text-black">
      <div className="py-[20vh] pl-[30px]  w-full md:px-[20vh]">
        <h1 className=" text-xl md:text-2xl font-semibold">About Us</h1>
        <p className=" text-2xl md:text-5xl w-[95%] md:w-[80%]">
          This is a space to share more about the business: who's behind it,
          what it does and what this site has to offer. It’s an opportunity to
          tell the story behind the business or describe a special service or
          product it offers.
        </p>
        <button className="text-white mt-4 bg-blue-600 hover:bg-black flex gap-4 flex-row py-2 rounded-full items-center justify-between w-[20vh] md:w-[35vh] px-2">
          <span className="ml-4">Read More</span>
          <span className="rounded-full p-2 bg-white">
            <img
              src="https://img.icons8.com/?size=50&id=15195&format=png&color=111111"
              className="text-white md:w-[20px] md:h-[20px] w-[14px] h-[14px] "
              alt="circled-chevron-right"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
