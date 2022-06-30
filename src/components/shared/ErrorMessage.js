import React from "react";

const ErrorMessage = () => {
  return (
    <div>
      <div className=" text-red-500 max-w-[300px]   py-2 px-4 mx-auto  border border-secondary  flex items-center rounded-md bg-white  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className=" text-sm ml-2  ">Task Length More Then 10 Character</h2>
      </div>
    </div>
  );
};

export default ErrorMessage;
