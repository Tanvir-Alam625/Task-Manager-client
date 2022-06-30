import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className=" py-2 px-4 mx-auto max-w-[300px]  border border-secondary  flex items-center rounded-md bg-white text-neutral ">
      <span class="loader"></span>
      <h2 className="ml-2 lg:text-xl text-sm  ">Please Wait Loading...</h2>
    </div>
  );
};

export default Spinner;
