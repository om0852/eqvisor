import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-[auto]">
      <div className="py-[20vh] px-[20vh]">
        <h1 className="text-2xl font-semibold">About Us</h1>
        <p className="text-5xl w-[80%]">
          This is a space to share more about the business: who's behind it,
          what it does and what this site has to offer. It’s an opportunity to
          tell the story behind the business or describe a special service or
          product it offers.
        </p>
        <button className="text-white mt-4 bg-blue-600 hover:bg-black flex gap-4 flex-row py-2 rounded-full items-center justify-between w-[35vh] px-2">
          <span className="ml-4">Read More</span>
          <span className="rounded-full p-2 bg-white">
            <img

              width="20"
              height="20"
              src="https://img.icons8.com/?size=50&id=15195&format=png&color=111111"
              className="text-white"
              alt="circled-chevron-right"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
