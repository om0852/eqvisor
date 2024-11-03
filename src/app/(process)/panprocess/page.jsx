import Input from "@/components/Input";
import StepComponent from "@/components/StepComponent";
import Link from "next/link";
import React from "react";

const PanProcess = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[70%] h-[70%]">
        <StepComponent
          step={1}
          totalStep={7}
          description={"Starting with your PAN"}
        />
        <div className="login-shadow flex flex-col gap-10 w-[70%] p-[10vh] pb-[5vh] h-[70%]">
          <input
            type="text"
            className="w-[100%] outline-none border-b-2 border-gray-600"
            placeholder="Enter name as per PAN"
          />
          <div className="w-full flex items-center py-[2vh] gap-8">
            <input
              type="text"
              className="w-[90%] outline-none border-b-2 border-gray-600"
              placeholder="Enter PAN"
            />
            <input
              type="date"
              className=" w-[90%] outline-none border-b-2 border-gray-600"
              placeholder="DOB"
            />
          </div>
          <div className="w-full h-full flex items-end justify-end text-bottom">
            <Link className="text-blue-500 flex gap-2 items-center" href="/">
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanProcess;
