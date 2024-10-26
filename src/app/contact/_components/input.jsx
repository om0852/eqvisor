"use client";
import React, { useState } from "react";

const Input = ({ label, type, errormessage }) => {
  const [error, setError] = useState(null);
  const handleError = (e) => {
    if (e.target.value) {
      setError(null);
    } else {
      setError(errormessage);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="capitalize">{label}</label>
      <input
        className="border-[1px] h-[5vh] md:h-[7vh] px-3 rounded-full border-black outline-none bg-transparent"
        name={label}
        type={type}
        onBlur={handleError}
      />
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
  );
};

export default Input;
