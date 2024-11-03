"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import StepComponent from "@/components/StepComponent";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PanProcess = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [pan, setPan] = useState("");
  const [dob, setDob] = useState("");

  const handleContinue = () => {
    if (!name || !pan || !dob) {
      toast.error("Please fill out all fields.");
      return;
    }
    router.push("digilocker");
  };

  // Set max date to today’s date
  const today = new Date().toISOString().split("T")[0];
  console.log(today);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="absolute top-[-3vh] right-[-70vh] w-[100vh] md:w-[200vh] h-[100vh] bg-blue-400 rounded-bl-full "></div>
      <div className="relative z-[5] w-[100%] md:w-[70%] h-[70%]">
        <StepComponent
          step={1}
          totalStep={7}
          description={"Starting with your PAN"}
        />
        <div className="relative bg-white z-[5] login-shadow rounded-xl flex flex-col gap-10 w-[70%] p-[10vh] pb-[5vh] h-[70%]">
          <input
            type="text"
            className="z-5 w-[100%] outline-none border-b-2 border-gray-600"
            placeholder="Enter name as per PAN"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="w-full flex items-center py-[2vh] gap-8">
            <input
              type="text"
              className="z-5 w-[90%] outline-none border-b-2 border-gray-600"
              placeholder="Enter PAN"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
            />
            <input
              type="date"
              className="z-5 w-[90%] outline-none border-b-2 border-gray-600"
              placeholder="DOB"
              max={today}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="w-full h-full flex items-end justify-end text-bottom">
            <p
              className="text-blue-500 flex gap-2 items-center cursor-pointer"
              onClick={handleContinue}
            >
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanProcess;
