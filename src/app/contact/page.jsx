"use client";
import React, { useState } from "react";
import Input from "./_components/input";
import Footer from "@/components/Footer";

const Page = () => {
  const [error, setError] = useState(null);
  const handleError = (e) => {
    if (e.target.value) {
      setError(null);
    } else {
      setError(errormessage);
    }
  };
  return (
    <>
      <div className="w-full h-auto py-[15vh] bg-[#BDBDFF] px-[2vh] md:px-[10vh] overflow-hidden">
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
