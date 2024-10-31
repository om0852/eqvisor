"use client";
import React, { useState } from "react";
import Input from "./_components/input";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [error, setError] = useState(null);
  const handleError = (e) => {
    if (e.target.value) {
      setError(null);
    } else {
      setError("Enter Message");
    }
  };
  return (
    <>
      <Navbar />
      <div className="w-full h-auto py-[15vh] bg-[#BDBDFF] px-[2vh] md:px-[10vh] overflow-hidden text-black">
        <div className="text-center mb-8">
          <h1 className=" text-xl md:text-2xl font-semibold">
            READY TO GET STARTED?
          </h1>
          <p className="text-2xl md:text-4xl mt-2">
            Discover a new era of banking.
            <br /> Reach out to start your journey today.
          </p>
        </div>
        <form className="pt-[10vh] grid gap-4 grid-cols-1 md:grid-cols-2">
          <Input
            label="First name"
            errormessage="Enter your first name"
            type="text"
          />
          <Input
            label="Last name"
            errormessage="Enter your last name"
            type="text"
          />
          <Input label="Email" errormessage="Enter your email" type="email" />
          <Input
            label="Phone"
            errormessage="Enter your phone number"
            type="tel"
          />
          <div className="md:col-span-2">
            <label className="block mb-1">Message</label>
            <textarea
              onBlur={handleError}
              className="border-[1px] w-full h-[15vh] px-3 rounded-2xl border-black outline-none bg-transparent"
            ></textarea>
            {error != null && (
              <p className="text-md text-red-700 flex flex-row items-center gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#f70a0a"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: " normal" }}
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16,21h-2v-7h2zM15,11.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5c0,0.828 -0.672,1.5 -1.5,1.5z"></path>
                    </g>
                  </g>
                </svg>{" "}
                {error}
              </p>
            )}
          </div>
          <div>
            <button className="w-[40vh] h-[7vh] rounded-2xl bg-black text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Page;
