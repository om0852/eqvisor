import Eqvisor_logo from "@/components/Eqvisor_logo";
import Input from "@/components/Input";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[100vh] px-[10vh] py-[15vh]">
      <div>
        <Eqvisor_logo className={"w-[auto] h-[4vh]"} />
        <p className="py-[4vh]">
          Completing further process will link your DigiLocker account with
          EQvisor application. Kindly make sure your DigiLocker account exists.
        </p>
        <input
          type="text"
          className="w-full h-[7vh]  border-[1px] rounded-xl px-[3vh]"
          placeholder="Enter Aadhaar Number*"
        />
        <p className="py-[8vh]">
          Please enter the captcha in the space given below:
        </p>
        <div className="flex gap-10">
          <div className="w-[40vh] h-[10vh] border-[1px] border-black"></div>
          <div className="w-[40vh] h-[10vh] border-[1px] border-black"></div>
        </div>
        <p className="text-blue-600">Refresh Captcha</p>
        <button className="w-full font-semibold mt-[5vh] rounded-lg bg-blue-600 py-2 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default page;
