"use client";
import React, { useState } from "react";
import PaymentButton from "./_components/PaymentButton";
import Head from "next/head";

const UploadDocuments = () => {
  const [signatureFile, setSignatureFile] = useState(null);
  const [panFile, setPanFile] = useState(null);

  // Handle file uploads
  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[auto] overflow-hidden lg:min-h-screen bg-gray-50">
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-2xl">
        {/* Step Title */}
        <h3 className="text-gray-400 text-sm font-medium mb-2">Step 6 of 7</h3>
        <h2 className="text-gray-800 text-lg font-semibold mb-6">Upload documents</h2>

        {/* Income Proof - Disabled */}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-2">Income proof</label>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <select className="flex-grow border rounded px-3 py-2 text-sm text-gray-400 bg-gray-100">
              <option disabled value="" className="cursor-not-allowed">
                Select proof type
              </option>
              <option value="salary_slip">Salary Slip</option>
              <option value="bank_statement">Bank Statement</option>
            </select>
            <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded text-sm font-medium cursor-not-allowed">
              Upload
            </button>
          </div>
        </div>

        {/* Signature Upload */}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-2">Signature*</label>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <label
              htmlFor="signatureUpload"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium cursor-pointer"
            >
              Upload
            </label>
            <input
              type="file"
              id="signatureUpload"
              className="hidden"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => handleFileChange(e, setSignatureFile)}
            />
            <p className="text-gray-500 text-xs">
              Kindly upload a signature done with a pen on a blank piece of paper. Signature done by pencil, markers, etc. will not be accepted.
            </p>
          </div>
          {signatureFile && (
            <p className="text-green-600 text-xs mt-1">Uploaded: {signatureFile.name}</p>
          )}
        </div>

        {/* Copy of PAN Upload */}
        <div className="mb-8">
          <label className="block text-gray-600 text-sm mb-2">Copy of PAN*</label>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <label
              htmlFor="panUpload"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium cursor-pointer"
            >
              Upload
            </label>
            <input
              type="file"
              id="panUpload"
              className="hidden"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => handleFileChange(e, setPanFile)}
            />
            <p className="text-gray-500 text-xs">Upload a copy of your PAN card.</p>
          </div>
          {panFile && (
            <p className="text-green-600 text-xs mt-1">Uploaded: {panFile.name}</p>
          )}
        </div>

        {/* Proceed to Pay Button */}
        <div className="text-center">
          <PaymentButton />
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
