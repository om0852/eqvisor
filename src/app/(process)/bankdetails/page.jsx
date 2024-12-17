"use client";
import React, { useState } from "react";

export const UploadSec = () => {
  const [info, setInfo] = useState({
    IFSC: "",
    MICR: "",
    AC: "",
    BANK: "",
    UPI: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to proceed.");
    } else {
      console.log(info);
    }
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div className="flex justify-center min-h-screen items-center place-items-center w-[100%]">

    <div className="flex justify-center items-center w-full h-[85%]  bg-gray-50 px-4">
      {/* Main Container */}
      <section className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-md border border-gray-300">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-gray-500 text-sm font-medium">Step 4 of 7</h3>
          <h1 className="text-3xl font-semibold mt-2">Link your bank account</h1>
          <p className="text-gray-600 mt-2">
            Bank account should be in your name from which you will transact funds for investment.
          </p>
        </div>

        {/* Forms Section */}
        <div className="flex items-center justify-center gap-8">
          {/* Left Form */}
          <form
            onSubmit={handleFormSubmit}
            className="flex-1 border border-gray-300 rounded-md shadow-sm p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Link using IFSC</h2>
            <label className="block mb-2 text-sm font-medium text-gray-700">IFSC Code</label>
            <input
              type="text"
              name="IFSC"
              placeholder="Enter IFSC code"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-blue-500"
              value={info.IFSC}
              onChange={handleInputChange}
              />

            <label className="block mb-2 text-sm font-medium text-gray-700">Branch MICR Code</label>
            <input
              type="text"
              name="MICR"
              placeholder="Enter MICR code"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-blue-500"
              value={info.MICR}
              onChange={handleInputChange}
              />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Bank Account Number
            </label>
            <textarea
              name="AC"
              placeholder="Enter Bank account number"
              rows={2}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-blue-500"
              value={info.AC}
              onChange={handleInputChange}
              />

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
                className="mr-2"
                />
              <span className="text-sm text-gray-700">
                I accept the terms{" "}
                <a href="/terms" className="text-blue-500 underline">
                  Read our T&Cs
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
              Save information
            </button>
          </form>

          {/* Divider */}
          <div className="h-full flex flex-col items-center">
            <div className="w-[3px] h-[30vh] bg-blue-500"></div>
            <span className="text-gray-400 font-semibold text-xl">or</span>
            <div className="w-[3px] h-[30vh] bg-blue-500"></div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleFormSubmit}
            className="flex-1 border border-gray-300 rounded-md shadow-sm p-6"
            >
            <h2 className="text-lg font-semibold mb-4">Link using UPI-ID</h2>
            <label className="block mb-2 text-sm font-medium text-gray-700">Bank Name</label>
            <input
              type="text"
              name="BANK"
              placeholder="Enter Bank name"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-blue-500"
              value={info.BANK}
              onChange={handleInputChange}
              />

            <label className="block mb-2 text-sm font-medium text-gray-700">Valid UPI-ID</label>
            <input
              type="text"
              name="UPI"
              placeholder="Enter valid UPI-ID"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-blue-500"
              value={info.UPI}
              onChange={handleInputChange}
              />

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
                className="mr-2"
                />
              <span className="text-sm text-gray-700">
                I accept the terms{" "}
                <a href="/terms" className="text-blue-500 underline">
                  Read our T&Cs
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
              Save information
            </button>
          </form>
        </div>
      </section>
    </div>
              </div>
  );
};

export default UploadSec;
