import React from "react";

const Input = ({ type, id, placeholder }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className="inner-shadow bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-r-0 rounded-r-none"
        placeholder={placeholder}
        required
      />
      
    </>
  );
};

export default Input;
